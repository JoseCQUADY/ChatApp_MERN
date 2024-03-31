import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../zustand/userConversation";
import { useEffect } from "react";
const Chat = () => {
  const { selectedConversation,setSelectedConversation } = useConversation();
  
  useEffect(() => {

    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);
    
  return (

    <div className="w-full flex flex-col h-full ">
      {!selectedConversation ? (<NoChatSelected  />) : (
        <>
          <div className="bg-black text-white px-4 py-2 mb-2 gap-5">
            <span className="text-white">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}

    </div>
  );
};

export default Chat