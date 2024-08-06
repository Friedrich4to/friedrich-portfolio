'use client'

import ProjectCard from './components/projectCard'
import projects from "./data/projects_data.json"
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  const [data, setData] = useState([...projects])

  return (
    <main className="flex justify-center w-screen">  
      <div className="w-full max-w-screen-xl mx-5vw my-24 flex flex-col gap-12 xl:my-36 lg:gap-16">
        <div>
          <div className="italic mb-4 text-2xl font-light lg:text-3xl flex flex-col md:flex-row items-baseline gap-2">
            <span className="text-grisMid non-italic ">Buenas, soy</span>
            <div className='flex items-baseline'>
              <Link className='hidden md:block relative w-12 h-12 rounded-full bg-verdeSage border overflow-hidden hover:scale-300 transition-all duration-500 ease-aggresive' href='/bio'>
                <Image
                fill
                quality={10}
                src="/images/bio/portrait.png" 
                alt="My Portrait" 
                className='object-cover h-full'
                />
              </Link>
              <h1>Frederick Pimentel</h1>
            </div>
          </div>
          <h1 className="text-7xl font-black lg:text-8xl">
            Diseñador <br className='md:hidden'/><span className="text-verdeSage">UX-UI</span><br/>
            & Dev. <span className="text-verdeSage">FRONT-END</span></h1>
        </div>

        <div className="flex flex-col gap-2 ">
            <h2 className="text-grisMid text-xl font-light">más especificamente...</h2>
            <div className='grid grid-cols-2 md:flex place-items-start gap-6'>

              <div className='flex flex-col items-center text-left gap-2'>
                <span className='w-36 h-36 bg-negro'></span>
                <h2 className='w-full'>Web Design</h2>
              </div>

              <div className='flex flex-col items-center text-left gap-2'>
                <span className='w-36 h-36 bg-negro'></span>
                <h2 className='w-full'>Web Design</h2>
              </div>

              <div className='flex flex-col items-center text-left gap-2'>
                <span className='w-36 h-36 bg-negro'></span>
                <h2 className='w-full'>Web Design</h2>
              </div>

              <div className='flex flex-col items-center text-left gap-2'>
                <span className='w-36 h-36 bg-negro'></span>
                <h2 className='w-full'>Web Design</h2>
              </div>
              
            </div>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 lg:gap-12" id='projects'>
          {
            data.map((data,index) => {
              return(
                <Link key={index} href={data.slug}>
                  <ProjectCard img={data.thumbnail} name={data.name} type={data.type}/>
                </Link>
              )
            })
          }

        </div>

      </div>
    </main>
  );
}
