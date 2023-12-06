

'use client'
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useAnimation, useAnimate, useTransform, useAnimationControls} from "framer-motion"
import { scroll } from "framer-motion"
import Image from "next/image";
import { LayoutGroup } from "framer-motion"
import { easeIn } from "framer-motion"
import { cubicBezier } from "framer-motion"

const IntroAnimation = () => {

  const [scope, animate] = useAnimate();
  const [fireAnimation, setFireAnimation] = useState(false);
  const [fired, setFired] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [position, setPosition] = useState('fixed');
  const imageControls = useAnimationControls()




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
    const times = [0, 1];

        await imageControls.start({
            clipPath: ["inset(40% 0 40% 44%)", ],
            transition: { duration: 4 }
            
        });
        animationOver();

 
   
  }

  const animationOver = () => {
    window.scrollTo(0, 0)
    setFireAnimation(false);
  }

  


  useEffect(() => {
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
    <div  className="container_2">
       <div ref={scope} id="intro_wrapper_2">
            <motion.div 
             animate={imageControls}
            id="intro_image_wrapper_2">
              <div id="image_wrapper">
              </div>
            </motion.div>
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

export default IntroAnimation;