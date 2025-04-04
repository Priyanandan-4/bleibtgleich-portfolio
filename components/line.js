import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function YourComponent() {
  const hrRef = useRef(null);

  useEffect(() => {
    const line = hrRef.current;

    gsap.set(line, {
      height: 0,
    //   opacity: 0,
    // y:0
    });

    gsap.to(line, {
      height: '100%',
      opacity: 1,
      duration: 10,
      ease: 'expo.out',
      onStart: () => {
        line.style.transformOrigin = 'top ';
      }
    });
  }, []);

  return (
    <div 
      ref={hrRef}
      className="absolute left-1/3 h-full top-0 bottom-0 border-l-2 border-[#fa0d0d] z-[999]"
    />
  );
}

export default YourComponent;
