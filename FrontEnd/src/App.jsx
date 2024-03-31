import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import SignUp from './pages/signup/SignUp'
import Homepage from './pages/homepage/Homepage'
import Login from './pages/login/Login'

function App() {
  return (
    <>
      <div className='w-full h-screen flex items-center justify-center text-[#e72a2a]'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App


