
import Conversation from "../models/conversation.model.js";
import Message from "../models/messages.model.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {

    try {
        const { id } = req.params;
        const { message } = req.body;

        const receiverId = id;
        const senderId = req.user._id;

        let conversation = await Conversation.findOneAndUpdate(
            {
                members: { $all: [senderId, receiverId] }
            },
            {
                upsert: true
            });

        if (!conversation) {
            conversation = new Conversation({
                members: [senderId, receiverId],
            });
        }

        const newMessage = new Message({ senderId, receiverId, message });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId);

        if (receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage', newMessage);
        }

        res.status(201).json(newMessage);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const getMessage = async (req, res) => {
    try {

        const { id: userChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            members: { $all: [senderId, userChatId] }
        }).populate('messages');

        if (!conversation) {
            return res.json({ message: 'No messages found' });
        }

        res.status(200).json(conversation.messages);


    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};






