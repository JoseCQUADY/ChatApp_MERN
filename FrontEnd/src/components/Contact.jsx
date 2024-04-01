import useConversation from "../zustand/userConversation"
import { useSocketContext } from "../context/SocketContex";


const Contact = ({conversation}) => {

    const {selectedConversation,setSelectedConversation}= useConversation()

    const isSelected = selectedConversation?._id === conversation._id;

    const {onlineUsers} = useSocketContext();

    const isOnline = onlineUsers.includes(conversation._id);


    return (
        <>
            <div className={`flex gap-2 items-center rounder cursor-pointer hover:bg-sky-500 p-2 py-1
            ${isSelected ? "bg-sky-500" : ""}
            `} onClick={()=>setSelectedConversation(conversation)}>
                <div className={`avatar ${isOnline ? "online" : ""}`}>

                    <div className="rounded-full w-12">
                        <img src={conversation.profilePicture} alt="avatar" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className=" flex gap-3 justify-between">
                        <p>{conversation.fullName}</p>
                        <span>😈</span>
                    </div>
                </div>
            </div>
            <div className="divider my-1 h-1"></div>
        </>
    )
}

export default Contact