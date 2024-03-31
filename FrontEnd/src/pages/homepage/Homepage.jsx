import React from 'react'
import Sidebar from '../../components/Sidebar'
import Chat from '../../components/Chat'

const Homepage = () => {
    return (

        <div className='flex items-center w-2/3 h-5/6 flex-row 
        justify-center bg-white-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 overflow-hidden'>
            <Sidebar />
            <Chat />
        </div>
    )
}

export default Homepage