import moongose from "mongoose";

const conversationsSchema = moongose.Schema({
    members: [{
        type: moongose.Types.ObjectId,
        ref : "User"
    }],
    messages: [{
        type: moongose.Types.ObjectId,
        ref : "Message",
        default: []
    }]
}, { timestamps: true });

const Conversation = moongose.model('Conversation', conversationsSchema);

export default Conversation;