import SmoothScroll from "../components/smoothScroll";
import ScrollToTopButton from "../components/backTop_btn";
import projects from "../data/projects_data.json"
import ProjectInfoCard from "./ProjectInfoCard";
import ProjectRichText from "./InfoDivisionCard";
import MoreProjects_link from "./NextPrevious";
import ImgBox from "./ProjectImgBox";


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
      <SmoothScroll></SmoothScroll>
      <div className="fixed bottom-6 right-6 bg-gris p-8 rounded-2xl flex flex-col justify-center items-center gap-3">
        <div className="bg-negro h-4 w-4 rounded-sm"></div>
        <div className="bg-grisMid h-2 w-2 rounded-sm"></div>
        <div className="bg-grisMid h-2 w-2 rounded-sm"></div>
        <div className="bg-grisMid h-2 w-2 rounded-sm"></div>
      </div>      
      <div className="w-full max-w-screen-xl mx-5vw my-24 flex flex-col gap-12 xl:my-48 lg:gap-24">

        {/* Info */}
        <ProjectInfoCard name={item?.name} type={item?.type} description={item?.description} roles={item?.roles} tech={item?.tech} colab={item?.colab} colab_rol={item?.colab_rol} colab_link={item?.colab_link} />        

        {/* Banner item?.hero_media */}
        <div className="rounded-3xl">
        <video autoPlay muted loop className="object-cover w-full h-full rounded-3xl">
          <source src={item?.hero_media} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        </div>

        {/* Problem */}
        <div className="flex flex-col gap-6">
        <ProjectRichText 
        title="The main challenge" 
        paragraph={item?.problem?.map((paragraph) => {
        return (
            <p className="flex gap-2 items-center">{paragraph?.paragraph}</p>
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
        title="The provided solution" 
        paragraph={item?.solution?.map((paragraph) => {
          return (
              <p className="flex gap-2 items-center">{paragraph?.paragraph}</p>
            );
          })}/>
        
        <ProjectRichText title="Stablished objectives" paragraph={item?.requirements?.map((requirement, index) => {
        return (
            <p className="flex gap-2 items-center"><span className="w-2 h-2 rounded-sm bg-verdeSage"></span>{requirement?.requirement}</p>
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
        title="The Final product" 
        paragraph={item?.final?.map((paragraph) => {
          return (
              <p className="flex gap-2 items-center">{paragraph?.paragraph}</p>
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

        {/*Footer*/}
        <div className="flex gap-4 flex-col">
          <ScrollToTopButton />
          <MoreProjects_link slug={nextItem?.slug} project_name={nextItem?.name}/>
        </div>
      </div>

    </main>
  );
}

export default Home;
