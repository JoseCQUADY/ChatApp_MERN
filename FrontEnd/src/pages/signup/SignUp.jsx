import React from 'react'
import useSignUp from '../../hooks/useSignUp'


const SignUp = () => {

    const [inputs, setInputs] = React.useState({
        fullName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })  

    const {loading,signUp}= useSignUp(inputs)
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signUp(inputs)
        console.log(inputs)
    }
    return (
        <div className="hero h-full sm:h-screen">
            <div className="hero-content flex-col lg:flex-row  sm:flex-col">
                <div className="text-center lg:text-left  max-w-screen-md">
                    <h1 className="text-[#f03e3eec] text-5xl font-extrabold"> Sign Up Now! ------{'>'}
                    </h1>

                </div>
                <div className="mockup-code border-secondary">

                    <div className="display">
                        <div className="artboard artboard-demo phone-1  ">
                            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
                                <form className="card-body" onSubmit={handleSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#ffff] font-bold">Full Name</span>
                                        </label>
                                        <input value = {inputs.fullName} onChange = {(e) => setInputs({... inputs, fullName : e.target.value})} type="text" placeholder="John Doe" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#ffff] font-bold">User Name</span>
                                        </label>
                                        <input value = {inputs.userName} onChange = {(e) => setInputs({... inputs, userName : e.target.value})}type="text" placeholder="JohnDoe123" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#ffff] font-bold">Email</span>
                                        </label>
                                        <input value = {inputs.email} onChange = {(e) => setInputs({... inputs, email : e.target.value})}type="email" placeholder="JohnDoe@gmail.com" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#ffff] font-bold">Password</span>
                                        </label>
                                        <input value = {inputs.password} onChange = {(e) => setInputs({... inputs, password : e.target.value})}type="password" placeholder="123456" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#ffff] font-bold">Confirm Yor Password</span>
                                        </label>
                                        <input value = {inputs.confirmPassword} onChange = {(e) => setInputs({... inputs, confirmPassword : e.target.value})}type="password" placeholder="123456" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-secondary btn-outline"
                                        disabled = {loading}
                                        >   {loading ? <span className='loading loading-spinner'> </span> : "Sign Up"}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUp