
import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "cally"

const DatePickerCustom = ({ pickerField, setDate, date }) => {

    const changeDateFormat = (date) => {
        return date.toString().split("-").reverse().join("-")
    }

    const dateSelect = ""


    return (
        <div>
            <button popoverTarget="popover" className="input input-border bg-white" id={pickerField} >
                Pick a date
            </button>
            <div popover id="popover" className="dropdown bg-white rounded-box shadow-lg">

                <calendar-date
                    locale="en-ID"
                    onchange={(e) => { document.getElementById(pickerField).innerText = changeDateFormat(e.target.value); setDate(e.target.value) }}
                >
                    <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                    <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                    <calendar-month >

                    </calendar-month>
                </calendar-date>


                {/* <calendar-date class="cally"
                    onchange={document.getElementById('cally1').innerText = this.value}
                >
                    <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                    <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                    <calendar-month></calendar-month>
                </calendar-date> */}
            </div>
        </div >
    )
}

export default DatePickerCustom