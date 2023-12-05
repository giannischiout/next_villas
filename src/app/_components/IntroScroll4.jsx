

'use client'
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useAnimation, useAnimate, useTransform } from "framer-motion"
import { scroll } from "framer-motion"
import Image from "next/image";
import { LayoutGroup } from "framer-motion"

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

  const handleAnimate = async () => {
    console.log('handleAnimate ')
    setFired(true)
    await animate('#intro_image_wrapper_2', {
        width: 1300,
        height: 250,
        left: '50%',
        top: '50%',
        transform: 'translateY(-50%)',
    },
    {
      ease: 'easeInOut',
      duration: 1,
    })
    await animate('#intro_image_wrapper_2', {
      width: '35%',
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
      position: 'relative',
      bottom: 0,
    })
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


  const visible = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      position: 'relative',
      bottom: 0,

  }


  return (
    <div  className="container_2">
       <div ref={scope} id="intro_wrapper_2">
            <div id="intro_image_wrapper_2">
            </div>
            <LayoutGroup>
            {/* {fired && (
              <motion.div 
              initial={{display: 'none'}}
              animate={visible}
              transition={{duration: 0.5, delay: 0.6}}
              id="intro_content"
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
              </motion.div>
            
            )} */}
            <div 
            initial={{display: 'none'}}
            animate={visible}
            transition={{duration: 1, delay: 1.2}}
            id="intro_content"
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
            </LayoutGroup>
            
       </div>

    </div>
  );
};

export default IntroScroll4;