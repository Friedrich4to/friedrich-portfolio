import Image from "next/image";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <main className="flex justify-center w-screen">
      <div className="w-full max-w-screen-xl mx-5vw my-12 xl:mt-36 flex flex-col gap-12 lg:gap-16">

        <div>
          <h1 className="text-5xl font-black lg:text-8xl">Biografia<br />& Pasatiempos</h1>
        </div>

        <div className="flex flex-col gap-6 max-w-screen-md">
          <p className='text-xl font-light'>Buenas, mi nombre es <br className="lg:hidden"/><span className="font-black">Frederick A. Marte Pimentel</span></p>
          <p className='text-base lg:text-xl font-light'>Nacido en el 2001, viviendo actualmente en <span className="font-black">República Dominicana.</span></p>
          <p className='text-base lg:text-xl font-light'>Soy un amante del diseño en todas sus formas, ya sean objetos, experiencias, espacios, videojuegos o cualquier área en la que la planeación, intensión e ingenio tengan cabida.</p>
          <p className='text-base lg:text-xl font-light'>Me caracteriza el ser intenso y extrovertido, cualidades que se materializan en el esfuerzo de mi trabajo y en mi forma de experimentar el mundo. </p>
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
