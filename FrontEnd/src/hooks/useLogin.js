import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const {setAuth } = useAuthContext()
  const login = async ({ userName, password }) => {
    const succes = handleInputsErrors({ userName, password})
    if (!succes) return
    setLoading(true)
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({userName, password })
      })

      const data = await res.json()

      if (data.error) {
        toast.error(data.error)
        return
      }

      localStorage.setItem("chat-user", JSON.stringify(data))
      setAuth(data)
    } catch (error) {
      toast.error("An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return { login, loading }
}

export default useLogin

function handleInputsErrors({userName, password }) {
  if (!userName || !password ) {
    toast.error("All fields are required")
    return false
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters")
    return false
  }
  return true
}