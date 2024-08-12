import ScrollToTopButton from "../components/backTop_btn";
import projects from "../data/projects_data.json"
import ProjectInfoCard from "./ProjectInfoCard";
import ProjectRichText from "./InfoDivisionCard";
import MoreProjects_link from "./NextPrevious";
import ImgBox from "./ProjectImgBox";
import { ArrowRight, RedirectIcon } from "../components/icons/interface_icons";
import { Footer } from "../components/footer";
import Link from "next/link";

interface Params{
  params: {
    slug: string
  }
}

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

const Home:React.FC<Params> = ({ params: {slug}}) => {

  const item = projects.find((item) => item.slug === slug);

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextItem = currentIndex !== -1 && currentIndex < projects.length - 1 
  ? projects[currentIndex + 1] 
  : projects[0];

  return (
    <main className="flex justify-center w-screen ">
    
      <div className="w-full max-w-screen-xl mx-5vw my-12 xl:mt-36 flex flex-col gap-12 lg:gap-14">

        {/* Banner item?.hero_media */}
        <div className="rounded-3xl">
        <video autoPlay muted loop className="object-cover w-full aspect-video rounded-3xl">
          <source src={item?.hero_media} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        </div>

        {/* Info */}
        <ProjectInfoCard name={item?.name} type={item?.type} description={item?.description} roles={item?.roles} tech={item?.tech} colab={item?.colab} colab_rol={item?.colab_rol} colab_link={item?.colab_link} />    

        <div className="flex items-center gap-8">
          <div className="w-48 h-[2px] bg-negro"></div>
          <div className="w-[4px] h-[4px] bg-negro"></div>
        </div>

        {/* Problem */}
        <div className="flex flex-col gap-6">
        <ProjectRichText 
        title="Problema a solucionar" 
        paragraph={item?.problem?.map((paragraph, index) => {
        return (
            <p key={index} className="flex gap-2 items-center">{paragraph?.paragraph}</p>
          );
        })}/>

        {item?.problem_media?.map((media, index) => {
        return (
          <div key={index}>
            {media.type === 'image' ? (
              <ImgBox img_source={media?.media}/>
            ) : (
                <video autoPlay muted loop className="object-cover rounded-3xl">
                  <source src={media?.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            )}
          </div>
          );
        })} 
        </div>

        {/* Solution */}
        <div className="flex flex-col gap-6">
        <ProjectRichText
        title="Solución planteada" 
        paragraph={item?.solution?.map((paragraph, index) => {
          return (
              <p key={index} className="flex gap-2 items-center">{paragraph?.paragraph}</p>
            );
          })}/>
        
        <ProjectRichText title="Objetivos establecidos" paragraph={item?.requirements?.map((requirement, index) => {
        return (
            <p key={index} className="flex gap-2 items-center"><span className="w-2 h-2 rounded-sm bg-verdeSage"></span>{requirement?.requirement}</p>
          );
        })}/>

        {item?.solution_media?.map((media, index) => {
        return (
          <div key={index}>
            {media.type === 'image' ? (
              <ImgBox img_source={media?.media}/>
            ) : (
                <video autoPlay muted loop className="object-cover rounded-3xl">
                  <source src={media?.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            )}
          </div>
          );
        })} 
        </div>

        {/* Final */}
        <div className="flex flex-col gap-6">
        <ProjectRichText 
        title="Producto final" 
        paragraph={item?.final?.map((paragraph, index) => {
          return (
              <p key={index} className="flex gap-2 items-center">{paragraph?.paragraph}</p>
            );
          })}/>


        {item?.final_media?.map((media, index) => {
        return (
          <div key={index}>
            {media.type === 'image' ? (
              <ImgBox img_source={media?.media}/>
            ) : (
                <video autoPlay muted loop className="object-cover rounded-3xl">
                  <source src={media?.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            )}
          </div>
          );
        })} 
        </div>

        {/* Pensamientos */}
        <div className="flex flex-col gap-6">
        <ProjectRichText 
        title="Conclusiones finales" 
        paragraph='Me paro sobre los hombros de gigantes que admiro al plantear el rediseño de la experiencia de usuario de este juego que tanto adoro.
        Sin embargo, siempre hay cabida a la mejora y al final del día de esto se trata. Estas propuestas buscan hacer aún mejor una experiencia de por si ya es extraordinaria.'/>

        <div className="flex gap-12 text-xl text-verdeSage stroke-verdeSage">
          <a href="https://www.instagram.com/friedrich4to/" className='flex italic gap-2 font-medium items-center' target='_blank' rel="noopener noreferrer">Enlace al proyecto<RedirectIcon /></a>
          <a href="https://www.instagram.com/friedrich4to/" className='flex italic gap-2 font-medium items-center' target='_blank' rel="noopener noreferrer">Prototipo de figma<RedirectIcon /></a>
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

export default Home;
