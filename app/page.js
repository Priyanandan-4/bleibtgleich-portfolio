"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import Lenis from 'lenis'
import THREE from "@/components/imagepage"
import FOUR from "@/components/project"
import FIVE from "@/components/contact"
import ColorGrid from "@/components/projectshow"
import gsap, { ScrollTrigger } from "gsap/all"
import SplitType from "split-type"
import YourComponent from "@/components/line"

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const portfolio = useRef(null);
  const hrRefs = useRef([]); // Array to hold all hr refs

  // Helper function to add refs to the array
  const addToRefs = (el) => {
    if (el && !hrRefs.current.includes(el)) {
      hrRefs.current.push(el);
    }
  };

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    lenis.on("scroll", (e) => console.log(e));

    const glitch = gsap.to(".glitch-text", {
      duration: 0.04,
      opacity: 0.1,
      repeat: 25,
      yoyo: true,
      ease: "none"
    });

    // Portfolio text animation
    if (portfolio.current) {
      const split = new SplitType(portfolio.current, { types: "chars" });
      const chars = split.chars;
      const shuffledChars = [...chars].sort(() => Math.random() - 0.5);
      gsap.set(chars, {
        opacity: 0,
      });
      shuffledChars.forEach((char, index) => {
        gsap.to(char, {
          opacity: 1,
          duration: 0.5,
          delay: index * 0.07,
          ease: "power4.out"
        });
      });
    }

    hrRefs.current.forEach((hr) => {
      gsap.fromTo(
        hr,
        {
          width: 0,
        },
        {
          width: '100%',
          duration: 1.5,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hr,
            start: 'top 100%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    // Cleanup function
    return () => {
      glitch.kill();
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      {/* Vertical red line */}
      <YourComponent />
      {/* Header */}
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
            <Link href="#" aria-label="LinkedIn" className="hover:text-[#fa0d0d] transition-colors">in</Link>
            <Link href="#" aria-label="Telegram" className="hover:text-[#fa0d0d] transition-colors">tg</Link>
            <Link href="#" aria-label="Email" className="hover:text-[#fa0d0d] transition-colors">mail</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-end">
        <div className="absolute inset-0 z-10 text-[#fa0d0d] font-extrabold">
          <div className="absolute inset-0 bg-white/95 backdrop-blur-3xl -z-10 opacity-85"></div>
          <div className="absolute top-1/3 right-10 md:right-44 text-[#fa0d0d] text-xl md:text-3xl max-w-md -tracking-[1px] md:-tracking-[2px] ">
            <p className="mb-2">A restless ghost,</p>
            <p>doomed to scroll forever.</p>
          </div>
          <div className="absolute top-1/2 left-0 right-0 text-[#fa0d0d] text-xl md:text-2xl">
            <hr className="border-t-2 border-[#fa0d0d] my-4" ref={addToRefs} />
            <p className="pl-10 md:pl-96 -tracking-[1px] md:-tracking-[2px] glitch-text ">scroll, know, and exit.</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
            <h2 className="text-[#fa0d0d] text-[18vw] md:text-[20vw] leading-none font-bold -tracking-[10px] md:-tracking-[26px]" ref={portfolio} >PORTFOLIO</h2>
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

      {/* Divider Section */}
      <section className="bg-white h-16 md:h-36 flex flex-col justify-between relative">
        <hr className="border-t-2 border-[#fa0d0d] my-4" ref={addToRefs} />
        <hr className="border-t-2 border-[#fa0d0d] my-4" ref={addToRefs} />
      </section>

      {/* About Section */}
      <section className="relative z-20">
        <div className="relative bg-white/90 z-20 text-[#fa0d0d] py-10 ">
          <div className="flex justify-between w-full">
            <div className="pl-10 font-sans font-extrabold">ig;</div>
            <h2 className="text-[#fa0d0d] text-[7vw] md:text-[8vw] leading-none font-bold -tracking-[1px] md:-tracking-[14px] text-right pr-2 md:pr-11">
              Design & dev<br />
              now with 50% <br />
              more debugging!
            </h2>
          </div>
          <h1 className="text-[3vw] md:text-[1.3vw] font-extrabold leading-none pt-10 pl-10 md:pl-96 -tracking-[0.1px] md:-tracking-[1.5px]">
            <span className="text-[14px] md:text-2xl">aBout;</span><br />
            A detail-oriented Front-End Developer <br />
            focused on creating intuitive, high-performance <br />
            web applications with modern technologies
          </h1>

          <div className="flex justify-between w-full flex-col md:flex-row">
            <h1 className="pt-5 pl-10 text-[10px] md:text-[28px] -tracking-[1px] md:-tracking-[1.5px] md:pt-48 md:pl-16 font-mono font-bold">
              "100% unique.99%<br />
              <a
                href="https://www.bleibtgleich.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[20px] md:text-4xl -tracking-[1px] md:-tracking-[3px] underline"
              >
                Bleibtgleich.
              </a><br />
              Do the math."
            </h1>
            <h1 className="md:mt-80 md:pr-20 pr-1 mt-24 font-bold text-7xl md:text-9xl -tracking-[1px] md:-tracking-[20px] flex items-center justify-center gap-4 md:gap-10 ">
              <span>m'22</span>
              <span>-</span>
              <span className="-tracking-[1px] md:-tracking-[6px]">Ƥⓝ!</span>
            </h1>
          </div>
        </div>
        {/* Blurred Skills List */}
        <div className="absolute top-0 -z-10 text-[#561313] font-extrabold overflow-hidden mt-6 h-auto w-screen">
          <h1 className="flex flex-wrap justify-between md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
            <span>HTML</span>
            <span>CSS</span>
          </h1>
          <h1 className="flex flex-wrap justify-between md:space-x-40 lg:space-x-56 -tracking-[1px] md:-tracking-[10px] text-4xl sm:text-6xl md:text-9xl" style={{ filter: "blur(3px)" }}>
            <span>JAVASCRIPT</span>
            <span>REACT</span>
          </h1>
          <h1 className="flex flex-wrap justify-between md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
            <span>TYPESCRIPT</span>
            <span>MUI</span>
          </h1>
          <h1 className="flex flex-wrap justify-between md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
            <span>GSAP</span>
            <span>NEXTJS</span>
          </h1>
          <h1 className="flex justify-between md:space-x-40 lg:space-x-56 -tracking-[1px] md:-tracking-[10px] text-4xl sm:text-6xl md:text-9xl" style={{ filter: "blur(3px)" }}>
            <span>TAILWIND</span>
            <span>DEVELOPER</span>
          </h1>
          <h1 className="flex justify-between md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
            <span>REACTQUARY</span>
            <span>FIGMA</span>
          </h1>
          <h1 className="flex flex-wrap justify-between md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
            <span>SHADCN</span>
            <span>ZUSTAND</span>
          </h1>
        </div>

        <hr className="border-t-2 border-[#fa0d0d] my-3.5 md:my-9" ref={addToRefs} />
      </section>

      <THREE />
      <FOUR />
      <ColorGrid />
      <FIVE />
    </main>
  );
}

export default Page;