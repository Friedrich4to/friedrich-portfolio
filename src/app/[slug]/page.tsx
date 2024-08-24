import projects from "../data/projects_data.json"
import ProjectInfoCard from "./ProjectInfoCard";
import ProjectRichText from "./InfoDivisionCard";
import MoreProjects_link from "./NextPrevious";
import ImgBox from "./ProjectImgBox";
import { RedirectIcon } from "../components/icons/interface_icons";
import { Footer } from "../components/footer";
import Link from "next/link";


interface item {
  img: {
    src: string;
  };
}

interface nextItem {
  Link: {
    href: URL;
  };
}



export default function DynamicPage({ params }: { params: { slug: string } }) {

  const item = projects.find((item) => item.slug === params.slug);
  const bloques = item?.content_blocks

  const currentIndex = projects.findIndex((item) => item.slug === params.slug);
  const nextItem = currentIndex !== -1 && currentIndex < projects.length - 1 
  ? projects[currentIndex + 1] 
  : projects[0];

  return (
    <main className="flex justify-center w-screen ">
    
      <div className="w-full lg:max-w-screen-lg mx-5vw my-12 xl:mt-36 flex flex-col gap-12 lg:gap-24">

        {/* HeroBanner */}
        <div className="rounded-3xl">
          <video autoPlay muted loop className="object-cover w-full aspect-video rounded-3xl bg-gris animate-fade-bg">
            <source src={item?.hero_media} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>

        {/* Info */}
        <ProjectInfoCard name={item?.name} type={item?.type} description={item?.description} roles={item?.roles} tech={item?.tech} state={item?.state}/>    

        <div className="flex items-center gap-8">
          <div className="w-48 h-[2px] bg-negro"></div>
          <div className="w-[4px] h-[4px] bg-negro"></div>
        </div>

        {/*Blocks Array*/}
        <div className="flex flex-col gap-24">
          {item?.content_blocks.map(({title, block_paragraphs, block_multimedia}) =>{
            return (
            <div key={title} className="flex flex-col gap-4">
              {/*Title*/}
              <h1 className="text-3xl font-black">{title}</h1>

              {/*Paragraphs array*/}
              {block_paragraphs.map((paragraph, index) => {
                return (
                    <p key={index} className="flex flex-col gap-4 font-light dark:text-grisOs text-base lg:text-xl max-w-screen-md">{paragraph?.paragraph}</p>
                  );
              })}
            
              {/*Multimedia array*/}
              {block_multimedia.map((media, index) => {
              return (
                <div key={index}>
                  {media.type === 'image' ? (
                    <ImgBox img_source={media?.media} note={media?.note}/>
                  ) : (
                    <video autoPlay playsInline muted loop className="object-cover rounded-3xl">
                      <source src={media?.media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                );
              })}
            </div>
            )
          }
          )}
        </div>

        {/* Conclusion */}
        <div className="flex flex-col gap-6">
          <ProjectRichText 
          title="Conclusiones finales" 
          paragraph={item?.conclusion?.map((conclusiones, index) => {
            return (
                <p key={index} className="flex gap-2 items-center">{conclusiones?.paragraph}</p>
              );
            })}/>

          <div className="flex flex-col lg:flex-row gap-12 text-xl text-verdeSage stroke-verdeSage">
            {item?.links?.map((link, index) => {
              return (
                <a key={index} href={link.link} className='flex italic gap-2 font-medium items-center' target='_blank' rel="noopener noreferrer">{link.label}<RedirectIcon /></a>
                );
              })}
          </div>

        </div>

        {/*Footer*/}
        <div className="flex gap-4 flex-col">

          <Link href={nextItem?.slug} className="group w-fit p-4 border rounded-lg hover:border-verdeSage hover:bg-verdeSage hover:text-blanco transition-all">
            <MoreProjects_link project_name={nextItem?.name}/>
          </Link>
        </div>

        <Footer />

      </div>

    </main>
  );
}
