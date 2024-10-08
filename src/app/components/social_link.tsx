export default function SocialLink(props){

    return(
    <a className="flex gap-0 font-medium items-center group hover:gap-2" href={props.link} target="_blank" rel="noopener noreferrer">
        {props.icon}
    </a>
    )
}