import React from 'react'
import EachUtils from '../../../utils/EachUtils'

const DropDownList = ({ dropDownText, setValue, dataList, field }) => {
    return (
        <div className='mb-5'>
            <label for={dropDownText} class="block mb-2 text-sm font-medium text-gray-900">{dropDownText}</label>
            <select

                onChange={(e) => {
                    setValue(e.target.selectedOptions[0].id)
                }}
                id={dropDownText} class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">

                <EachUtils
                    of={dataList}
                    render={(item, index) => (
                        <option id={item.id} key={index}>{item[field]}</option>
                    )}
                />
            </select>
        </div>
    )
}

export default DropDownList