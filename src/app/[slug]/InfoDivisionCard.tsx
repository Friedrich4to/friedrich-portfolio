interface ProjectRichText{
  paragraph: string;
  title: string;
}

export default function ProjectRichText({ title, paragraph }) {

    return(
      <div className="flex flex-col">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-black">{title}</h1>
          <div className="flex flex-col gap-4 font-light text-base lg:text-xl max-w-screen-sm">{paragraph}</div>
        </div>
    </div>
    )
}