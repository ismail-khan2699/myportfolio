import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaDownload } from "react-icons/fa6";
const MeWelcome = () => {

    return (
        <div className=' h-full relative md:h-[80vh] w-full flex flex-col py-10 gap-5 md:flex-row justify-center items-center'>
            <div className=' w-10/12 md:w-1/2 flex flex-col gap-4 justify-center items-center text-center'>
                <Image src={'/image.png'} alt='me' height={500} width={400} />
                <p className=' text-4xl font-medium '>I am <span className=' SansitaOnef font-bold gradient-text2 '>ISMAIL AHMAD KHAN</span></p>
            </div>
            <div className='w-full md:w-1/2 px-10 flex flex-col gap-5'>
                <p className=' gradient-text text-3xl md:text-5xl lg:text-6xl font-bold pointer-events-none'>Turning Vision Into Reality With Code</p>
                <p className=' text-gray-400 text-base lg:text-lg pointer-events-none'>As a skilled Front end developer and aspiring Fullstack Developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my expertise in React.js, Next.js and web development.</p>
                <div className=' flex gap-5 items-center'>

                    <a className="flex gap-2 px-4 py-2 rounded-lg border-2 border-white hover:bg-white hover:text-black hover:border-amber-300  duration-100 transition-all" download href="/IsmailResume.pdf">
                        Resume <FaDownload />
                    </a>
                    <Link href="mailto:ismailahmadkhan4434@gmail.com" className=' hover:underline decoration-orange-500'>Contact Me</Link>
                </div>
            </div>
            <div className=' max-md:top-3  max-md:right-3 md:left-6 flex justify-center items-center  md:top-3 absolute h-32 w-32 '>
                <Image src={'/textwhite.png'} alt='' height={100} width={100} className=' absolute h-32 w-32 animate-spin-slow duration-500' />
                <Link href={'mailto:ismailahmadkhan4434@gmail.com'} className=' h-20 w-20 font-bold rounded-full z-50 border-white border bg-black flex justify-center items-center text-white transition-all duration-200 hover:text-black hover:bg-white hover:scale-95' >
                    Hire Me
                </Link>
            </div>
        </div>
    )
}

export default MeWelcome