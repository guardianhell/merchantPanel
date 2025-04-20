import React from 'react'
import Navbar from '../../Modules/NavBar'
import SideBar from '../../Modules/SideBar'

const DefaultLayout = ({ children }) => {
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='grid grid-cols-8'>
                <SideBar />
                <div className='col-span-7'>
                    {children}
                </div>

            </div>

        </div>
    )
}

export default DefaultLayout