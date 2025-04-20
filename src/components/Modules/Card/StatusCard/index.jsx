import React from 'react'

const StatusCard = ({ cardTitle, cardPercentages, cardNumber, cardImage }) => {
    return (

        <div className='grid grid-cols-4 rounded-lg'>
            <div className="card bg-white image-full w-50 h-40 overflow-hidden">
                <div>
                    <img
                        className='relative -left-15'
                        src={cardImage}
                        alt="Uptrend" />
                </div>
            </div>
            <div className="card-body col-span-3 bg-white rounded-lg">
                <div className='grid grid-cols-6'>
                    <h2 className="card-title text-black col-span-5">{cardTitle}</h2>
                    <h3 className='text-black'>{cardPercentages}</h3>
                </div>
                <p className='p-4 text-black text-4xl font-bold'>{cardNumber}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>


    )
}

export default StatusCard