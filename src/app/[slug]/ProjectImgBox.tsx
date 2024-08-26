import Image from "next/image"

interface ImgBox {
    img_source: string;
}

export default function ImgBox({ img_source, note }) {

    return(
    <div className="relative w-full aspect-video rounded-xl">
      <div className={`hidden sm:block absolute z-20 bg-blanco rounded-lg text-base xl:text-sm font-light bottom-4 left-4 w-fit max-w-[360px] h-fit ${note.trim() === '' ? 'p-0' : 'p-4'}`}>{note}</div>
      <Image
        src={img_source}
        fill
        quality={80}
        sizes='1920px'
        loading = 'lazy'
        className="rounded-xl object-cover"
        alt="Project Picture"
      />
    </div>
    )
}