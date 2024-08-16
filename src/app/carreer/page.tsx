import { Footer } from '../components/footer';
import StudyJobCard from '../components/study_job_card'
import academics_list from "../data/academics.json"
import jobs_list from "../data/jobs.json"
import Static from "../data/static_data.json"

export default function carreer() {

  return (
    <main className="flex justify-center w-screen">

      <div className="w-full max-w-screen-xl mx-5vw my-12 xl:mt-36 flex flex-col gap-12 lg:gap-16">

        <div>
          <h1 className="text-5xl font-black lg:text-8xl">{Static.carreer.title_line1}</h1>
          <h1 className="text-5xl font-black lg:text-8xl">{Static.carreer.title_line2}</h1>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-verdeSage text-3xl lg:text-5xl font-black">{Static.carreer.academic_title}</h1>
          <div className='grid grid-cols-1 lg:grid-cols-1 gap-12'>
          {
            academics_list.map((academic, index) => {
              return(
                <StudyJobCard key={index} title={academic.job_title} institution={academic.job_instituion} initial_year={academic.start_date} finishing_year={academic.finish_date}/>
              )
            })
          }
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-verdeSage text-3xl lg:text-5xl font-black">{Static.carreer.job_title}</h1>
          <div className='grid grid-cols-1 lg:grid-cols-1 gap-8'>
          {
            jobs_list.map((job, index) => {
              return(
                <StudyJobCard key={index} title={job.job_title} institution={job.job_instituion} initial_year={job.start_date} finishing_year={job.finish_date}/>
              )
            })
          }
          </div>
        </div>

        <Footer />

      </div>
    </main>
  );
}
