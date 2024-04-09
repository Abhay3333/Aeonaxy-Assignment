import React, { useState } from 'react'
import ContinueBtn from '../../shared/continueBtn'

const FirstPage = () => {
    const [clicked, setClicked] = useState('')

    const userBox = (userPhoto, userRole, userInfo) => {
        return <div onClick={() => setClicked(userRole)}
            className={`h-14 md:w-[43%] w-full border-[1px] border-gray-200 rounded-md flex items-center px-2 cursor-pointer ${clicked === userRole ? 'shadow-md border-yellow-200' : ''}`}>
            <img className='h-10' src={`./${userPhoto}`} alt="" />
            <div className='ml-3 flex gap-2 items-center'>
                <p className='font-semibold text-md'>{userRole}</p>
                <p className='text-sm font-normal text-gray-400'>{userInfo}</p>
            </div>
        </div>
    }

    return (
        <section className='py-10 w-full'>
            <div className='w-5/6 mx-auto'>
                <div className='h-1 w-full rounded-md bg-gray-200 relative'>
                    <div className='absolute top-0 left-0 w-full h-full bg-green-800 rounded-md progress-1'></div>
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-4 mt-8'>
                    <p className='font-extrabold md:text-3xl text-xl'>Which describes you best?</p>
                    <p className='text-sm text-gray-600'>This will help us personalize your experience.</p>
                </div>

                <div className='w-full flex flex-col items-center gap-3 mt-8'>
                    {userBox('student.png', 'Student', 'or soon to be enrolled')}
                    {userBox('professional.png', 'Professional', 'pursuing a career')}
                    {userBox('parent.png', 'Parent', 'of a School-age-child')}
                    {userBox('learner.png', 'Life Long Learner')}
                    {userBox('teacher.png', 'Teacher')}
                    {userBox('other.png', 'Other')}
                    <ContinueBtn clicked = {clicked} page={'secondPage'}/>
                </div>

            </div>
        </section>
    )
}

export default FirstPage