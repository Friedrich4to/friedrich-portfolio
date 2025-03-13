import StaticData from "../data/static_data.json"

export default function ProjectInfoCard(props) {

    const ImpData = StaticData.project_info_card

    return(
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-black text-5xl lg:text-7xl text-g">{props.name}</h1>
            <span className="text-grisMid text-3xl font-light">{props.type}</span>
          </div>

          <div>
            <p className="max-w-screen-md text-2xl lg:text-4xl font-light">{props.description}</p>
          </div>

          <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-0">
              <span className="text-grisMid text-1xl font-medium italic">{ImpData.roles_label}</span> 
              <p className="font-light">{props.roles}</p>
            </div>

            <div className="flex flex-col gap-0">
              <span className="text-grisMid text-1xl font-medium italic">{ImpData.tech_label}</span>
              <p className="font-light">{props.tech}</p>
            </div>
            
          </div>
        </div>
    )
}