import React, { useEffect } from 'react'
import SideBar from '../SideBar'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { merchantInformation } from '../../../jotai/atoms'
import { logoutApi } from '../../../utils/Authentication/logout'

const NavBar = ({ children, merchantName }) => {
    const navigate = useNavigate()

    const [merchantInfo,] = useAtom(merchantInformation)

    const logout = () => {

        logoutApi()

        navigate('/login')

    }

    useEffect(() => {

    }, [merchantInfo])

    return (
        <div>
            <div className="navbar bg-white shadow-md mx-2 rounded-lg gap-4">
                <div className="flex-1 px-5">
                    <img src="TITAN PAY HRES NEW.png"
                        width={250}
                    ></img>
                </div>
                <div className="flex gap-10 mr-8">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-100 p-2 shadow">

                            <div className='flex justify-center'>
                                <a className="justify-between text-lg font-bold">
                                    {merchantInfo.merchant_name}
                                    {/* <span className="badge">New</span> */}
                                </a>
                            </div>
                            {/* <li>
                                <a className="justify-between text-lg bg-indigo-100">
                                    {merchantInfo.merchant_name}
                                    <span className="badge">New</span>
                                </a>
                            </li> */}
                            <li onClick={() => navigate('/info')}><a>Account Info</a></li>
                            <li onClick={() => logout()}><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default NavBar