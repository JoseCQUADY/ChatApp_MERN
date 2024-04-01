
import useConversation from '../zustand/userConversation';
import { useAuthContext } from '../context/AuthContext';

export const Message = ({message}) => {
    const {auth} = useAuthContext();
    const {selectedConversation} = useConversation();

    const isSender = message.senderId === auth._id;
    const chatClass = isSender ? "chat chat-end" : "chat chat-start";
    const profileImage = isSender ? auth.profilePicture : selectedConversation.profilePicture;
    const bubleColor = isSender ? "bg-blue-500" : "bg-gray-500";


    return (
        <div className={`chat ${chatClass}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Avatar" src={profileImage} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubleColor}`}>{message.message}</div>
            {/* <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50"> 12:46</time>
                </div>
                <div className="chat-bubble">I hate you!</div>
            </div> */}
        </div>
        // <div className="chat chat-sender">
        //     <div className="chat-image avatar">
        //         <div className="w-10 rounded-full">
        //             <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        //         </div>
        //     </div>
        //     <div className={'chat-bubble text-white bg-blue-500'}>
        //         Hi there! How can I help you today?
        //     </div>
        //     <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
        // </div>
    )
}
