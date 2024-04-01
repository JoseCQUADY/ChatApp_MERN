
import { IoMdFitness } from "react-icons/io"
import { useAuthContext } from "../context/AuthContext"
const NoChatSelected = () => {

    const {auth} = useAuthContext();

    return (
        <div className="flex items-center  justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-black font-bold flex flex-col items-center gap-2">
                <p>Hi  {auth.fullName}👊 !!</p>
                <p>Click on a chat to start messaging!!</p>
                <IoMdFitness className="text-3xl md:text-6xl text-center text-gray-200" />
            </div>
        </div>
    )
}

export default NoChatSelected