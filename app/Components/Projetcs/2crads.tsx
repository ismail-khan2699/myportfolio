import Image from 'next/image'
import React from 'react'
import ImagePopup from './popupimage'
import { FaSquareGithub, FaGlobe, FaReact, FaCss3Alt } from "react-icons/fa6";
import { SiNetlify } from "react-icons/si";
import Link from 'next/link';
import { projects } from "./data"
import ProjectCard from './IndividualCard';



const Pcrads = () => {
    return (
        <div className=' w-full flex flex-col gap-5 justify-center items-center '>
            <p className=' text-center text-lg pointer-events-none text-nowrap sm:text-4xl md:text-5xl font-bold'>FRONTEND PROJECTS</p>
            <div className=' w-full grid md:grid-cols-2 grid-cols-1 gap-y-10  lg:grid-cols-3 '>

                {projects.map((project, index) => (

                    <div className='w-11/12 md:w-full  h-full' key={index}>
                        <ProjectCard
                            key={index}
                            imageUrl={project.imageUrl}
                            imageUrlFull={project.imageUrlFull}
                            githubLink={project.githubLink}
                            liveDemoLink={project.liveDemoLink}
                            title={project.title}
                            descriptionPoints={project.descriptionPoints}
                            technologies={project.technologies}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Pcrads