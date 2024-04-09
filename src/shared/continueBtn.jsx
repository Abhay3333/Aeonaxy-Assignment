import React from 'react'
import { NavLink } from 'react-router-dom'

const ContinueBtn = ({clicked, page}) => {
  return (
    <div className='mt-3'>
        <NavLink to={`${clicked === '' ? '' : `/${page}`}`}>
        <button className={`py-2 px-6 bg-black rounded-md text-white ${clicked === '' ? 'opacity-50' : ''}`}>Continue</button>
        </NavLink>
    </div>
  )
}

export default ContinueBtn