import Image from "next/image";
// import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <main>
        <section className="grid grid-cols-2 bg-orange-100">
          <div className=" flex flex-col gap-4 justify-center text-center items-center p-20">
            <p className={`text-3xl font-bold ${poppins.className}`}>Short links. Big control.</p>
            <p>Create, customize, and track your links with Vexo. A fast, modern URL shortener built for simplicity, analytics, and control — all in one clean dashboard.</p>
            <div className="flex  gap-3">
            <Link href={"/shorten"}><button className='bg-orange-500 cursor-pointer text-white font-bold px-4 py-2 rounded-md hover:bg-orange-600 transition'>
              Try Now!</button></Link>
            <Link href={"/github"}><button className='bg-orange-500 cursor-pointer text-white font-bold px-4 py-2 rounded-md hover:bg-orange-600 transition'>
              Github</button>
            </Link>
          </div>
          </div>
          <div className="flex justify-start min-h-[50vh] relative">
            <Image
              className=" mix-blend-darken"
              src={"/vector.jpg"}
              alt="Illustration Image"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 43vw"
            />
            
          </div>
          
        </section>
      </main>
    </>
  );
}
