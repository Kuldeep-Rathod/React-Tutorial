import React from 'react'

export default function TapButton({children, aSelect}) {

    return (
        <li>
            <button onClick={aSelect} className='m-2 border border-blue-500 px-2 rounded-md hover:bg-blue-200'>{children}</button>
        </li>
    )
}