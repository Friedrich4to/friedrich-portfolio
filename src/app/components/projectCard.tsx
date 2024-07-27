import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard(props) {

    return(
        <Link href={props.slug} target="_top">
            <div className="w-full h-fit rounded-lg">
                <div>
                    <Image
                        src={props.img}
                        width={700}
                        height={300}
                        quality={80}
                        loading = 'lazy'
                        className="rounded-t-lg object-cover"
                        alt="Project Banner"
                    />
                </div>
                <div className="rounded-b-lg flex items-center justify-between py-8 px-4 lg:p-6 text-base lg:text-xl bg-gris w-full h-14">
                    <p className='font-medium'>{props.name}</p>
                    <p className='text-grisOs text-xs lg:text-base text-right font-light'>{props.type}</p>
                </div>
            </div>
        </Link>
    )
}
