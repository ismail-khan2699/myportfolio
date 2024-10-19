'use client'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image'
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const CoontactForm = () => {
    const [state, handleSubmit] = useForm("xeqynqpa");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className=' w-full h-full  flex justify-center items-center flex-col'>
            <p className=' text-5xl  font-bold'>Get In Touch</p>
            <p className=' px-4 text-center'>Ready to turn your ideas into reality? Let's connect and create something amazing together!</p>
            <div className=' w-full'>
                <div className=' p-2 rounded-lg flex flex-col md:flex-row my-5 mx-1 overflow-hidden gap-3 md:mx-10  border border-white relative'>
                    <Image src={'/asset.svg'} alt='' height={100} width={100} className=' absolute bottom-5 max-md:left-5 md:top-5  md:right-6  -z-10 opacity-75 animate-spin-slow' />
                    <Image src={'/asset.svg'} alt='' height={100} width={100} className=' absolute bottom-[50%]  left-[33%]  -z-10 animate-spin-slower opacity-75' />
                    <Image src={'/asset.svg'} alt='' height={100} width={100} className=' absolute bottom-10 right-5 md:top-20  md:right-3  -z-10 animate-spin-slower-rev opacity-75' />
                    <Image src={'/astar.svg'} alt='' height={25} width={25} className=' absolute bottom-10 right-5 md:top-20  md:right-3  -z-10 animate-spin-slower' />
                    <Image src={'/svg.png'} alt='' height={200} width={1000} className=' w-full absolute bottom-0  left-0 h-auto max-h-44 -z-10 opacity-25' />

                    <div className=' w-full md:w-6/12 lg:w-1/3 px-5 py-3 flex flex-col gap-10 rounded-lg relative overflow-hidden'>
                        <Image src={'/mesh.png'} alt='' height={1000} width={1000} className=' absolute left-0 top-0 min-h-full min-w-full -z-10 ' />
                        <p className=' text-xl font-semibold'>Contact Information</p>
                        <div className=' flex flex-col h-32 justify-between'>
                            <div className=' flex gap-3 items-center pointer-events-none' >
                                <FaPhoneAlt /> <span>+92 3473738731</span>
                            </div>
                            <Link href="mailto:ismailahmadkhan4434@gmail.com" className=' flex w-fit gap-3 items-center ' >
                                <MdOutlineEmail /><p className=' max-sm:text-sm text-base'>ismailahmadkhan4434@gmail.com</p>
                            </Link>
                            <div className=' flex gap-3 items-center pointer-events-none' >
                                <IoLocationOutline /> <span>Punjab, Pakistan</span>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full md:w-7/12 lg:w-2/3 flex justify-center items-center'>


                        <form onSubmit={handleSubmit} className='w-full grid grid-cols-4 gap-5 py-5 px-3 md:px-20'>
                            <label htmlFor="name" className='w-3/12'>
                                Name:
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                className='outline-none focus:outline-none w-full col-span-3 border-b-white border-b bg-transparent text-white py-2'
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />

                            <label htmlFor="email" className='w-3/12'>
                                Email Address:
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className='outline-none focus:outline-none col-span-3 w-full border-b-white border-b bg-transparent text-white py-2'
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />

                            <label htmlFor="subject" className='w-3/12'>
                                Subject:
                            </label>
                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                className='outline-none focus:outline-none col-span-3 w-full border-b-white border-b bg-transparent text-white py-2'
                            />
                            <ValidationError
                                prefix="Subject"
                                field="subject"
                                errors={state.errors}
                            />

                            <label htmlFor="message" className='w-3/12'>
                                Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className='outline-none rounded-md focus:outline-none col-span-4 w-full border-white border h-32 bg-transparent text-white p-2'
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button type="submit" disabled={state.submitting} className='mt-4 px-4 py-2 rounded-lg w-fit bg-white hover:text-white hover:bg-black hover:border-white border transition-all duration-150 hover:scale-95 text-black'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CoontactForm