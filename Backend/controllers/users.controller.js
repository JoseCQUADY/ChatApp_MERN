import User from '../models/user.model.js';
import Contact from '../models/contacts.model.js';
import Messages from '../models/messages.model.js';
import Conversation from '../models/conversation.model.js';

export const getSidebarUsers = async (req, res) => {
    try {
        const loggedUserId = req.user._id; // id of the logged in user
        
        const contacts = await Contact.findOne({ userId: loggedUserId }).populate('contacts', 'profilePicture fullName '); // Exclude the 'password' field from the populated contacts
        if (!contacts) {
            return res.status(400).json({ error: 'No contacts found' });
        }
        res.status(200).json(contacts.contacts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const addUser = async (req, res) => {
    try {
        const { id } = req.params;  // id of the user to be added as friend
        const loggedUserId = req.user._id; // id of the logged in user

        if (!id) {
            return res.status(400).json({ message: 'Please provide a user id' });
        }

        const newContact = await User.findOne({ userName: id }).select('-password');

        if (!newContact) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (newContact._id.toString() === loggedUserId.toString()) {
            return res.status(400).json({ message: 'Cannot add yourself as a contact' });
        }

        let contact = await Contact.findOne({ userId: loggedUserId });

        if (contact && contact.contacts.includes(newContact._id)) {
            return res.status(400).json({ message: 'User already exists in contacts' });
        }

        contact = await Contact.findOneAndUpdate(
            {
                userId: loggedUserId
            },
            {
                $addToSet: { contacts: newContact._id }
            },
            {
                upsert: true
            });


        await contact.save();

        res.status(201).json(contact);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;  // id of the user to be removed from contacts
        const loggedUserId = req.user._id; // id of the logged in user

        if (!id) {
            return res.status(400).json({ message: 'Please provide a user id' });
        }

        const contact = await Contact.findOne({ userId: loggedUserId });

        if (!contact) {
            return res.status(400).json({ message: 'No contacts found' });
        }
        
        const loggedUser = await User.findById(loggedUserId).select('-password');
    
        const user = await User.findOne({ userName: id }).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const contactIndex = contact.contacts.indexOf(user._id);
        if (contactIndex === -1) {
            return res.status(400).json({ message: 'User not found in contacts' });
        }
    
        contact.contacts.splice(contactIndex, 1);

        // Remove all messages and conversations between the two users

        const conversation = await Conversation.findOne({
            members: { $all: [loggedUser._id, user._id] }
        }).populate('messages');

        if (!conversation) {
            return res.json({ message: 'No messages found' });
        }else{
            conversation.messages.forEach(async (message) => {
                await Messages.findByIdAndDelete(message._id);
                message.save();
            })
            await Conversation.findByIdAndDelete(conversation._id);
            conversation.save();
        }

        contact.save();
       
        res.status(200).json("User removed from contacts");

    } catch (error) {
        console.log(error); 
        res.status(500).json({ message: error.message });
    }
}

