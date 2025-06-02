import React from 'react'

const TextArea = ({ textAreaLabel, setValue, defaultValue }) => {
    return (
        <div class="mb-5">
            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">{textAreaLabel}</label>
            <textarea
                defaultValue={defaultValue}
                onChange={(e) => { setValue(e.target.value) }}
                type="text" id="large-input" class="h-30 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>
    )
}

export default TextArea