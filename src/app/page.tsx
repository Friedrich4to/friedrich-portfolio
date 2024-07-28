'use client'

import ProjectCard from './components/projectCard'
import SmoothScroll from "./components/smoothScroll";
import projects from "./data/projects_data.json"
import { useState } from "react";
import Link from 'next/link';

export default function Home() {

  const [data, setData] = useState([...projects])

  return (
    <main className="flex justify-center w-screen">
      <SmoothScroll></SmoothScroll>   
      <div className="w-full max-w-screen-xl mx-5vw my-24 flex flex-col gap-12 xl:my-36 lg:gap-16">

        <div>
          <div className="italic mb-4 text-2xl font-light lg:text-3xl flex items-baseline gap-4">
            <span className="text-grisMid non-italic ">Greetings! I am</span>
            <span className="lg:hidden"><br/></span>
            <div className='flex items-baseline'>
              <Link className='w-12 h-12 rounded-full bg-verdeSage border overflow-hidden hover:scale-300 transition-all duration-500 ease-aggresive' href='/bio'>
                <img src="/images/bio/portrait.png" alt="My Portrait" className='object-cover h-full'/>
              </Link>
              <h1>Frederick Pimentel</h1>
            </div>
          </div>
          <h1 className="text-7xl font-black lg:text-8xl"><span className="text-verdeSage">UX-UI</span> DESIGNER<br/>& <span className="text-verdeSage">FRONT-END</span> DEV</h1>
        </div>

        <div className="flex flex-col gap-6 ">
            <h2 className="text-grisMid text-xl font-light">to be more specific...</h2>
            <div className='grid grid-flow-col auto-cols-max gap-12'>
              <div className='flex flex-col items-center text-center gap-2'><span className='w-36 h-36 bg-negro'></span><h2>Web Design</h2></div>
              <div className='flex flex-col items-center text-center gap-2'><span className='w-36 h-36 bg-negro'></span><h2>Web Design</h2></div>
              <div className='flex flex-col items-center text-center gap-2'><span className='w-36 h-36 bg-negro'></span><h2>Web Design</h2></div>
              <div className='flex flex-col items-center text-center gap-2'><span className='w-36 h-36 bg-negro'></span><h2>Web Design</h2></div>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 lg:gap-12">
          {
            data.map((data) => {
              return(
                <ProjectCard name={data.name} type={data.type} img={data.thumbnail} slug={data.slug}/>
              )
            })
          }

        </div>

      </div>
    </main>
  );
}
