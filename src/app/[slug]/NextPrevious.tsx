import { ArrowRight } from '../components/icons/interface_icons';

export default function MoreProjects_link(props) {

    return(
            <button className='flex items-center gap-2 font-light'>
                <span className='font-black text-3xl'>Next project -</span>
                {props.project_name}
                <ArrowRight />
            </button>
    )
}