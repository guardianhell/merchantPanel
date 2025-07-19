import React from 'react'

const Button = ({ action, buttonText, buttonAction, disable }) => {
    return (
        <button
            onClick={() => {
                { disable ? "" : buttonAction() }
            }}
            type="button" class={`cursor-pointer text-white bg-gradient-to-r ${action == "submit" ? 'from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-cyan-300' : 'from-red-400 via-red-500 to-red-600 focus:ring-red-300'} hover:bg-gradient-to-br focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${disable ? 'from-gray-300 via-gray-500 to-gray-700 hover:bg-gradient-to-r focus:ring-gray-100' : ''}`}>{buttonText}</button>
    )
}

export default Button