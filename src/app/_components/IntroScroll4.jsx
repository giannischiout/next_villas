

'use client'
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useAnimation, useAnimate, useTransform } from "framer-motion"
import { scroll } from "framer-motion"
import Image from "next/image";
import { LayoutGroup } from "framer-motion"
import { easeIn } from "framer-motion"
import { cubicBezier } from "framer-motion"

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
    document.documentElement.scrollTop = 0;
    // document.addEventListener('DOMContentLoaded', () => {
    //   window.scrollTo(0, 0);
    // });
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const easing = cubicBezier(.35,.17,.3,.86)

  const handleAnimate = async () => {
    console.log('handleAnimate ')
    setFired(true)
 
    await animate('#intro_image_wrapper_2', {
        clipPath: "inset(40% 0 40% 44%)",
        // transform: 'scale(0.8)',
        translateX: [0, 200 ], // Move right, then diagonally down, and finally up
        translateY: [0, 0, 100], // Move right, then diagonally down, and finally up
       
    },
    {
      ease: 'easeIn',
      duration: 1,
    })
 
   
    // await animate('#intro_image_wrapper_2', {
    //     y: -400,
    //     clipPath: "inset(40% 10% 40% 44%)",
    //     transform: "translateY(-10%)  scale(0.8)" 

    // },
    // {
    //   ease: 'easeOut',
    //   duration: 1,
    // })
    // await animate('#image_wrapper', {
    //     y: -200,
    // },
    // {
    //   ease: 'easeOut',
    //   duration: 1,
    // })
    // await animate('#intro_image_wrapper_2', {
    //     transform: 'translateY(5%) ',
    //     clipPath: "inset(40% 400 40% 44%)",
    // },
    // {
    //   ease: 'easeOut',
    //   duration: 1,
    // })
   
    // await animate('#intro_image_wrapper_2', {
    //   width: '35%',
    // },
    // {
    //   ease: 'easeInOut',
    //   duration: 1,
    // })
   
   
    // await animate('#intro_content', {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'flex-end',
    //   justifyContent: 'flex-end',
    //   position: 'relative',
    //   bottom: 0,
    // })
    // await animate('#intro_content', {
    //   bottom: 0,
    //   opacity: 1

    // }, {ease: 'easeInOut', duration: 1})

    // await animate('#intro_image_wrapper_2', {
    //   top: '40%'
    // },
    // {
    //   ease: 'easeInOut',
    //   duration: 2,
    // })
  
    //Reveal the bottom image:
    // await animate('#image_bottom', {
    //   display: 'block'
    // })

    //Change position to static so we can scroll again:
    await animate(scope.current, { 
      position: 'static',
     })
     window.scrollTo(0, 0)
    

    
    setFireAnimation(false);
  }



  


  useEffect(() => {
    console.log('useEffect')
    if (scrollY > 0.34) {
      console.log('fire animation')
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
              <div id="image_wrapper">
              </div>
            </div>
            <div id="intro_content"
            >
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
                  <div id="image_bottom">
                  </div>
                  <div id="intro_text_2">FIND</div>
              </div>
            </div>
       </div>

    </div>
  );
};

export default IntroScroll4;