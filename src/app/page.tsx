'use client'

import ProjectCard from './components/projectCard'
import SmoothScroll from "./components/smoothScroll";
import projects from "./data/projects_data.json"
import { useState } from "react";

export default function Home() {

  const [data, setData] = useState([...projects])
  console.log(projects)

  return (
    <main className="flex justify-center w-screen bg-blanco dark:bg-negro">
      
      <div className="w-full max-w-screen-xl mx-5vw my-24 flex flex-col gap-12 xl:my-48 lg:gap-16">

        <div>
          <h1 className="italic mb-4 text-2xl font-light lg:text-3xl"><span className="text-grisMid non-italic ">Greetings! I am</span> <span className="lg:hidden"><br /></span>Frederick Pimentel</h1>
          <h1 className="text-7xl font-black lg:text-8xl"><span className="text-verdeSage">UX-UI</span> DESIGN<br/>& <span className="text-verdeSage">FRONT-END</span> DEV</h1>
        </div>

        <div className="flex flex-col gap-6 ">
          <div>
            <h2 className="text-grisMid font-light italic">Design expertise</h2>
            <p className="text-negro text-xl font-light">Web/App Interface - Motion Graphics - 3D Design</p>
          </div>
          <div>
            <h2 className="text-grisMid font-light italic">Development expertise</h2>
            <p className="text-negro text-xl font-light">WebSites - WebApps - Management Systems</p>
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
