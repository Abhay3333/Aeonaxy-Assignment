import React from 'react'
import ContinueBtn from '../../shared/continueBtn'
import { RiStarFill } from '@remixicon/react'
import BackBtn from '../../shared/backBtn'

const FifthPage = () => {
    return (
        <section className='py-10 w-full text-black'>
            <div className='w-5/6 mx-auto'>
                <div className='h-1 w-full rounded-md bg-gray-200 relative'>
                    <BackBtn toPage={'fourthPage'} />
                    <div className='absolute top-0 left-0 w-full h-full bg-green-800 rounded-md progress-5'></div>
                </div>
                <div className='flex md:flex-row flex-col justify-evenly items-center md:mt-20 mb-10'>
                    <img className='h-[21rem]' src="./yaya.png" alt="" />
                    <div className='flex flex-col gap-4 basis-2/5'>
                        <p className='font-bold text-2xl'>You're on your way</p>
                        <span className='flex'>
                            <RiStarFill size={32} color='yellow' />
                            <RiStarFill size={32} color='yellow' />
                            <RiStarFill size={32} color='yellow' />
                            <RiStarFill size={32} color='yellow' />
                            <RiStarFill size={32} color='yellow' />
                        </span>
                        <p className='text-sm leading-6 font-medium italic'>"Through its engaging and well structured courses. Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations"</p>
                        <span className='italic'>- Jacos S</span>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <ContinueBtn clicked={'sixthPage'} page={'lastPage'} />
                </div>
            </div>
        </section>
    )
}

export default FifthPage