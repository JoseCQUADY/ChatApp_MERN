
import { useEffect } from "react";
import {useSocketContext} from "../context/SocketContex";
import useConversation from "../zustand/userConversation";



export const useListenMessages = () => {

    const {socket} = useSocketContext();

    const {messages, setMessages}  = useConversation();

    useEffect(() => {
        socket?.on("newMessage",(newMessage) => {
            setMessages([...messages,newMessage])
        })
        return () => socket?.off("newMessage");
    }, [socket, messages, setMessages]);

}
