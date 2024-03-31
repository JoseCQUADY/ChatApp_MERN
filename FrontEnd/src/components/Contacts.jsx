import Contact from "./Contact"
import useGetConversation from "../hooks/useGetConversation"
const Contacts = () => {
  const { loading,conversations } = useGetConversation()
  return (
    <div className="py-0 flex flex-col overflow-auto">
      {conversations.map((conversation) => (
        <Contact key={conversation._id} conversation={conversation} />
      ))}
      {loading ? <span className="loading load mx-auto"></span> : null}
    </div>)
}

export default Contacts