import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logoutApi } from '../../../utils/Authentication/logout'

const SideBar = () => {
    const navigate = useNavigate()

    const logout = () => {

        logoutApi()

        navigate('/login')

    }

    const [isOpen, setIsOpen] = useState(false)


    function Disclosure({ title, children }) {
        const [open, setOpen] = useState(false);

        return (
            <li>
                <div
                    className="flex justify-between items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600"
                    onClick={() => setOpen(!open)}
                >
                    <span>{title}</span>
                    <svg
                        className={`w-4 h-4 transform transition-transform ${open ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                {open && <ul className="pl-4 space-y-1">{children}</ul>}
            </li>
        );
    }



    return (

        <>
            {/* Mobile toggle button */}
            <div className="md:hidden w-32 p-4 bg-white shadow-sm flex justify-between items-start">
                <span className="text-xl font-semibold text-gray-800">Menu</span>
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Sidebar - always visible on desktop */}
            <div className={`md:flex flex-col bg-white border-r border-gray-200 h-screen w-64 px-4 py-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="space-y-1 text-sm font-medium text-gray-600">
                    <li className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg" onClick={() => navigate('/')}>Dashboard</li>

                    {/* Transaction Section */}
                    <Disclosure title="Deposit">
                        <li className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg"
                            onClick={() => navigate('/deposit')}
                        >Deposit History</li>
                    </Disclosure>

                    {/* Withdrawal */}
                    <Disclosure title="Withdrawal">
                        <li className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg">Withdrawal Request</li>
                        <li className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg">Withdrawal History</li>
                    </Disclosure>

                    {/* Statement */}
                    <Disclosure title="Statement">
                        <li onClick={() => navigate('/statement')} className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg">
                            Generate Statement
                        </li>
                    </Disclosure>


                    <li className="cursor-pointer hover:bg-red-100 px-4 py-2 rounded-lg text-red-500"
                        onClick={() => { logout() }}
                    >Sign Out</li>
                </ul>
            </div>
        </>
    )
}

export default SideBar