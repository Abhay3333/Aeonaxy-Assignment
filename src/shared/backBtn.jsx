import React from 'react'
import { NavLink } from 'react-router-dom'
import {RiArrowLeftSLine} from '@remixicon/react'

const BackBtn = ({toPage}) => {
    return (
        <NavLink to={`/${toPage}`}>
            <div className='absolute -left-6 -top-[9px] cursor-pointer'><RiArrowLeftSLine /></div>
        </NavLink>
    )
}

export default BackBtn