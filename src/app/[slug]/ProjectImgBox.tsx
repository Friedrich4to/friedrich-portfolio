import Image from "next/image"

interface ImgBox {
    img_source: string;
}

export default function ImgBox({ img_source }) {

    return(
    <div className="relative lg:h-80p sm:h-96 h-60 rounded-3xl">
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