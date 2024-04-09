import React, { useState } from 'react'
import ContinueBtn from '../../shared/continueBtn'
import BackBtn from '../../shared/backBtn'

const FourthPage = () => {
    const [clicked, setClicked] = useState('')

    const userBox = (userPhoto, userRole, userInfo, height) => {

        return <div onClick={() => setClicked(userRole)}
            className={`h-40 md:w-[18%] w-[85%] border-[1px] border-gray-200 rounded-md gap-2 items-center flex flex-col justify-center cursor-pointer ${clicked === userRole ? 'shadow-md border-yellow-200' : ''}`}>
            <img className={`h-${height}`} src={`./${userPhoto}`} alt="" />
            <div className='ml-3 flex flex-col items-center'>
                <p className='font-semibold text-[14px]'>{userRole}</p>
                <p className='text-sm font-normal text-gray-400'>{userInfo}</p>
            </div>
        </div>
    }

    return (
        <section className='py-10 w-full'>
            <div className='w-5/6 mx-auto'>
                <div className='h-1 w-full rounded-md bg-gray-200 relative'>
                    <BackBtn toPage={'thirdPage'} />
                    <div className='absolute top-0 left-0 w-full h-full bg-green-800 rounded-md progress-4'></div>
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-4 mt-14'>
                    <p className='font-extrabold md:text-3xl text-xl'>Which is your math comfort level?</p>
                    <p className='text-sm text-gray-600'>Choose the highest level you feel confident in -- you can always adjust later</p>
                </div>

                <div className='w-full flex md:flex-row flex-col justify-center items-center gap-4 mt-20'>
                    {userBox('arithmetic.png', 'Arithmetic', 'Introductory', 6)}
                    {userBox('algebra.png', `Baic Algebra`, 'Foundational', 32)}
                    {userBox('quadratic.png', 'Intermediate Algebra', 'Intermediate', 16)}
                    {userBox('integration.png', 'Calculus', 'Advanced', 16)}
                </div>

                <div className='w-full flex justify-center mt-10'>
                    <ContinueBtn clicked={clicked} page={'fifthPage'} />
                </div>
            </div>
        </section>
    )
}

export default FourthPage