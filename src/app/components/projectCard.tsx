'use client'

import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard(props) {

    return(
            <div className="group relative w-full h-fit rounded-lg border border-negro hover:border-verdeSage transition-all duration-1000 ease-aggresive">
                <div className='absolute z-30 h-full w-full bg-verdeSage rounded-lg opacity-0 group-hover:opacity-100 mix-blend-soft-light transition-all duration-1000 ease-aggresive'></div>
                <div className='relative w-all h-40 md:h-[380px]'>
                    <Image
                        src={props.img}
                        fill
                        quality={80}
                        loading = 'lazy'
                        className="rounded-t-lg object-cover"
                        alt="Project Banner"
                    />
                </div>
                <div className="rounded-b-lg flex items-center justify-between py-8 px-4 lg:p-6 text-base lg:text-xl bg-blanco group-hover:bg-verdeSage w-full h-14 transition-all duration-1000 ease-aggresive">
                    <p className='text-negro group-hover:text-blanco font-medium'>{props.name}</p>
                    <p className='text-grisOs group-hover:text-blanco text-xs lg:text-base text-right font-light'>{props.type}</p>
                </div>
            </div>
    )
}
