'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";


const Navbar = () => {
    const path = usePathname();
    return (
        <div className=' h-30 flex flex-wrap gap-5 px-2 sm:px-10 py-10 justify-between items-center'>
            <div>
                <Link className="text-sm/6  px-2 font-semibold relative group text-white focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white" href={'/'}>
                    <span className="text-md inline-flex gap-x-1 justify-center items-center font-semibold ">
                        Home
                    </span>
                    <div className={`absolute left-0 -bottom-3  h-[1px]  bg-white transition-all duration-300 group-hover:w-full ${path === '/' ? ' w-full' : ' w-0 scale-100'}`}></div>
                </Link>
                <Link className="text-sm/6  px-2 font-semibold relative group text-white focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white" href={'/about'}>
                    <span className="text-md inline-flex gap-x-1 justify-center items-center font-semibold ">
                        About
                    </span>
                    <div className={`absolute left-0 -bottom-3  h-[1px]  bg-white transition-all duration-300 group-hover:w-full ${path === '/about' ? ' w-full' : ' w-0 scale-100'}`}></div>
                </Link>
                <Link className="text-sm/6  px-2 font-semibold relative group text-white focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white" href={'/projects'}>
                    <span className="text-md inline-flex gap-x-1 justify-center items-center font-semibold ">
                        Projects
                    </span>
                    <div className={`absolute left-0 -bottom-3  h-[1px]  bg-white transition-all duration-300 group-hover:w-full ${path === '/projects' ? ' w-full' : ' w-0 scale-100'}`}></div>
                </Link>
                <Link className="text-sm/6    px-2 font-semibold relative group text-white focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white" href={'/contact'}>
                    <span className="text-md inline-flex gap-x-1 justify-center items-center font-semibold ">
                        Contact
                    </span>
                    <div className={`absolute left-0 -bottom-3  h-[1px]  bg-white transition-all duration-300 group-hover:w-full ${path === '/contact' ? ' w-full' : ' w-0 scale-100'}`}></div>
                </Link>
            </div>
            <div className='text-white pl-2 flex gap-2 sm:gap-5 items-center'>
                <Link href={'https://www.linkedin.com/in/ismail-ahmad-khan-70b347269'} target='_blank' className=' hover:-translate-y-1 transition-all duration-150'><GrLinkedin size={20} /></Link>
                <Link href={'https://github.com/ismail-khan2699'} target='_blank' className=' hover:-translate-y-1 transition-all duration-150'><GrGithub size={20} /></Link>
                <Link href={'https://wa.me/+923473738731'} target='_blank' className=' hover:-translate-y-1 transition-all duration-150'><SiWhatsapp size={20} /></Link>
            </div>
        </div>
    )
}

export default Navbar