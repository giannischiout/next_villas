

'use client'
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useAnimation, useAnimate, useTransform } from "framer-motion"
import { scroll } from "framer-motion"

import Image from "next/image";
const IntroScroll4 = () => {

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
      await animate('#intro_image_wrapper_2', {
      width: 1300,
      height: 250,
      top: '50%',
      transform: 'translateY(-50%)',
    },
    {
      ease: 'easeInOut',
      duration: 1,
    })
    await animate('#intro_image_wrapper_2', {
      width: 900,
      right: 300,
    },
    {
      ease: 'easeInOut',
      duration: 1,
    })
    
    await animate('#intro_content', {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
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
    <div  className="container_2">
       <div ref={scope} id="intro_wrapper_2">
            <div id="intro_image_wrapper_2">
            </div>
            <div id="intro_content">
              <div id="intro_content_top">
                  <div className="intro_content_top_inner"> 
                    <span>L</span>
                    <span>O</span>
                    <span>O</span>
                    <span>K</span>
                    <p>BEYOND LIMITS.</p>
                  </div>
                  <div></div>
              </div>
              <div id="intro_content_bottom">
                  <div></div>
                  <div></div>
              </div>
            </div>
       </div>

    </div>
  );
};

export default IntroScroll4;