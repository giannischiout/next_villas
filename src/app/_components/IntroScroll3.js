

'use client'
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useAnimation, useAnimate, useTransform } from "framer-motion"
import { scroll } from "framer-motion"

import Image from "next/image";
const IntroScroll3 = () => {

  const [scope, animate] = useAnimate();
  const [fireAnimation, setFireAnimation] = useState(false);
  const [fired, setFired] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [position, setPosition] = useState('fixed');




  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAnimate = async () => {
    setFired(true)
    console.log('start')
      await animate('#intro_image_wrapper', {
      width: 700,
      height: 200,
      top: '50%',
      transform: 'translateY(-50%)',

    },
    {
      ease: 'easeInOut',
      duration: 2,
    })
    
    await animate(scope.current, { 
      position: 'static',
     })
    window.scrollTo(0, 0)
    setFireAnimation(false);
  }


  useEffect(() => {
      
  }, [scrollY])

  useEffect(() => {

    if (scrollY > 0.56 && scrollY < 100) {
      setFireAnimation(true)

    } else {
      setFireAnimation(false)
    }
  }, [scrollY])

  useEffect(() => {
    if (!fired && scrollY > 0.56 && scrollY < 100) {
      handleAnimate()
    }
  }, [fireAnimation])





  return (
    <div  className="container">
    <div ref={scope} id="intro_wrapper">
      <div id="intro_image_wrapper">
      </div>
      {/* <div className="intro_content">
  
      </div> */}
    </div>
    </div>
  );
};

export default IntroScroll3;