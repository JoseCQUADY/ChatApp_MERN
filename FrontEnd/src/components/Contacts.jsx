import Contact from "./Contact"
import useGetConversation from "../hooks/useGetConversation"
import {useListenContact} from "../hooks/useListenContact"

const Contacts = () => {
  const { loading,conversations } = useGetConversation()

  useListenContact()
    
  return (
    <div className="py-0 flex flex-col overflow-auto">
      {conversations.map((conversation) => (
        <Contact key={conversation._id} conversation={conversation} />
      ))}
      {loading ? <span className="loading load mx-auto"></span> : null}
    </div>)
}

export default Contacts