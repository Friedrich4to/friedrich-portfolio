'use client'

import ProjectCard from './components/projectCard'
import projects from "./data/projects_data.json"
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

import React from "react";
import Lottie from "lottie-react";
import animationData from "./components/icons/lottie_test.json";

export default function Home() {

  const [data, setData] = useState([...projects])

  return (
    <main className="flex justify-center w-screen">  
      <div className="w-full max-w-screen-xl mx-5vw my-24 flex flex-col gap-12 xl:my-36 lg:gap-16">
        <div className='flex flex-col gap-2'>
          {/*
          <div className="hidden mb-4 max-w-screen-sm text-2xl text-grisMid font-light lg:text-3xl">
            Greetings! soy  <span className='font-normal italic text-negro'>Frederick Pimentel</span> ,<br />
            diseñador multidisciplinario especializado en
          </div>
          <h1 className="hidden text-7xl font-black lg:text-8xl uppercase">
            DiseñO <br className='md:hidden'/><span className="text-verdeSage">UX-UI</span><br/>
            & Dev. <span className="text-verdeSage">FRONT-END</span>
          </h1> 
          */}

          <div className="mb-4 font-light flex flex-col gap-4">
            <h1 className='text-3xl italic font-bold flex flex-col lg:flex-row items-baseline gap-2'><div className='w-12 h-12 bg-negro rounded-full'></div>Frederick A. Pimentel</h1>
            <p className='max-w-screen-lg lg:leading-tight text-4xl lg:text-5xl'>
              Diseñador de productos digitales,<br />
              especializado en el <span className='italic font-black text-verdeSage'>Diseño UX-UI</span><br />
              y el <span className='italic font-black text-verdeSage'>Desarrollo Front End.</span>
            </p>
          </div>

          <div className="flex flex-col gap-2 ">
              <h2 className="text-grisMid text-xl font-light">más especificamente...</h2>
              <div className='grid grid-cols-2 md:flex place-items-start gap-12'>

                <div className='flex flex-col items-center text-left gap-2'>
                  <span className='w-36 h-36 border-negro border rounded-full'></span>
                  <h2 className='w-full'>Web Design</h2>
                </div>

                <div className='flex flex-col items-center text-left gap-2'>
                  <span className='w-36 h-36 border-negro border  rounded-full'></span>
                  <h2 className='w-full'>Web Design</h2>
                </div>

                <div className='flex flex-col items-center text-left gap-2'>
                  <span className='w-36 h-36 border-negro border rounded-full'></span>
                  <h2 className='w-full'>Web Design</h2>
                </div>

                <div className='flex flex-col items-center text-left gap-2'>
                  <span className='w-36 h-36 border-negro border rounded-full'></span>
                  <h2 className='w-full'>Web Design</h2>
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

      </div>
    </main>
  );
}
