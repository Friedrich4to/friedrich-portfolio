import Image from "next/image";
import { Footer } from "../components/footer";

export default function Bio() {

  return (
    <main className="flex justify-center w-screen">
      <div className="w-full max-w-screen-xl mx-5vw my-12 xl:mt-36 flex flex-col gap-12 lg:gap-16">

        <div>
          <h1 className="text-5xl font-black lg:text-8xl">Biography<br />& Hobbies</h1>
        </div>

        <div className="flex flex-col gap-6 max-w-screen-md">
          <p className='text-xl font-light'>Greetings! I am <br className="lg:hidden"/><span className="font-black">Frederick A. Marte Pimentel</span></p>
          <p className='text-base lg:text-xl font-light'>Born in 2001, currently living in <span className="font-black">Dominican Republic.</span></p>
          <p className='text-base lg:text-xl font-light'>I am a design enthusiast in all its forms, whether it's objects, experiences, spaces, video games, or any area where planning and intention come into play.</p>
          <p className='text-base lg:text-xl font-light'>I am characterized by being intense and extroverted, qualities that manifest in the effort I put into my work and in the way I experience the world.</p>
          </div>

          <div className="flex flex-col gap-2">
            <Image
              src='/images/bio/about.jpg'
              width={1280}
              height={700}
              quality={90}
              loading = 'lazy'
              className="rounded-lg"
              alt="Picture of the author"
            />
            <div className="flex flex-col">
              <span className="italic font-bold">Madrugada neblinosa, 2024</span>
              <span className="text-grisMid italic font-light">Altos de Chavón, La Romana, 06:00 a.m. </span>
            </div>
          </div>

          <Footer />

      </div>
    </main>
  );
}
