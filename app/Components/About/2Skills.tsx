'use client'
import React, { useEffect } from 'react'

const Skills = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.transition-transform');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('opacity-0', 'transform-none');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        elements.forEach(element => {
            observer.observe(element);
        });

        // Cleanup function
        return () => observer.disconnect();
    }, []);

    return (
        <div className='flex flex-col justify-center items-center gap-10 px-5 md:px-10 py-10'>
            <p className=' gradient-text text-7xl pointer-events-none font-bold'>Skills</p>
            <div className='w-full h-[100vh] max-lg:h-[80vh] max-sm:h-[60vh] max-xs:h-[50vh] relative bg-circularDark flex items-center justify-center rounded-full max-lg:bg-circularDarkLg max-md:bg-circularDarkMd max-sm:bg-circularDarkSm'>
                <div className='cursor-pointer flex rounded-full font-semibold bg-white text-black px-4 py-2 xs:text-xs'>Web Dev</div>
                <div className='transition-transform duration-1000 transform-none opacity-0 cursor-pointer w-max origin-center absolute font-semibold text-black bg-white py-1 px-3 rounded-full lg:py-2 lg:px-4 md:text-sm xs:font-bold' style={{ transform: 'translateX(-20vw) translateY(2vw)' }}>HTML</div>
                <div className='transition-transform duration-1000 transform-none opacity-0 cursor-pointer w-max origin-center absolute font-semibold text-black bg-white py-1 px-3 rounded-full lg:py-2 lg:px-4 md:text-sm xs:font-bold' style={{ transform: 'translateX(-5vw) translateY(-10vw)' }}>CSS</div>
                <div className='transition-transform duration-1000 transform-none opacity-0 cursor-pointer w-max origin-center absolute font-semibold text-black bg-white py-1 px-3 rounded-full lg:py-2 lg:px-4 md:text-sm xs:font-bold' style={{ transform: 'translateX(20vw) translateY(6vw)' }}>Javascript</div>
                <div className='transition-transform duration-1000 transform-none opacity-0 cursor-pointer w-max origin-center absolute font-semibold text-black bg-white py-1 px-3 rounded-full lg:py-2 lg:px-4 md:text-sm xs:font-bold' style={{ transform: 'translateX(-20vw) translateY(-15vw)' }}>ReactJS</div>
                <div className='transition-transform duration-1000 transform-none opacity-0 cursor-pointer w-max origin-center absolute font-semibold text-black bg-white py-1 px-3 rounded-full lg:py-2 lg:px-4 md:text-sm xs:font-bold' style={{ transform: 'translateX(15vw) translateY(-10vw)' }}>NextJS</div>
                <div className='transition-transform duration-1000 transform-none opacity-0 cursor-pointer w-max origin-center absolute font-semibold text-black bg-white py-1 px-3 rounded-full lg:py-2 lg:px-4 md:text-sm xs:font-bold' style={{ transform: 'translateX(0vw) translateY(12vw)' }}>Github</div>
                <div className='transition-transform duration-1000 transform-none opacity-0 cursor-pointer w-max origin-center absolute font-semibold text-black bg-white py-1 px-3 rounded-full lg:py-2 lg:px-4 md:text-sm xs:font-bold' style={{ transform: 'translateX(30vw) translateY(-5vw)' }}>Firebase</div>
                <div className='transition-transform duration-1000 transform-none opacity-0 cursor-pointer w-max origin-center absolute font-semibold text-black bg-white py-1 px-3 rounded-full lg:py-2 lg:px-4 md:text-sm xs:font-bold' style={{ transform: 'translateX(-22vw) translateY(18vw)' }}>TailwindCSS</div>
                <div className='transition-transform duration-1000 transform-none opacity-0 cursor-pointer w-max origin-center absolute font-semibold text-black bg-white py-1 px-3 rounded-full lg:py-2 lg:px-4 md:text-sm xs:font-bold' style={{ transform: 'translateX(-1vw) translateY(-22vw)' }}>Web Design</div>
            </div>
        </div>
    )
}

export default Skills
