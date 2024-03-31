import { useState } from "react"
import { toast } from "react-hot-toast"
import useGetConversation from "../hooks/useGetConversation"
import useConversation from "../zustand/userConversation"

const SearchInput = () => {
    const [search, setSearch] = useState('')
    const { setSelectedConversation } = useConversation()
    const { conversations } = useGetConversation()

    const handleSubmmit = (e) => {
        e.preventDefault()
        if (!search) return
        if (search.length < 3) return
       
        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation)
            setSearch('')
        } else {
            toast.error('No user found')
        }

    }


    return (
        <div className='flex justify-center items-center h-14 w-full my-2'>
            <form onSubmit={handleSubmmit} action="" className=''>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" className="input input-bordered rounded-full text-white" />
                <button type='submit' className='btn btn-circle border-cyan-500 hover:border-cyan-500 hover:bg-sky-700 bg-sky-500 texg-white mx-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 opacity-70 fill-white"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </button>
            </form>
        </div>
    )
}

export default SearchInput