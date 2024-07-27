interface ProjectRichText{
  paragraph: string;
  title: string;
}

export default function ProjectRichText({ title, paragraph }) {

    return(
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-negro text-4xl font-black uppercase">{title}</h1>
          <div className="flex flex-col gap-6 font-light text-base lg:text-xl max-w-screen-md">{paragraph}</div>
        </div>
    </div>
    )
}