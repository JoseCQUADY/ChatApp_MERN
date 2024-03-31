import { useState } from "react"
import toast from "react-hot-toast"

const useSignUp = () => {
  const [loading, setLoading] = useState(false)

  const signUp = async ({fullName,userName,password,confirmPassword}) => {
    const succes = handleInputsErrors({fullName,userName,password,confirmPassword})
    if (!succes) return
    setLoading(true)
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({fullName,userName,password})
      }) 

      const data = await res.json()

    } catch (error) {
      toast.error("An error occurred")
    } finally {
      setLoading(false)
    }
  }
  return {signUp,loading}
}

export default useSignUp

function handleInputsErrors({fullName,userName,password,confirmPassword}) {
  
  if (!fullName || !userName || !password || !confirmPassword) {
    toast.error("All fields are required")
    return false

  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match")
    return false
  }
  
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters")
    return false
  }
  return true
}