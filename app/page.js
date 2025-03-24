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
  <div className="absolute w-screen h-[150vh] bg-white/85 z-20 text-[#fa0d0d] flex flex-col">
  <div className="flex justify-between">
<div className="pl-10">ig;</div>
  <h2 className="text-[#fa0d0d] text-[7vw] md:text-[8vw] leading-none font-bold -tracking-[1px] md:-tracking-[14px] text-right pr-2 md:pr-11">
    Design & dev<br/>
    now with 50% <br/>
    more debugging!
  </h2>

  </div>
  <h1 className="text-[3vw] md:text-[1.3vw] font-bold leading-none  pt-20 pl-10 md:pl-96 -tracking-[0.1px] md:-tracking-[1.5px]"><span className=" text-[14px] md:text-2xl">aBout;</span><br/>A detail-oriented Front-End Developer <br/>focused on creating intuitive, high-performance <br/> web applications with modern technologies</h1>
  <div className="flex justify-between flex-col md:flex-row">
  <h1 className="pt-16 pl-8 text-[10px] md:text-[24px] -tracking-[1px] md:-tracking-[1.5px] md:pt-48 md:pl-16">
  "100% unique.99% 
  <a 
    href="https://www.bleibtgleich.com/"  
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-[20px]  md:text-4xl -tracking-[1px] md:-tracking-[3px] underline"
  >
    Bleibtgleich.
  </a> 
  Do the math."
</h1>
<h1 className="md:pt-80 md:pr-20 pr-1 pt-24 text-7xl md:text-9xl  -tracking-[1px] md:-tracking-[20px] flex items-center justify-center gap-4 md:gap-10">
  <span>m'22</span> 
  <span>-</span> 
  <span className="-tracking-[1px] md:-tracking-[6px]">Ƥⓝ!</span>
</h1>

  </div>
  <hr className="border-t-2 border-[#fa0d0d] my-9" />
</div>

    <div className="relative z-10 flex flex-col justify-end text-[#561313] h-[150vh]">
      
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
        <span>MUI</span>
      </h1>
      <h1 className="flex space-x-5 md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
        <span>GSAP</span>
        <span>NEXTJS</span>
      </h1>
      <h1 className="flex space-x-8 md:space-x-40 lg:space-x-56 -tracking-[1px] md:-tracking-[10px] text-4xl sm:text-6xl md:text-9xl" style={{ filter: "blur(3px)" }}>
        <span>TAILWIND</span>
        <span>DEVELOPER</span>
      </h1>
      <h1 className="flex space-x-5 md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
      <span>REACTQUARY</span>
      <span>FIGMA</span>
      </h1>
      <h1 className="flex space-x-5 md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
      <span>SHADCN</span>
      <span>ZUSTAND</span>
      </h1>
      

    </div>
  </div>
</section>



     





     <section>

     </section>
    </main>
  )
}

export default Page
