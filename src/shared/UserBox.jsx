import { useState } from "react"

const userBox = (userPhoto, userRole, userInfo) => {
    
    return <div onClick={() => setClicked(userRole)}
        className={`h-14 w-[43%] border-[2px] border-blue-400 rounded-md flex items-center px-2 cursor-pointer ${clicked === userRole ? 'shadow-md border-yellow-200' : ''}`}>
        <img className='h-9' src={`./${userPhoto}`} alt="" />
        <div className='ml-3 flex gap-2 items-center'>
            <p className='font-semibold text-md'>{userRole}</p>
            <p className='text-sm font-normal text-gray-400'>{userInfo}</p>
        </div>
    </div>
}

export default userBox