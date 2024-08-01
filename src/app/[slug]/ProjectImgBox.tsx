import Image from "next/image"

interface ImgBox {
    img_source: string;
}

export default function ImgBox({ img_source }) {

    return(
    <div className="relative w-full h-64 md:h-[500px] xl:h-80p  rounded-3xl">
    <Image
      src={img_source}
      fill
      quality={80}
      loading = 'lazy'
      className="rounded-3xl object-cover"
      alt="Picture of the author"
    />
    </div>
    )
}