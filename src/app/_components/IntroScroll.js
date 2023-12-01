

'use client'
import { useState, useEffect, useRef } from "react";
import { motion, useScroll,useAnimation } from "framer-motion"

import Image from "next/image";
import styles from '../_styles/ScrollingAnimation.module.css'
const IntroScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const [position, setPosition] = useState('sticky')
    const { scrollYProgress } = useScroll();
    const [scrollY, setScrollY] = useState(0);
    const controls = useAnimation();
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleMoveToLeft = async () => {
        await controls.start({
          x: -300,
          transition: { duration: 0.5, ease: 'easeInOut' },
        });
        // setAnimationCompleted(true); // Set animation completion state to true
      };

      useEffect(() => {
            console.log('animation completed')
            console.log(animationCompleted)
      }, [animationCompleted])
    useEffect(() => {
        console.log('scrollY')
        console.log(scrollY)

        if(scrollY === 130 ) {
            setPosition('relative')
            setAnimationCompleted(prev => !prev)
        }
      if (scrollY > 0) {
        controls.start({ 
            width: '700px', 
            height: '400px',
            originX: 1,
            transition: { duration: 1, ease: [0.44, 0.04, 0.76, 0.83] }, // Adjust the easing here
            onAnimationComplete: () => handleMoveToLeft(),


        });
      } else {
        controls.start({ 
            width: '100vw', 
            height: '100vh', 
            originX: 1,
            transition: { duration: 1, ease: [0.44, 0.04, 0.76, 0.83] }, // Adjust the easing here
            onAnimationComplete: () => handleMoveToLeft(),


        });
      }
    }, [scrollY, controls])
    useEffect(() => {
        console.log(scrollYProgress)
    }, [scrollPosition]);
    return (
        <div>
            <div className="animation-container"  
             style={
                !animationCompleted ? {position: 'sticky', top: '0'} : {position: 'static'} }  
           >
            <motion.div
      className="image-div"
  
      animate={controls}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
    </motion.div>
            </div>
            <div className="test">
                sefsefsf
            </div>
        </div>
    );
};

export default IntroScroll;