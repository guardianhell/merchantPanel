import React from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'

const CurrencyForm = () => {
    return (


        <DefaultLayout>

        
            <div className='mt-40'>

                <div className='my-20 flex items-center justify-center text-2xl'>
                <label>Currency Registration</label>
                </div>

            <form class="max-w-sm mx-auto">

            <div class="mb-5">
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Currency Name</label>
                <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            </div>
            <div class="mb-5">
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Currency Symbol</label>
                <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            </div>

            <div>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option> 
                </select>
            </div>

            <div className='flex justify-center items-center mt-20'>
            <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
            <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cancel</button>
            </div>
            
            </form>

            

            </div>

            </DefaultLayout>
    )
}

export default CurrencyForm