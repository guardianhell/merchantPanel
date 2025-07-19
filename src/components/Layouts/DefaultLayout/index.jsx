import React from 'react'
import Navbar from '../../Modules/NavBar'
import SideBar from '../../Modules/SideBar'

const DefaultLayout = ({ children }) => {
    return (
        <div className='min-h-screen '>
            <Navbar />
            <div className='grid grid-cols-[250px_1fr]'>
                <SideBar />
                <div className=''>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default DefaultLayout