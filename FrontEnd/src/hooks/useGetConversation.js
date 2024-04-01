import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useConversation from '../zustand/userConversation'

const useGetConversation = () => {
    const [loading, setLoading] = useState(false)
    const {conversations, setConversations} =  useConversation();

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            try {
                const res = await fetch('/api/users')
                const data = await res.json()

                if(data.error){
                   throw new Error(data.error) 
                }
                setConversations(data)
            } catch (error) {
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
        }
        getConversations()
    }, [setConversations])

    return { loading, conversations }
}

export default useGetConversation