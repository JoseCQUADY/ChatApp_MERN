
import { useEffect } from "react";
import {useSocketContext} from "../context/SocketContex";
import useConversation from "../zustand/userConversation";


export const useListenContact = () => {

    const {socket} = useSocketContext();

    const {conversations, setConversations}  = useConversation();

    useEffect(() => {
        socket?.on("newContact",(newContact) => {
            setConversations([...conversations,newContact])
        })
        return () => socket?.off("newContact");
    }, [socket, conversations, setConversations]);

}
