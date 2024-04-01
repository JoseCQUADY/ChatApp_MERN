import Contacts from "./Contacts"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div className='w-1/2 h-full flex flex-col border-r  '>
      <SearchInput />
      <div className="divider my-0"></div> 
      <Contacts />
      <LogoutButton />
    </div>
   
  )
}

export default Sidebar