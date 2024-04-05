import React from 'react'

export default function TapButton({children, aSelect, isSelected}) {

    return (
        <li>
            <button onClick={aSelect} className='m-2 border border-blue-500 px-2 rounded-md hover:bg-blue-200 active:bg-blue-700'>{children}</button>
        </li>
    )
}