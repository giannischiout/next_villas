

'use client'
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useAnimation, useAnimate, useTransform } from "framer-motion"
import { scroll } from "framer-motion"

import Image from "next/image";
const IntroScroll2 = () => {

    const [scope, animate] = useAnimate();
    const [fireAnimation, setFireAnimation] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [position, setPosition] = useState('fixed');

    
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleAnimate = async () => {
        console.log('start')
        await animate('#image', {
            width: 700,
            height: 300,
            originX: 0,
            transition: { ease: [0.44, 0.04, 0.76, 0.83] }
        },)
        await animate('#image', { y: 20,  })
        await animate('#image', { x: -150 })
        setFireAnimation(false);
        console.log('end')
        setPosition('static')
      
        
    }

   

    useEffect(() => {
        console.log('fireAnimation', fireAnimation)
    }, [fireAnimation])

    useEffect(() => {
       
        if (scrollY > 0.56) {
            setFireAnimation(true)
            
        } else {
            setFireAnimation(false)
        }
    }, [scrollY])

    useEffect(() => {
        if(fireAnimation) {
            handleAnimate()
        }   
    }, [fireAnimation])
   


  

    return (
        <div  className="container">
            <div ref={scope}  className="animation-container" style={{position: position}}>
                <div 
                id="image" className="image-div" >
                </div>
            </div>
        </div>
    );
};

export default IntroScroll2;