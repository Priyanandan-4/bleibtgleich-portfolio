"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function IntroAnimation() {
  const introRef = useRef(null)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const introElement = introRef.current

    // Set initial styles
    gsap.set(introElement, {
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 50,
      backgroundColor: "#FFFFFF",
      overflow: "hidden", // Prevent overflow
    })

    // Create the animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setAnimationComplete(true)
        gsap.set(introElement, { display: "none" }) // Hide the element after animation
      },
    })

    // Animation sequence - after 2 seconds
    tl.to(introElement, {
      delay: 2,
      duration: 0.8,
      width: "80vw",
      height: "80vh",
      top: "10vh",
      left: "10vw",
      ease: "power3.inOut",
    })
      .to(introElement, {
        duration: 0.6,
        width: "auto",
        height: "30px",
        top: "2px",
        left: "20px",
        ease: "back.in(1.7)",
      })
      .to(introElement, {
        duration: 0.3,
        background: "rgba(239, 68, 68, 0)", // Fully transparent
        boxShadow: "0 0 0px rgba(239, 68, 68, 0)", // Remove glow
        ease: "none",
      })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <>
      <div ref={introRef} className="flex items-center justify-center text-white font-bold">
        {!animationComplete && (
          <div className="text-center">
            <h1 className="text-9xl mb-4 text-red-700">Welcome</h1>
            <p className="text-9xl text-red-700">###f&ck!</p>
          </div>
        )}
        {animationComplete && <div className="text-2xl text-gray-400 -tracking-[1px] md:-tracking-[2px] font-bold">PRIYANANDAN</div>}
      </div>
    </>
  )
}

