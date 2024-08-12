'use client'

import ProjectCard from './components/projectCard'
import projects from "./data/projects_data.json"
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

import React from "react";
import Lottie from "lottie-react";
import animationData from "./components/icons/lottie_test.json";
import { Footer } from './components/footer';

export default function Home() {

  const [data, setData] = useState([...projects])

  return (
    <main className="flex justify-center w-screen">  
      <div className="w-full max-w-screen-xl mx-5vw my-12 xl:mt-36 flex flex-col gap-12 lg:gap-8">
        <div className='flex flex-col gap-2'>
          <div className="mb-4 font-light flex flex-col gap-2">
            <h1 className='text-3xl italic font-bold flex flex-col lg:flex-row lg:items-center gap-2'>
              <div className='relative h-16 w-16'>
                <Image
                  src='/images/girl.png'
                  fill
                  quality={80}
                  loading = 'lazy'
                  className="rounded-t-lg object-cover"
                  alt="portrait"
                />
              </div>
              Frederick A. Pimentel
            </h1>
            <p className='max-w-screen-lg lg:leading-tight text-3xl lg:text-5xl'>
              Diseñador de productos digitales, <br className='hidden md:inline-block'/>
              especializado en <span className='italic font-black text-verdeSage'>Diseño UX-UI </span><br/> 
               & <span className='italic font-black text-verdeSage'>Desarrollo Front End.</span>
            </p>
            <p className='text-grisOs text-2xl'>+ Animación, Diseño 3D & Identidad visual</p>
          </div>

          <div className="hidden flex-col gap-2 ">
              <div className='grid grid-cols-2 md:flex place-items-start gap-12'>

                <div className='flex flex-col items-center text-center gap-2'>
                  <span className='w-24 h-24 border-negro border rounded-full'></span>
                  <h2 className='w-full'>Webs & Apps</h2>
                </div>

                <div className='flex flex-col items-center text-center gap-2'>
                  <span className='w-24 h-24 border-negro border rounded-full'></span>
                  <h2 className='w-full'>Programación</h2>
                </div>

                <div className='flex flex-col items-center text-center gap-2'>
                  <span className='w-24 h-24 border-negro border rounded-full'></span>
                  <h2 className='w-full'>Animación</h2>
                </div>

                <div className='flex flex-col items-center text-center gap-2'>
                  <span className='w-24 h-24 border-negro border rounded-full'></span>
                  <h2 className='w-full'>Diseño 3D</h2>
                </div>
                
              </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-12" id='projects'>
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

        <Footer />

      </div>
    </main>
  );
}
