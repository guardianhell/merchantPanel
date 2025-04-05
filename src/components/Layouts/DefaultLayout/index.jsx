import React from 'react'
import Navbar from '../../Modules/NavBar'

const DefaultLayout = ({ children }) => {
    return (
        <div className='h-screen'>
            <Navbar />
            {children}
        </div>
    )
}

export default DefaultLayout