import React, { useState } from 'react'
import ContinueBtn from '../../shared/continueBtn'
import BackBtn from '../../shared/backBtn'
// import {} from '@remixicon/react'

const SecondPage = () => {
    const [clicked, setClicked] = useState('')

    const userBox = (userPhoto, userRole, userInfo) => {
        return <div onClick={() => setClicked(userRole)}
            className={`h-14 md:w-[43%] w-full border-[1px] border-gray-200 rounded-md flex items-center px-2 cursor-pointer ${clicked === userRole ? 'shadow-md border-yellow-200' : ''}`}>
            <img className='h-8' src={`./${userPhoto}`} alt="" />
            <div className='ml-3 flex gap-2 items-center'>
                <p className='font-semibold text-sm'>{userRole}</p>
                <p className='text-sm font-normal text-gray-400'>{userInfo}</p>
            </div>
        </div>
    }

    return (
        <section className='py-10 w-full'>
            <div className='w-5/6 mx-auto'>
                <div className='h-1 w-full rounded-md bg-gray-200 relative'>
                    <BackBtn toPage={''}/>
                    <div className='absolute top-0 left-0 w-full h-full bg-green-800 rounded-md progress-2'></div>
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-4 mt-8'>
                    <p className='font-extrabold md:text-3xl text-xl'>Which are you most interested in?</p>
                    <p className='text-sm text-gray-600'>Choose just one. This will help us get you started (but won't limit your experience)</p>
                </div>

                <div className='w-full flex flex-col items-center gap-4 mt-8'>
                    {userBox('trend.png', 'Learning specific skills to advance my career')}
                    {userBox('navigation.png', `Exploring new Topics I'm interested in`)}
                    {userBox('think.png', 'Refreshing my math foundations')}
                    {userBox('target.png', 'Exercising my brain to stay sharp')}
                    {userBox('eyes.png', 'Something else')}
                    <ContinueBtn clicked={clicked} page={'thirdPage'} />
                </div>

            </div>
        </section>
    )
}

export default SecondPage