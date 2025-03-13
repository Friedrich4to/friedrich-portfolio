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
      <div className="w-full max-w-screen-xl mx-5vw my-12 xl:mt-36 flex flex-col gap-6 lg:gap-8">
        <div className='flex flex-col gap-2'>
          <div className="mb-4 font-light flex flex-col gap-6">
              <h1 className='text-3xl font-black gap-2'>
                Frederick A. Pimentel,
              </h1>
              <p className='max-w-screen-lg lg:leading-tight 2xl:leading-tight text-xl lg:text-3xl 2xl:text-4xl'>
                an <span className='font-bold'>interaction designer & developer, </span> <br className='hidden md:inline-block'/>
                especialized on <span className='text-verdeSage'>interfaces|websites,</span> <br className='hidden md:block'/>
                <span className='text-verdeSage'>3D visualization</span> & <span className='text-verdeSage'>motion graphics.</span>
              </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-12" id='projects'>
          {
            projects.map((data,index) => {
              return(
                <Link key={index} href={data.slug}>
                  <ProjectCard img={data.thumbnail} vid={data.hero_media} name={data.name} type={data.type}/>
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
