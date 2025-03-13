'use client'

import Image from 'next/image';
import { useRef } from 'react';

export default function ProjectCard(props) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    return (
        <div 
            className="group relative w-full h-fit rounded-lg transition-all duration-1000 ease-aggresive"
            onMouseEnter={handleMouseEnter}
        >
            <div className='relative w-full aspect-video group-hover:scale-105 transition-all ease-aggresive duration-500'>
                <div className='absolute z-30 h-full w-full bg-verdeSage rounded-lg opacity-0 group-hover:opacity-100 mix-blend-soft-light transition-all ease-aggresive duration-1000'></div>
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <Image
                        src={props.img}
                        fill
                        quality={80}
                        sizes='1920px'
                        loading='lazy'
                        className="rounded-lg object-cover transition-opacity duration-500 ease-aggresive group-hover:opacity-0"
                        alt="Project Banner"
                    />
                    <video
                        ref={videoRef}
                        src={props.vid}
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-aggresive"
                    />
                </div>
            </div>
            <div className="flex flex-col items-start py-4 px-4 text-base lg:text-xl h-fit transition-all duration-1000 ease-aggresive">
                <p className='text-2xl text-negro group-hover:text-verdeSage font-medium'>{props.name}</p>
                <p className='text-grisOs group-hover:text-verdeSage text-xs lg:text-base text-right font-light'>{props.type}</p>
            </div>
        </div>
    );
}