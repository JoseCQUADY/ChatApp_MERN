
const Login = () => {
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
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#ffff] font-bold">Email</span>
                  </label>
                  <input type="email" placeholder="JohnDoe@gmail.com" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#ffff] font-bold">Password</span>
                  </label>
                  <input type="password" placeholder="123456" className="input input-bordered" required />
                  <label className="label">
                    <span className='label-text-alt link link-hover  font-semibold'>Don't have an account?</span>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-secondary btn-outline">Login </button>
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