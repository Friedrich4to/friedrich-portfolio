export default function StudyJobCard (props){

    return(
        <div className="max-w-screen-sm">
            <h1 className="text-xl lg:text-2xl font-black">{props.title}</h1>
            <h2 className="text-base lg:text-2xl font-light">{props.institution}</h2>
            <p className="text-base font-light text-grisOs">{props.initial_year} - {props.finishing_year}</p>
        </div>
        
    )
}