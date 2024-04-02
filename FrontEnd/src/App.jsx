import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import SignUp from './pages/signup/SignUp'
import Homepage from './pages/homepage/Homepage'
import { useAuthContext } from './context/AuthContext'
import { Navigate } from 'react-router-dom'
import Login from './pages/login/LoginPage'

function App() {

  const {auth} = useAuthContext()
  
  return (
    <>
      <div className='w-full h-screen flex items-center justify-center text-[#e72a2a]'>
        <Routes>
          <Route path='/login' element={auth ? <Navigate to = "/" /> : <Login />} />
          <Route path='/' element={auth ? <Homepage /> : <Navigate to = "/login" /> } />
          <Route path='/signup' element={ auth ? <Navigate to = "/" /> : <SignUp />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App


