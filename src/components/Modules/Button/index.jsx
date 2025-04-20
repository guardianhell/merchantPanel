import React from 'react'

const Button = ({ action, buttonText, buttonAction }) => {
    return (
        <button
            onClick={() => {
                { buttonAction() }
            }}
            type="button" class={`cursor-pointer text-white bg-gradient-to-r ${action == "submit" ? 'from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-cyan-300' : 'from-red-400 via-red-500 to-red-600 focus:ring-red-300'} hover:bg-gradient-to-br focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 `}>{buttonText}</button>
    )
}

export default Button