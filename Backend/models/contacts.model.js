import mongoose from "mongoose";

const conctactSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    contacts: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: []
    }]
}, { timestamps: true });

const  Contact = mongoose.model('Contact', conctactSchema);

export default Contact;