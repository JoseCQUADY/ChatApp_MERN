import { useState } from "react";
import { toast } from "react-hot-toast";

export const useAddContacts = () => {
    const [loading, setLoading] = useState(false)

    const addContacts = async (contact) => {
        setLoading(true)
        try {
            const res = await fetch(`/api/users/add/${contact}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await res.json()
            if (data.eror) {
                throw new Error(data.error)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { addContacts, loading }
}

export default useAddContacts;