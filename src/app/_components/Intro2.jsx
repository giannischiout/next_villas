
'use client'
import { motion, inView, useAnimate, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Lenis from '@studio-freight/lenis'
import Image from "next/image";
import { IntroText } from "./Intro";
const Hero = () => {
    const [image, setImage] = useState('background.webp')
    const targetRef = useRef(null);
    const [position, setPosition] = useState('sticky')
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    useEffect(() => {
        scrollYProgress.on((e) => {
            if (e > 0.9) {
                setPosition('fixed')
            } else {
                setPosition('sticky')
               
            }
        
        })
    }, [scrollYProgress])

    return (
        <div className="wrapper__2">
            <Navbar />
                <IntroText />
            <div ref={targetRef} className="sticky_container">
                <div className="sticky_inner" style={{position: position}} >
                    <motion.div
                        className="sticky_content"
                        style={{
                            scale: scale,
                          
                        }}
                    >
                        {/* <video className="w-full h-full object-cover object-bottom" autoPlay loop muted>
                            <source src="/sea.mp4" type="video/mp4" />
                        </video> */}
                       <div className="sticky_image">
                            <Image
                                src={`/${image}`}
                                fill={true}
                                quality={100}
                            />
                       </div>
                    </motion.div>
                </div>

            </div>
            {/* < PartTwo /> */}
            {/* <ImagesGallery /> */}
            
        </div>
    );
}





export default Hero;