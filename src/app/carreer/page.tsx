'use client'

import SmoothScroll from "../components/smoothScroll";
import StudyJobCard from '../components/study_job_card'
import academics_list from "../data/academics.json"
import jobs_list from "../data/jobs.json"
import { useState } from "react";

export default function Home() {

  const [academics, setAcademics] = useState([...academics_list])
  const [jobs, setJobs] = useState([...jobs_list])

  return (
    <main className="flex justify-center w-screen">
      <SmoothScroll></SmoothScroll>
      <div className="w-full max-w-screen-xl mx-5vw my-24 flex flex-col gap-12 xl:my-48 lg:gap-16">

        <div>
          <h1 className="text-5xl font-black lg:text-8xl">EXPERIENCE</h1>
          <h1 className="text-5xl font-black lg:text-8xl">& ACADEMICS</h1>
        </div>

        <div className="flex flex-col gap-6 ">
          <h1 className="text-verdeSage text-3xl lg:text-5xl font-black">College Academics</h1>
          {
            academics.map((academic) => {
              return(
                <StudyJobCard title={academic.job_title} institution={academic.job_instituion} initial_year={academic.start_date} finishing_year={academic.finish_date}/>
              )
            })
          }
        </div>

        <div className="flex flex-col gap-6 ">
          <h1 className="text-verdeSage text-3xl lg:text-5xl font-black">Work Experience</h1>
          {
            jobs.map((job) => {
              return(
                <StudyJobCard title={job.job_title} institution={job.job_instituion} initial_year={job.start_date} finishing_year={job.finish_date}/>
              )
            })
          }
        </div>

      </div>
    </main>
  );
}
