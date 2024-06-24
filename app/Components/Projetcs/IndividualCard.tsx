import React from 'react';
import { FaSquareGithub, FaGlobe } from "react-icons/fa6";
import Link from 'next/link';
import ImagePopup from './popupimage';

interface ProjectCardProps {
    imageUrl: string;
    imageUrlFull: string;
    githubLink: string;
    liveDemoLink: string;
    title: string;
    descriptionPoints: string[];
    technologies: { icon: JSX.Element; name: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    imageUrl,
    imageUrlFull,
    githubLink,
    liveDemoLink,
    title,
    descriptionPoints,
    technologies
}) => {
    return (
        <div className=' h-full flex justify-center items-center'>
            <div className='relative h-full group w-11/12 md:w-11/12 rounded-2xl border-2 border-solid border-white bg-black p-8'>
                <div className='absolute top-0 -right-3 -z-10 h-[102%] w-[101%] rounded-[2rem] rounded-br-3xl bg-white'></div>
                <div className='flex flex-col gap-2 h-full justify-between'>
                    <div>
                        <ImagePopup imageUrl={imageUrl} imageUrlFull={imageUrlFull} />
                        <div className='justify-end flex gap-4'>
                            <Link href={githubLink} target='_blank' className='min-w-5 hover:scale-110 transition-all duration-150 min-h-5'>
                                <FaSquareGithub className='min-w-5 min-h-5' />
                            </Link>
                            <Link href={liveDemoLink} target='_blank' className='min-w-5 hover:scale-110 transition-all duration-150 min-h-5'>
                                <FaGlobe className='min-w-5 min-h-5' />
                            </Link>
                        </div>
                        <div className='text-wrap text-sm'>
                            <h1 className='font-semibold text-xl'>{title}</h1>
                            <ol className='list-disc list-outside text-gray-300/80'>
                                {descriptionPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className='text-gray-500 flex-wrap font-light text-sm flex gap-3'>
                        {technologies.map((tech, index) => (
                            <div key={index} className='flex gap-1 items-center'>
                                {tech.icon}
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;
