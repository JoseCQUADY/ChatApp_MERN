import { useState } from 'react'
import useLogin from '../../hooks/useLogin'
import {Link} from 'react-router-dom'


const Login = () => {
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {login,loading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    login({userName, password})
  }

  return (<div className="hero h-full sm:h-screen">
    <div className="hero-content flex-col lg:flex-row  sm:flex-col">
      <div className="text-center lg:text-left  max-w-screen-md">
        <h1 className="text-[#f03e3eec] text-5xl font-extrabold"> "It's not all about saying; maybe you can type it!"
        </h1>

      </div>
      <div className="mockup-code border-secondary">

        <div className="camera "></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 ">
            <div className='text-3xl font-extrabold text-[#ffff]'>
              Login Now!
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#ffff] font-bold">Username</span>
                  </label>
                  <input value = {userName} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="JohnDoe" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#ffff] font-bold">Password</span>
                  </label>
                  <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="123456" className="input input-bordered" required />
                  <label className="label">
                  
                    <Link to="/signup" className='label-text-alt link link-hover  font-semibold'>Don't have an account?</Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button disabled = {loading} className="btn btn-secondary btn-outline">
                    {loading ? <span className="loading loading-lg"></span> : "Login"}
                  </button>
                </div>
              </form>
              <label className="swap swap-flip text-5xl">
                <input type="checkbox" />
                <div className="swap-on">😈</div>
                <div className="swap-off">😇</div>
              </label>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Login