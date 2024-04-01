
import useLogout from "../hooks/useLogout"
import { CiLogout } from "react-icons/ci";
import { FaRegAddressBook } from "react-icons/fa6";
import useConversation from "../zustand/userConversation";
import { useEffect } from "react";
import AddUser from "./AddUser";

const LogoutButton = () => {
  const { loading, logout } = useLogout()


  return (
    <div className=" items-center flex justify-between px-2 text-2xl h-12  mt-auto  ">
      {!loading ? (
        <>
          <CiLogout className="cursor-pointer" onClick={logout} />
          <FaRegAddressBook className="cursor-pointer " onClick={()=> document.getElementById('my_modal_3').showModal()} />
          <dialog id="my_modal_3" className="modal">
            <AddUser/>
          </dialog>
        </>


      ) : (

        <span className="loading loading-spinner"></span>

      )}
    </div>
  )
}

export default LogoutButton