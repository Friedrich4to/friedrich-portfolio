'use client'

import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Nav_Link from './nav_link';
import projects from "../data/projects_data.json"
import Logo from "./icons/main_logo"
import { InstagramIcon, LinkedinIcon } from "./icons/social_media_icons"
import SocialLink from './social_link';
import EmailButton from './copy_email_btn';
import { ArrowDown, RedirectIcon } from './icons/interface_icons';
import { DarkModeBTN } from './darkmode_btn';

function MobileHeader({open, setOpen}){
  
  const [data, setData] = useState([...projects])

  return(
    <header className={`fixed justify-end items-end bottom-8 right-8 h-svh w-screen z-40 transition-all duration-500 ${open ? "flex" : "hidden"}`}>
      {/*MobileHeader*/}
      <div className='flex flex-col gap-8 py-12 pr-12 pl-8 h-fit w-5/6 md:w-3/6 bg-gris rounded-xl'>
        
        <div className='flex flex-col gap-4'>
          <Link className='w-20 mb-5' href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}><Logo /></Link>
          <DarkModeBTN />
          <EmailButton />
          <a href="/CV - Frederick Pimentel 2024.pdf" 
          download="CV - Frederick Pimentel 2024"
          className='group w-fit flex items-center gap-2 hover:bg-verdeSage border hover:border-verdeSage hover:text-blanco rounded-lg p-2 text-xs font-medium'
          target='_blank'
          rel="noopener noreferrer"
          >
            Download CV <ArrowDown />
          </a>
        </div>

        <div className='flex flex-col gap-2'>
        <p className="text-grisMid text-sm font-light">Navigation</p>
        <div className='grid grid-cols-2 grid-rows-2 gap-2'>
          <Link className='col-span-2 p-4 w-full text-base rounded-lg border hover:text-blanco hover:border-verdeSage hover:bg-verdeSage' href="/#projects" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Projects</Link>
          <Link className='p-4 w-full text-base rounded-lg border hover:text-blanco hover:border-verdeSage hover:bg-verdeSage' href="/carreer" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Experience</Link>
          <Link className='p-4 w-full text-base rounded-lg border hover:text-blanco hover:border-verdeSage hover:bg-verdeSage' href="/bio" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Biography</Link>
        </div>
        </div>

        <div className='flex flex-col gap-2'>
          <p className="text-grisMid text-sm font-light">Social media</p>
          <div className='flex gap-4'>
              <a href="https://www.instagram.com/friedrich4to/" className='flex italic gap-1 font-medium items-center' target='_blank' rel="noopener noreferrer">Instagram<RedirectIcon /></a>
              <a href="https://www.instagram.com/friedrich4to/" className='flex italic gap-1 font-medium items-center' target='_blank' rel="noopener noreferrer">LinkedIn<RedirectIcon /></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export function Header() {

  /* calling the data*/
  const [data, setData] = useState([...projects])

    /* realtime Clock*/
    const [time,setTime] =useState(new Date())
    
    useEffect(()=>{
        setInterval(()=>setTime(new Date()),1000)
    },[])
  
    const [isClient, setIsClient] = useState(false)
   
    useEffect(() => {
      setIsClient(true)
    }, [])
  
    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    /* MobileNavbarScript*/
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false)
    const handleClick = () => {
      if (open) {
        setTimeout(() => {
          setOpen(!open);
        }, 100);
      }
    }
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  /* Bar itself */
  return (
    <header className='w-fit'>

      <div 
      onClick={() => {setOpen(!open)}} 
      className={`fixed flex place-items-center xl:hidden bottom-4 right-4 p-4 border rounded-xl z-50 transition-all duration-200 ease-aggresive ${open ? "bg-verdeSage border-verdeSage" : "bg-gris"}`}
      >
        <div className={`rounded-md transition-all duration-500 ease-aggresive ${open ? "w-6 h-6 bg-blanco" : "w-8 h-8 bg-negro"}`}></div>
      </div>

      <MobileHeader open={open} setOpen={setOpen}/>

      <div className="hidden xl:flex bg-gris sticky top-0 h-screen lg:w-64 2xl:w-72 justify-center px-12 flex-col gap-8 2xl:gap-12  [&>*]:text-xs [&>*]:2xl:text-sm [&>*]:flex [&>*]:gap-2 [&>*]:flex-col transition-all duration-300">
        <div>
          <Link className='w-20 mb-5' href="/"><Logo /></Link>
          
          <DarkModeBTN />

          <EmailButton />

          <a href="/CV - Frederick Pimentel 2024.pdf" 
          download="CV - Frederick Pimentel 2024"
          className='group w-fit flex items-center gap-2 hover:bg-verdeSage border hover:border-verdeSage hover:text-blanco rounded-lg p-2 font-medium'
          target='_blank'
          rel="noopener noreferrer"
          >
            Download CV <ArrowDown />
          </a>


        </div>

        <nav>
          <p className="text-grisMid font-light">UX-UI & Dev Projects</p>
          <Link href="/" ><Nav_Link href="/">Home</Nav_Link></Link>
          {
              data.map((data, index) => {
                return(
                  <Link key={index} href={'/' + data.slug} >
                    <Nav_Link href={'/' + data.slug} >{data.name}</Nav_Link>
                  </Link>
                )
              })
            }
        </nav>

        <div>
          <p className="text-grisMid font-light">About me</p>
          <Link href="/carreer" ><Nav_Link href="/carreer">Experience</Nav_Link></Link>
          <Link href="/bio" ><Nav_Link href="/bio">Biography</Nav_Link></Link>
        </div>

        <div>
          <p className="text-grisMid font-light">Social Media</p>
          <div className='flex flex-col gap-3'>
              <a href="https://www.instagram.com/friedrich4to/" className='group flex italic gap-2 font-medium hover:text-verdeSage items-center' target='_blank' rel="noopener noreferrer">Instagram<RedirectIcon /></a>
              <a href="https://www.linkedin.com/in/fredpimentel/" className='group flex italic gap-2 font-medium hover:text-verdeSage items-center' target='_blank' rel="noopener noreferrer">LinkedIn<RedirectIcon /></a>
          </div>
        </div>
      </div>

    </header>
  );

  
};


