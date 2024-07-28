import Image from "next/image";
import SmoothScroll from "../components/smoothScroll";

export default function Home() {
  return (
    <main className="flex justify-center w-screen">
      <SmoothScroll></SmoothScroll>
      <div className="w-full max-w-screen-xl mx-5vw my-24 flex flex-col gap-12 xl:my-48 lg:gap-16">

        <div>
          <h1 className="text-5xl font-black lg:text-8xl">BIOGRAPHY<br />& HOBBIES</h1>
        </div>

        <div className="flex flex-col gap-6 max-w-screen-md">
          <p className='text-xl font-medium'>Greetings! <span className="lg:hidden"><br /></span>I am Frederick A. Marte Pimentel</p>
          <p className='text-base lg:text-xl font-light'>Nacido en el 2001, viviendo actualmente en República Dominicana.</p>
          <p className='text-base lg:text-xl font-light'>Soy un entusiasta del diseño en todas sus formas, ya sean videojuegos, objetos, experiencias, espacios o cualquier área en la que la planeación, intensión e ingenio tengan cabida.</p>
          <p className='text-base lg:text-xl font-light'>Me caracteriza el ser intenso y extrovertido, cualidades que enfoco no solo en mi trabajo, sino también en mi forma de tanto crear como consumir arte y diseño.</p>
          <p className='text-base lg:text-xl font-light'>Mis hobbies son los videojuegos y conversaciones interminables de todo aquello que pueda ser imaginado.</p>
          <p className='text-base lg:text-xl font-light'>PD: También hago 3D :)</p>
          </div>

          <div>
            <Image
              src='/images/bio/about.jpg'
              width={1280}
              height={700}
              quality={90}
              loading = 'lazy'
              className="rounded-lg"
              alt="Picture of the author"
            />
          </div>

      </div>
    </main>
  );
}
