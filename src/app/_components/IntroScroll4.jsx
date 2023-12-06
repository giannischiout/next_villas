

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
    animate('#intro_image_wrapper_2', { opacity: 1 },
      {
        ease: 'easeIn',
        duration: 0.4,
      })
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    document.documentElement.scrollTop = 0;
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAnimate = async () => {
    console.log('handleAnimate ')
    setFired(true)
    await animate('#intro_image_wrapper_2', {
      clipPath: "inset(40% 23% 40% 40%)",
      translateX: [0, 300],
      translateY: [0, 0, 280],
    },
      {
        ease: 'easeIn',
        duration: 1,
      })




    const groupedAnimations = async () => {
      animate('#intro_content', {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        position: 'relative',
      })
      animate("#intro_image_wrapper_2", {
        // clipPath: "inset(40% 20% 40% 35%)",

      }, {
        ease: 'easeOut', duration: 0.8
      })


      animate('#intro_content', {
        bottom: 0,
        opacity: 1
      }, { ease: 'easeInOut', duration: 0.7 })

      animate("#intro_image_wrapper_2", {
        translateY: -100,
      }, {
        ease: 'easeInOut', duration: 0.7
      })
    }


    groupedAnimations()


    // Reveal the bottom image:
    await animate('#image_bottom', {
      display: 'block'
    })

    await animate(scope.current, {
      position: 'static',
    })
    window.scrollTo(0, 0)


    setFireAnimation(false);
  }






  useEffect(() => {
    console.log('useEffect')
    if (scrollY > 0.34) {
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
    <div className="container_2">
      <div ref={scope} id="intro_wrapper_2">
        <div id="intro_image_wrapper_2">
          <div id="image_wrapper">
          </div>
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
            <div id="intro_bottom_child_1">
              <div id="image_bottom">
              </div>
              <div id="intro_text_bottom">
                <span>FIND</span>
              </div>
            </div>
            <div id="intro_bottom_child_2">
                <p>TRUE PERFECTION.</p>
            </div>

          </div>
        </div>
      </div>

    </div>

  );
};

const IntroText = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate('#title', { opacity: 1 }, { ease: 'easeInOut', duration: 0.7 })
  }, [])
  return (
    <div ref={scope} >
      <p id="title">Casa de pipa</p>
    </div>
  )
}

export default IntroScroll4;