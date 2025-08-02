import React, { useState } from 'react'
import EachUtils from '../../../../utils/EachUtils'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { isOpenModalAtom } from '../../../../jotai/atoms'
import { useEffect } from 'react'
import numberFormatted from '../../../../utils/numberFormated'

const TableCard = ({ datalistHeader, dataList, classname, hasDetailButton, detailButtonNavigation, currencySymbol }) => {

    const navigate = useNavigate()

    const editButton = async (index) => {
        navigate(detailButtonNavigation, { state: dataList[index] })
    }



    return (


        <div class={`"relative overflow-x-auto shadow-md sm:rounded-lg ${classname} "`} >
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs uppercase bg-gray-50 text-black">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            No
                        </th>
                        <EachUtils
                            of={datalistHeader}
                            render={(item, index) => (
                                <th key={index} scope="col" class="px-6 py-3">
                                    {item.header}
                                </th>
                            )}
                        />
                        {hasDetailButton ? <th scope="col" class="px-6 py-3">
                            Edit
                        </th> : null}

                    </tr>
                </thead>
                <tbody>

                    <EachUtils
                        of={dataList}
                        render={(item, index) => (
                            <tr key={index} class="odd:bg-white even:bg-gray-100  border-gray-200">

                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {index + 1}
                                </th>
                                <EachUtils
                                    of={datalistHeader}
                                    render={(item2, index2) => (
                                        <td key={index2} class="px-6 py-4">
                                            {item2.numberFormatted ? numberFormatted(item[item2.field], currencySymbol) : item[item2.field]}
                                        </td>
                                    )}
                                />

                                {hasDetailButton ?
                                    <td>
                                        <button
                                            onClick={() => {
                                                editButton(index)
                                            }}
                                            className="btn btn-soft btn-accent">Edit</button>
                                    </td> : ""
                                }
                            </tr>
                        )}
                    />
                </tbody>
            </table>

        </div>

    )
}

export default TableCard