import React, { useState } from 'react'
import numberFormatted from '../../../utils/numberFormated'

const TextField = ({ textFieldName, setValue, defaultValue, disabled, maskingCurrency, currencySymbol, textHide }) => {

    const [originalValue, setOriginalValue] = useState(null)

    function reset() {
        setOriginalValue(null)
    }

    return (
        <div class="mb-5">
            {
                !textHide ? <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 ">{textFieldName}</label> : ""
            }

            <input
                onChange={(e) => {
                    setOriginalValue(e.target.value)
                    setValue(e.target.value)
                }}

                onBlur={
                    (e) => {

                        if (maskingCurrency) {
                            e.target.value = numberFormatted(originalValue, currencySymbol)
                        }
                    }
                }
                onFocus={(e) => {

                    console.log(e.target.value);


                    if (e.target.value != "") {
                        e.target.value = originalValue
                    }

                }}
                value={defaultValue}
                disabled={disabled}
                type="text" id={textFieldName} class={`${disabled ? "bg-gray-200 cursor-not-allowed" : "bg-white"} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}></input>
        </div>
    )
}

export default TextField