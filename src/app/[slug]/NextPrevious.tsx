import Link from 'next/link';

export default function MoreProjects_link(props) {

    return(
        <Link href={props.slug} target="_top" className="w-fit p-4 border rounded-lg hover:border-verdeSage hover:bg-verdeSage hover:text-blanco transition-all">
            <p className='flex items-center gap-2 font-light'>
                <span className='font-black text-3xl'>Next Project -</span>
                {props.project_name} 
                <span className='h-px w-8 bg-negro'></span>
            </p>
        </Link>
    )
}