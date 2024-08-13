import Image from "next/image"

interface ImgBox {
    img_source: string;
}

export default function ImgBox({ img_source, note }) {

    return(
    <div className="relative w-full aspect-video rounded-3xl">
      <div className={`absolute z-20 bg-blanco rounded-xl bottom-4 left-4 w-fit h-fit ${note.trim() === '' ? 'p-0' : 'p-6'}`}>{note}</div>
      <Image
        src={img_source}
        fill
        quality={80}
        loading = 'lazy'
        className="rounded-3xl object-cover"
        alt="Project Picture"
      />
    </div>
    )
}