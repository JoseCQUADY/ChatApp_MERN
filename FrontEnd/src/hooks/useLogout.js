
import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"

const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const { setAuth } = useAuthContext()
    const logout = async () => {
        setLoading(true)
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            console.log(data)
            if (data.error) {
                toast.error(data.error)
                return
            }
            setAuth(null)
            localStorage.removeItem("chat-user")
        } catch (error) {
            toast.error("An error occurred")
        } finally {
            setLoading(false)
        }

    }
    return { logout, loading }
}

export default useLogout