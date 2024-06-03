'use client'
import React from 'react'
import ScrollBox from '../framercomponent/scrollBox'
import Link from 'next/link'

const Education = () => {
    return (
        <div className='flex relative flex-col justify-center items-center gap-10 px-5 md:px-10 py-10'>
            <p className='gradient-text text-7xl font-bold'>Education</p>
            <div className='w-[75%] mx-auto lg:w-[50%] md:w-[75%]'>
                <div className='flex flex-row gap-5  h-auto py-5 relative  '>
                    <div className=' w-8'>
                        <ScrollBox />
                    </div>
                    <div className=' flex flex-col gap-3'>
                        <h1 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>Studied Fsc Pre-Engineering At <Link href={'https://hep.punjab.gov.pk/Publicprograms/institute_detail/?HTTP_REFERER=&institute_id=11&subject_id=2996'} target='_blank' className='capitalize text-[rgb(88,230,217)]'>@GOVT. CH.ILM DIN GRADUATE COLLEGE</Link></h1>
                        <p className='capitalize font-medium text-white/50 xs:text-sm'>2017 - 2019 | ALIPUR CHATHA, GUJRANWALA</p>
                    </div>

                </div>
                <div className='flex flex-row gap-5  h-auto py-5 relative '>
                    <div className=' w-8'>
                        <ScrollBox />
                    </div>
                    <div className=' flex flex-col gap-3'>
                        <h1 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>Studied BS Information Technology At <Link href={'https://uog.edu.pk/main.php'} target='_blank' className='capitalize text-[rgb(88,230,217)]'>@University of Gujrat</Link></h1>
                        <p className='capitalize font-medium text-white/50 xs:text-sm'>2019 - 2023 | HH Campus, Gujrat</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Education
