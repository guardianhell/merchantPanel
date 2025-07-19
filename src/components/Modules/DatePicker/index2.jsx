import React, { useEffect, useState } from 'react'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const DatePickerComponent = ({ setDate, maxDate, minDate, disabled, id, resetTrigger }) => {

    const [selectedDate, setSelectedDate] = useState(null)


    const handleDateChange = (date) => {
        setSelectedDate(date)
        setDate(date)
    }

    useEffect(() => {

        setSelectedDate("")

    }, [resetTrigger])


    return (
        <div id={id} className='flex w-full justify-center mb-5 mt-2'>
            <DatePicker
                className={`border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ${disabled ? "bg-gray-500" : "bg-white"}`}
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd-MM-YYYY"
                maxDate={maxDate}
                minDate={minDate}
                disabled={disabled}
            />
        </div>
    )
}

export default DatePickerComponent