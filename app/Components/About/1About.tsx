import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className=' w-full flex flex-col justify-center items-center py-10  gap-10 px-5 sm:px-10 md:px-20'>
            <p className=' w-10/12 lg:w-6/12 text-center text-7xl font-bold SansitaOnef' >Passion Fuels Purpose! </p>
            <div className=' w-full flex flex-col lg:flex-row justify-between gap-10 items-center'>
                <div className=' w-10/12 lg:w-5/12 flex flex-col gap-5'>
                    <h1 className=' gradient-text text-3xl font-bold'>Biography</h1>
                    <p className=' gradient-text2 text-lg font-light'>
                        Hi, I'm Ismail Ahmad Khan, a web developer with a passion for creating beautiful, functional, and user-centered digital experiences. I am always looking for new and innovative ways to bring my clients' visions to life. <br /> <br />

                        I believe that design is about more than just making things look pretty - it's about solving problems and creating intuitive, enjoyable experiences for users. <br /> <br />

                        Whether I'm working on a website or mobile app, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.

                    </p>
                </div>
                <div className=' w-10/12 lg:w-5/12 flex justify-center items-center'>
                    <div className='relative w-11/12 md:w-9/12  h-auto rounded-2xl border-2 border-solid border-white  bg-black p-8  '>
                        <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl  bg-white  '>
                        </div>
                        <Image src={'/meb.png'} alt='' height={1500} width={1000} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='h-auto w-full bg-white rounded-2xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About