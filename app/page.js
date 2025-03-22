"use client"

import Link from "next/link"
import { useEffect } from "react"
import Lenis from 'lenis'



const Page = () => {

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      console.log(e);
    });
  }, [])

  return (
    <main className="relative overflow-x-hidden ">
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 z-50 text-gray-400 font-bold">
        <div>PRIYANANDAN</div>
        <div className="h-6 w-6 bg-[#fa0d0d]"></div>
        <div>
          <Link href="/about" className="text-gray-400 font-bold hover:text-[#fa0d0d] transition-colors">
            about
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex gap-6">
            <Link href="#" aria-label="LinkedIn" className="hover:text-[#fa0d0d] transition-colors">
              in
            </Link>
            <Link href="#" aria-label="Telegram" className="hover:text-[#fa0d0d] transition-colors">
              tg
            </Link>
            <Link href="#" aria-label="Email" className="hover:text-[#fa0d0d] transition-colors">
              mail
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-end">
        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 text-[#fa0d0d] font-extrabold">
          <div className="absolute inset-0 bg-white/95 backdrop-blur-3xl -z-10 opacity-85"></div>
          {/* Vertical Line */}
          {/* <div className="absolute left-1/3 top-0 bottom-0 border-l-2 z-[100] border-[#fa0d0d] "></div> */}
          <div className="absolute top-1/3 right-10 md:right-44 text-[#fa0d0d] text-xl md:text-3xl max-w-md">
            <p className="mb-2">A restless ghost,</p>
            <p>doomed to scroll forever.</p>
          </div>
          <div className="absolute top-1/2 left-0 right-0 text-[#fa0d0d] text-xl md:text-2xl">
            <hr className="border-t-2 border-[#fa0d0d] my-4" />
            <p className="pl-10 md:pl-96">scroll, know, and exit.</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
            <h2 className="text-[#fa0d0d] text-[15vw] md:text-[18vw] leading-none font-bold">PORTFOLIO</h2>
          </div>
        </div>
        <div className="flex justify-center items-end h-screen w-screen p-10 z-0 bg-white text-[#561313] font-extrabold">
          <div className="flex flex-col h-screen justify-end bg-white">
            <h1 className="flex space-x-5 md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
              <span>WEBFLOW</span>
              <span>DEVELOPER</span>
            </h1>
            <h1 className="flex space-x-5 md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
              <span>UI/UX</span>
              <span>DEVELOPER</span>
            </h1>
            <h1 className="flex space-x-8 md:space-x-40 lg:space-x-56 -tracking-[1px] md:-tracking-[10px] text-4xl sm:text-6xl md:text-9xl" style={{ filter: "blur(3px)" }}>
              <span>FRONTEND</span>
              <span>DEVELOPER</span>
            </h1>
          </div>
        </div>
      </section>



      <section className="bg-white h-56 flex flex-col justify-between">
        <div className="absolute left-1/3 top-0 bottom-0 border-l-2 border-[#fa0d0d] z-[100]"></div>
        <hr className="border-t-2 border-[#fa0d0d] my-4" />
        <hr className="border-t-2 border-[#fa0d0d] my-4" />
      </section>


      <section className="relative p-10">
  <div className="flex justify-center items-end relative z-0 bg-white font-extrabold">
    {/* Fixed Background Issue */}
    <div className="absolute w-screen h-full bg-white/85 z-20">
      <h2 className="text-[#fa0d0d] text-[6vw] md:text-[10vw] leading-none font-bold -tracking-[1px] md:-tracking-[14px]">
        PORTFOLIO
      </h2>
    </div>

    <div className="relative z-10 flex flex-col justify-end text-[#561313]">
      <h1 className="flex space-x-5 md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
        <span>HTML</span>
        <span>CSS</span>
      </h1>
      <h1 className="flex space-x-8 md:space-x-40 lg:space-x-56 -tracking-[1px] md:-tracking-[10px] text-4xl sm:text-6xl md:text-9xl" style={{ filter: "blur(3px)" }}>
        <span>JAVASCRIPT</span>
        <span>REACT</span>
      </h1>
      <h1 className="flex space-x-5 md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
        <span>TYPESCRIPT</span>
        <span>SHADCN</span>
      </h1>
      <h1 className="flex space-x-5 md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
        <span>GSAP</span>
        <span>NEXTJS</span>
      </h1>
      <h1 className="flex space-x-8 md:space-x-40 lg:space-x-56 -tracking-[1px] md:-tracking-[10px] text-4xl sm:text-6xl md:text-9xl" style={{ filter: "blur(3px)" }}>
        <span>TAILWIND</span>
        <span>DEVELOPER</span>
      </h1>
    </div>
  </div>
</section>




    </main>
  )
}

export default Page
