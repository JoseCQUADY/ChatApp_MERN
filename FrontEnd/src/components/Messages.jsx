import { useEffect, useRef } from "react"
import useGetMessages from "../hooks/useGetMessages"
import { Message } from "./Message"
import { set } from "mongoose"

const Messages = () => {
    const { messages, loading } = useGetMessages()
    const lastMessage = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessage.current.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    },[messages])

    return (
        <div className="px-4 flex-auto overflow-auto h-full w-full ">
            {!loading && messages.length > 0 && messages.map((message) =>
                <div ref={lastMessage}>
                    <Message message={message} />
                </div>
            )}
            {loading && messages.length === 0 && <p className="text-center">Send a message to start a conversation</p>}
        </div>
    )
}

export default Messages