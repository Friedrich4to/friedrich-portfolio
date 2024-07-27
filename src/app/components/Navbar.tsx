'use client'

import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Nav_Link from './nav_link';
import projects from "../data/projects_data.json"

export default function Header() {

  /* calling the data*/
  const [data, setData] = useState([...projects])
  console.log(projects)

  /* realtime Clock*/
  const [time,setTime] =useState(new Date())
    
  useEffect(()=>{
      setInterval(()=>setTime(new Date()),60000)
  },[])

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  /* Bar itself */
  return (
    <header className="hidden bg-gris sticky top-0 h-screen w-16vw lg:w-80 py-32 px-12 xl:flex flex-col gap-12 [&>*]:flex [&>*]:gap-4 [&>*]:flex-col">
      <div>
        <Link href="/"><img className="logo w-24 mb-6" src=".\friedrich.svg" alt="" /></Link>
        <a className="py-2 px-4 w-fit rounded-lg border" href="">{formattedTime}</a>


        <button className='py-2 px-2 w-fit text-sm rounded-lg border border-negro flex gap-2 items-center'>
        <div className="bg-negro w-5 h-5 rounded"></div>Light</button>


        <a className="py-2 px-2 w-fit rounded-lg border flex gap-2 items-center text-sm" href="">EN<div className="w-2 h-2 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[10px] border-t-negro"></div>
        </a>
      </div>

      <div>
        <p className="text-grisMid text-sm font-light">projects</p>
        <Nav_Link href="/">All Projects</Nav_Link>
        {
            data.map((data) => {
              return(
                <Nav_Link href={data.slug}>{data.name}</Nav_Link>
              )
            })
          }
      </div>

      <div>
        <p className="text-grisMid text-sm font-light">about & contact</p>
        <Nav_Link href="/carreer">Career.</Nav_Link>
        <Nav_Link href="/bio">bio.</Nav_Link>
      </div>
    </header>
  );
};


