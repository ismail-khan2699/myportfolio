'use client'
import React from 'react'
import ScrollBox from '../framercomponent/scrollBox'
import Link from 'next/link'

const Experience = () => {
    return (
        <div className='flex relative flex-col justify-center items-center gap-10 px-5 md:px-10 py-10'>
            <p className='gradient-text text-7xl font-bold'>Experience</p>
            <div className='w-[75%] mx-auto lg:w-[50%] md:w-[75%]'>
                <div className='flex flex-row gap-5  h-auto py-20 relative  '>
                    <div className=' w-8'>
                        <ScrollBox />
                    </div>
                    <div className=' flex flex-col gap-3'>
                        <h1 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>Intern At <Link href={'https://robx.ai/'} target='_blank' className='capitalize text-[rgb(88,230,217)]'>@ROBX.AI</Link></h1>
                        <p className='capitalize font-medium text-white/50 xs:text-sm'>April 2024 - Present | Remote</p>
                        <p className='font-medium w-full  text-white    md:text-sm'>Worked as a Frontend Developer. <br /> Developed and maintained multiple web applications using Rea
                            ct.js, Next.js, and Tailwind CSS. <br />
                            Collaborated with designers and backend developers to create
                            responsive and user-friendly interfaces. </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience
