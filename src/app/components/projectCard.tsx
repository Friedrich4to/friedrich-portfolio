'use client'

import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard(props) {

    return(
            <div className="relative w-full h-fit rounded-lg group border border-negro hover:border-verdeSage transition-all duration-1000 ease-aggresive">
                <div className='absolute h-full w-full bg-verdeSage rounded-lg opacity-0 group-hover:opacity-40 transition-all duration-1000 ease-aggresive'></div>
                <div className='relative w-all h-[240px] md:h-[380px]'>
                    <Image
                        src={props.img}
                        fill
                        quality={80}
                        loading = 'lazy'
                        className="rounded-t-lg object-cover"
                        alt="Project Banner"
                    />
                </div>
                <div className="rounded-b-lg flex items-center justify-between py-8 px-4 lg:p-6 text-base lg:text-xl bg-blanco w-full h-14">
                    <p className='font-medium'>{props.name}</p>
                    <p className='text-grisOs text-xs lg:text-base text-right font-light'>{props.type}</p>
                </div>
            </div>
    )
}
