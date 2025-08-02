import React from 'react'

const StatusCard = ({ cardTitle, cardPercentages, cardNumber, cardImage, persentageColor }) => {
    return (

        <div className='grid grid-cols-4 rounded-lg w-full'>
            <div className="col-span-1 card bg-white image-full overflow-hidden">
                <img
                    className='relative -left-5 '
                        src={cardImage}
                    alt="Uptrend" />
            </div>
            <div className="card-body col-span-3 bg-white rounded-lg bg-blue-300">
                <div className='grid grid-cols-6'>
                    <h2 className="card-title text-black col-span-5">{cardTitle}</h2>
                    <h3 className='text-black'>{cardPercentages}</h3>
                </div>
                <p className='p-4 text-black font-bold sm:text-sm md:text-md xl:text-2xl'>{cardNumber}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>


    )
}

export default StatusCard