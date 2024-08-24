import ProjectCard from './components/projectCard'
import projects from "./data/projects_data.json"
import Link from 'next/link';
import Image from 'next/image';

import React from "react";
import { Footer } from './components/footer';


export default function Home() {

  console.log(projects)

  return (
    <main className="flex justify-center w-screen">  
      <div className="w-full max-w-screen-xl mx-5vw my-12 xl:mt-36 flex flex-col gap-12 lg:gap-8">
        <div className='flex flex-col gap-2'>
          <div className="mb-4 font-light flex flex-col gap-2">
            <h1 className='text-3xl italic font-bold flex flex-col lg:flex-row lg:items-center gap-2'>
              <div className='relative h-16 w-16 rounded-full hover:scale-125 transition-all duration-700 ease-aggresive'>
                <Link href='/carreer'>
                  <Image
                    src='/images/bio/portrait.png'
                    fill
                    quality={80}
                    loading = 'lazy'
                    className="rounded-xl object-cover"
                    alt="portrait"
                  />
                </Link>
              </div>
              Frederick A. Pimentel
            </h1>
            <p className='max-w-screen-lg lg:leading-tight text-3xl lg:text-5xl'>
              Digital product designer, <br className='hidden md:inline-block'/>
              especialized in <span className='italic font-black text-verdeSage'>UX-UI Design </span><br/> 
              & <span className='italic font-black text-verdeSage'>Front-End Development.</span>
            </p>
            <p className='text-grisOs text-2xl'>+ Motion Graphics, 3D Design & Tipography</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-12" id='projects'>
          {
            projects.map((data,index) => {
              return(
                <Link key={index} href={data.slug}>
                  <ProjectCard img={data.thumbnail} name={data.name} type={data.type}/>
                </Link>
              )
            })
          }

        </div>

        <Footer />

      </div>
    </main>
  );
}
