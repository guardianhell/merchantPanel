import React from 'react'

const SideBar = () => {
    return (
        // <div className="drawer lg:drawer-open">
        //     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        //     <div className="drawer-content flex flex-col items-center m-10">
        //         {/* Page content here */}
        //         {children}
        //         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
        //             Open drawer
        //         </label>
        //     </div>
        //     <div className="drawer-side">
        //         <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        //         <ul className="menu bg-[#f2edf2] text-base min-h-full w-60 p-4 rounded-lg mx-4">
        //             {/* Sidebar content here */}
        //             <li><a>Sidebar Item 1</a></li>
        //             <li><a>Sidebar Item 2</a></li>
        //         </ul>
        //     </div>
        // </div>

        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn bg-transparent ">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                            <path d="M38,14H6v-4c0-2.2,1.8-4,4-4h32v4C42,12.2,40.2,14,38,14z M42,24v-4H10c-2.2,0-4,1.8-4,4v4h32C40.2,28,42,26.2,42,24z M42,38v-4H10c-2.2,0-4,1.8-4,4v4h32C40.2,42,42,40.2,42,38z"></path>
                        </svg>


                    </label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base text-base-content min-h-full w-80 p-4 mt-20 ml-10">
                        {/* Sidebar content here */}
                        <li className='hover:transition-all hover:duration-1000 hover:bg-white hover:ease-in-out hover:text-2xl'><a>Dashboard</a></li>
                        <li className='hover:text-2xl'><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar