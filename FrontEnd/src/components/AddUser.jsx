import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import useAddContacts from "../hooks/useAddContacts";

const AddUser = () => {

  const [contact,setContact] = useState("")
  const {loading,addContacts} = useAddContacts();

  const handleSubmit = async (e) => {
    if(!contact) return;
    await addContacts(contact);
    setContact("");
  }

  return (
    <div className="h-screen w-screen backdrop-filter backdrop-blur-md flex justify-center items-center ">
      <div className="flex flex-col w-2/3 items-center justify-center ">
      <div className="modal-box text-black bg-[#f1e7ff] ">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg">Add new contact!</h3>

        <div className='flex justify-center items-center h-14 w-full my-4' >
          <form onSubmit ={handleSubmit} action="" className=' flex '>
            <input value = {contact} onChange ={(e) => setContact(e.target.value)}type="text" placeholder="Search" className="input input-bordered rounded-full text-white w-full" />
            <button type='submit' className='btn btn-circle border-cyan-500 hover:border-cyan-500 hover:bg-sky-700 bg-sky-500 texg-white mx-2'>
              <FaSearch className="text-white"/>
            </button>
          </form>
        </div>
        <p className="py-4 label-text-alt">Press ESC key or click on ✕ button to close</p>
      </div>
    </div>

    </div>


  )
}

export default AddUser