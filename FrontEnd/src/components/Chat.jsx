import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
const Chat = () => {
  const noChatChoosed = true;
  return (

    <div className="w-full flex flex-col h-full ">
      {noChatChoosed ? (<NoChatSelected />) : (
        <>
          <div className="bg-black text-white px-4 py-2 mb-2 gap-5">
            <span className="text-white">John Doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}

    </div>
  );
};

export default Chat