export default function ProjectInfoCard(props) {

      const highlightRoles = (roles) => {
        const words = roles.split(' ');
        return words.map((word, index) => {
            if (["ux", "ui", "3d", "environment", "concept", "props", "animation"].includes(word.toLowerCase())) {
                return <span key={index} className="font-black text-verdeSage">{word}</span>;
            }
            return <span key={index}> {word} </span>;
        });
    };

    return(
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-black text-5xl lg:text-7xl">{props.name}</h1>
            <p className="font-light text-verdeSage text-2xl lg:text-3xl">{props.type}</p>
          </div>

          <div>
            <span className="text-grisMid text-lg font-medium italic">Acerca del proyecto</span>
            <p className="max-w-screen-lg text-2xl lg:text-4xl font-light">{props.description}</p>
          </div>

          <div className="flex flex-col gap-2">

            <div className="flex gap-2 items-baseline">
                <span className="text-grisMid text-1xl font-medium italic">Estado:</span><p className="text-base font-light lg:text-xl">Terminado</p>
            </div>

            <div className="flex gap-2 items-baseline">
              <span className="text-grisMid text-1xl font-medium italic">Tech Stack:</span>
              <p className="text-base font-light lg:text-xl">{props.tech}</p>
            </div>

            <div className="flex gap-2 items-baseline">
              <span className="text-grisMid text-1xl font-medium italic">Mis roles:</span>
              <p className="text-base font-light lg:text-xl">{highlightRoles(props.roles)}</p>
            </div>

            <div className="hidden gap-2 items-baseline">
              <span className="text-grisMid text-1xl font-medium italic ">Colaboradores:</span>
              <p className="text-base font-light lg:text-xl">{highlightRoles(props.colab_rol)} <a className="text-verdeSage underline italic" href={props.colab_link} target="_blank">{props.colab}</a></p>
            </div>
            
          </div>
        </div>
    )
}