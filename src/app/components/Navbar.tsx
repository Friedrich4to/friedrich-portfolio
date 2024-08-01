'use client'

import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Nav_Link from './nav_link';
import projects from "../data/projects_data.json"
import Logo from "./icons/main_logo"
import { InstagramIcon } from "./icons/social_media_icons"
import SocialLink from './social_link';
import EmailButton from './copy_email_btn';

function MobileHeader({open, setOpen}){
  
  const [data, setData] = useState([...projects])

  return(
    <header className={`fixed justify-end items-end bottom-4 right-4 h-screen w-screen z-40 transition-all ${open ? "flex" : "hidden"}`}>
      {/*MobileHeader*/}
      <div className='flex flex-col gap-8 py-12 pr-12 pl-8 h-fit w-fit bg-gris rounded-xl'>
        <div className='flex flex-col gap-4'>
          <Link className='w-20 mb-5' href="/"><Logo /></Link>
          <button className='py-2 px-2 w-fit text-sm rounded-lg border text-grisMid border-grisMid flex gap-2 items-center'>
            <div className="bg-grisOs w-5 h-5 rounded"></div>
            Light
          </button>
          <EmailButton />
        </div>

        <div className='flex flex-col gap-4'>
        <p className="text-grisMid text-sm font-light">Navigation</p>
          <Link className='p-4 w-full text-base rounded-lg border' href="/">Projects</Link>
          <Link className='p-4 w-full text-base rounded-lg border' href="/carreer">Career</Link>
          <Link className='p-4 w-full text-base rounded-lg border' href="/bio">Bio</Link>
        </div>

        <div className='flex gap-4'>
          <SocialLink link='https://www.instagram.com/friedrich4to/' icon={<InstagramIcon />}/>
          <SocialLink link='https://www.artstation.com/fredemor' icon={<InstagramIcon />}/>
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
      className={`fixed flex place-items-center xl:hidden bottom-4 right-4   border rounded-xl z-50 transition-all duration-200 ease-aggresive ${open ? "bg-verdeSage border-verdeSage" : "bg-gris"}`}
      >
        <div className={`rounded-md transition-all duration-500 ease-aggresive ${open ? "w-6 h-6 bg-blanco" : "w-8 h-8 bg-negro"}`}></div>
      </div>

      <MobileHeader open={open} setOpen={setOpen}/>

      <div className="hidden xl:flex bg-gris dark:bg-alt_gris sticky top-0 h-screen w-16vw lg:w-80 py-32 px-12 flex-col gap-12 [&>*]:flex [&>*]:gap-4 [&>*]:flex-col">
        <div>
          <Link className='w-20 mb-5' href="/"><Logo /></Link>
          
          <button className='py-2 px-2 w-fit text-sm rounded-lg border text-grisMid border-grisMid flex gap-2 items-center'>
            <div className="bg-grisOs w-5 h-5 rounded"></div>
            Light
          </button>
          <p className="py-2 px-4 w-fit rounded-lg border">{formattedTime}</p>
          <EmailButton />

        </div>

        <div>
          <p className="text-grisMid text-sm font-light">UX-UI & Dev Projects</p>
          <Link href="/" ><Nav_Link href="/">All Projects</Nav_Link></Link>
          {
              data.map((data, index) => {
                return(
                  <Link key={index} href={'/' + data.slug} >
                    <Nav_Link href={'/' + data.slug} >{data.name}</Nav_Link>
                  </Link>
                )
              })
            }
        </div>

        <div>
          <p className="text-grisMid text-sm font-light">About & Contact</p>
          <Link href="/carreer" ><Nav_Link href="/carreer">Career.</Nav_Link></Link>
          <Link href="/bio" ><Nav_Link href="/bio">Bio.</Nav_Link></Link>
        </div>

        <div>
          <p className="text-grisMid text-sm font-light">Social Media</p>
          <div className='flex gap-4'>
            <SocialLink link='https://www.instagram.com/friedrich4to/' icon={<InstagramIcon />}/>
            <SocialLink link='https://www.artstation.com/fredemor' icon={<InstagramIcon />}/>
          </div>
        </div>
      </div>

    </header>

    
  );
};


