import React from 'react'
import ContinueBtn from '../../shared/continueBtn'
import BackBtn from '../../shared/backBtn'

const ThirdPage = () => {
    return (
        <section className='py-10 w-full'>
            <div className='w-5/6 mx-auto'>
                <div className='h-1 w-full rounded-md bg-gray-200 relative'>
                    <BackBtn toPage={'secondPage'} />
                    <div className='absolute top-0 left-0 w-full h-full bg-green-800 rounded-md progress-3'></div>
                </div>
                <div className='flex md:flex-row flex-col justify-evenly items-center md:mt-20 mt-8 mb-10'>
                    <img className='h-[20rem]' src="./weigh.png" alt="" />
                    <div className='flex flex-col gap-5 basis-2/5'>
                        <p className='font-bold text-2xl'>You're in the right place</p>
                        <p className='text-sm leading-6 font-medium'>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <ContinueBtn clicked={'fourthPage'} page={'fourthPage'} />
                </div>
            </div>
        </section>
    )
}

export default ThirdPage