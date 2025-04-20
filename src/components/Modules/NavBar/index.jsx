import React from 'react'
import SideBar from '../SideBar'
import { useNavigate } from 'react-router-dom'

const NavBar = ({ children }) => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="navbar bg-base shadow-md p-10 mx-4 rounded-lg gap-4">
                <div className="flex-1 px-10">
                    <a className="text-5xl">ACME</a>
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
                            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default NavBar