import React from 'react'

const TextField = ({ textFieldName, setValue, defaultValue, disabled }) => {
    return (
        <div class="mb-5">
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 ">{textFieldName}</label>
            <input
                onChange={(e) => {
                    setValue(e.target.value)
                    console.log(setValue);

                }}
                value={defaultValue}
                disabled={disabled}
                type="text" id={textFieldName} class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
        </div>
    )
}

export default TextField