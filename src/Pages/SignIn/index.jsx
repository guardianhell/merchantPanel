import React, { useEffect, useState } from 'react'
import { apiInstance, authApiInstance } from '../../utils/apiInstance'
import { login } from '../../utils/Authentication/login'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { currentPage, isLogin } from '../../jotai/atoms'





const SignIn = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [, setIslogin] = useAtom(isLogin)
    const [invalidLogin, setInvalidLogin] = useState(false)
    const [currentPages, setCurrentPages] = useAtom(currentPage)
    const [redirectPage, setRedirectPage] = useState('')


    const signIn = async () => {

        console.log(currentPages);




        const response = await login(email, password, redirectPage, currentPages).then(async (result) => {


            if (result.status === 200) {

        // const user = await authApiInstance.get("/userData", { withCredentials: true }).then(async (res) => {

        //     setIslogin(true)
        //     localStorage.setItem("full_name", res.data.full_name)
        //     return res.data[0]
        // })

                setIslogin(true)

                console.log(result);


                window.location.href = result.data

                //navigate('/')


            } else {
                setInvalidLogin(true)
                console.log(invalidLogin);
            }

            if (result.Code == 401) {

                setInvalidLogin(true)
                console.log(invalidLogin);

            }
            console.log(result);


            return result
        })

        return response

    }



    useEffect(() => {
        setTimeout(() => { setInvalidLogin(false) }, 8000)
    }, [invalidLogin])


    return (

        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md space-y-6 p-6 bg-white rounded-2xl shadow-xl">
                {/* Logo */}
                <div className="flex justify-center">
                    <img
                        className="w-32 md:w-40"
                        src="TITAN PAY HRES NEW.png"
                        alt="Titan Pay"
                    />
                </div>

                {/* Email Input */}
                <div className='flex justify-center'>
                    <label className="input input-bordered flex items-center gap-2 bg-gray-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-5 w-5 opacity-70"
                        >
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input
                            type="text"
                            className="grow bg-transparent"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>

                {/* Password Input */}
                <div className='flex justify-center'>
                    <label className="input input-bordered flex items-center gap-2 bg-gray-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-5 w-5 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input
                            type="password"
                            className="grow bg-transparent"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>

                {/* Login Button */}
                <div>
                    <button
                        onClick={() => signIn()}
                        className="w-full py-2 rounded-xl bg-stone-400 hover:bg-stone-600 text-white transition"
                    >
                        Login
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-2">
                    <hr className="flex-grow border-gray-300" />
                    <span className="text-sm text-gray-400">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Register Button */}
                <div>
                    <button
                        onClick={() => navigate("/register")}
                        className="w-full py-2 rounded-xl bg-lime-400 hover:bg-lime-600 text-white transition"
                    >
                        Register
                    </button>
                </div>

                {/* Error Message */}
                {invalidLogin && (
                    <div className="text-center text-sm text-red-600">Invalid Email or Password</div>
                )}
            </div>
        </div>

        // <div className='mt-40'>

        //     <div className='relative items-center justify-items-center w-full mb-10'>
        //         <img
        //             className='w-1/5'
        //             src='TITAN PAY HRES NEW.png' />
        //     </div>
        //     <div className='flex flex-col items-center gap-1 p-2'>
        //         <label className="input input-bordered flex items-center gap-2 bg-gray-300">
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 viewBox="0 0 16 16"
        //                 fill="currentColor"
        //                 className="h-4 w-4 opacity-70">
        //                 <path
        //                     d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
        //                 <path
        //                     d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        //             </svg>
        //             <input type="text" className="grow" placeholder="Email" onChange={(e) => {
        //                 setEmail(e.target.value)
        //             }} />
        //         </label>
        //     </div>
        //     <div className='flex flex-col items-center gap-1'>
        //         <label className="input input-bordered flex items-center gap-2 bg-gray-300">
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 viewBox="0 0 16 16"
        //                 fill="currentColor"
        //                 className="h-4 w-4 opacity-70">
        //                 <path
        //                     fillRule="evenodd"
        //                     d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
        //                     clipRule="evenodd" />
        //             </svg>
        //             <input type="password" className="grow" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
        //         </label>
        //     </div>
        //     <div className='flex flex-col items-center my-2 p-4'>
        //         <button
        //             onClick={() => { signIn() }}
        //             className='bg-stone-400 px-20 py-2 rounded-lg hover:bg-stone-500 hover:text-white'>Login</button>
        //     </div>

        //     <div className='relative bg-zinc-500 h-[1.5px] w-[10%] rounded left-1/2 -translate-x-1/2'></div>
        //     <div className='flex flex-col items-center my-2 p-4'>
        //         <button
        //             onClick={() => { navigate("/register") }}
        //             className='bg-lime-300 px-20 py-2 rounded-lg hover:bg-lime-500 hover:text-white'>Register</button>
        //     </div>
        //     {
        //         invalidLogin ?
        //             <div className='flex flex-col items-center text-red-500'>Invalid Email or Password
        //             </div>
        //             : null
        //     }
        // </div>



        //     <div className='flex justify-center items-center mt-20'>
        //         <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 ">
        // <form class="space-y-6" action="#">
        //                 <h5 class="text-xl font-medium text-gray-900">Sign in to Admin Dashboard</h5>
        //     <div>
        //                     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
        //                     <input
        //                         onChange={(e) => { setEmail(e.target.value) }}
        //                         type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
        //     </div>
        //     <div>
        //                     <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
        //                     <input
        //                         onChange={(e) => { setPassword(e.target.value) }}
        //                         type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        //     </div>
        //     <div class="flex items-start">
        //                     {/* <div class="flex items-start">
        //             <div class="flex items-center h-5">
        //                             <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
        //             </div>
        //                         <label for="remember" class="ms-2 text-sm font-medium text-gray-900">Remember me</label>
        //         </div> */}
        //                     <a href="#" class="ms-auto text-sm text-blue-700 hover:underline">Lost Password?</a>
        //                 </div>
        //                 <button

        //                     onClick={() => { signIn() }}
        //                     type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
        //                 <div class="text-sm font-medium text-gray-500">
        //                     Not registered? <a href="#" class="text-blue-700 hover:underline">Create account</a>
        //     </div>
        // </form>
        //         </div>
        //         </div>
    )
}




export default SignIn