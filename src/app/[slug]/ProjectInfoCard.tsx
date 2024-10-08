import StaticData from "../data/static_data.json"

export default function ProjectInfoCard(props) {

    const ImpData = StaticData.project_info_card

    return(
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-black text-5xl lg:text-7xl">{props.name}</h1>
            <p className="font-light text-verdeSage text-2xl lg:text-3xl">{props.type}</p>
          </div>

          <div>
            {/*<span className="text-grisMid text-lg font-medium italic">{ImpData.about_label}</span>*/}
            <p className="max-w-screen-lg text-2xl lg:text-4xl font-light">{props.description}</p>
          </div>

          <div className="flex flex-col gap-2">

            <p className="font-light">
              <span className="text-grisMid text-1xl font-medium italic">{ImpData.tech_label}</span> {props.tech}
            </p>

            <p className="font-light">
              <span className="text-grisMid text-1xl font-medium italic">{ImpData.roles_label}</span> {props.roles}
            </p>
            
          </div>
        </div>
    )
}