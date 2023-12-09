'use client';
import { LuMoveDown, LuScale } from "react-icons/lu";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Lenis from '@studio-freight/lenis'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useAnimate, useAnimation ,  stagger} from "framer-motion";





const IntroText2 = () => {
    const [scope, animate] = useAnimate();
    const [value, setValue] = useState('#e8e6de');

    let word = 'IONIAN DREAM'
    let subtitle = 'LIVE THE'
    const staggerMenuItems = stagger(0.1);
    const staggerSubtitle = stagger(0.02);

   
    const letterElements = word.split('').map((letter, index) => (
        <span  key={index} className="new_intro_text z-50">
          {letter}
        </span>
      ));

      const split_subtitle = subtitle.split('').map((letter, index) => {
        return (
            <span key={index} className="opacity-0 live text-8xl z-50">
                {letter}
            </span>
        )
      })


      useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])


    useEffect(() => {
        handleAnimate();
    }, [])


    const handleAnimate = async () => {
       
        await animate('span', {
            opacity: [0, 1],
        })
        await animate('.new_intro_text', {
            color: '#6E6259',
        }, {
            ease: 'easeInOut',
            duration: 0.5,
            delay: staggerMenuItems
        })
    }
    return (
       <>   

         <div className="text-center" ref={scope} style={{color: value}}>
         <span className="opacity-0 intro-subtitle">Villas Leukada</span>
         {/* <p id="live" className="text-8xl">LIVE THE</p> */}
         {split_subtitle}
         <div className="h-1 w-50" >
         </div>
            {letterElements}
        </div>
       </>
    )
}



const Intro = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])



    return (
        <>
            <Navbar />
            <div className="">
                <div className=" flex h-[60vh] flex-col items-center justify-center ">
                    <div className="h-[50%]  flex flex-col items-center justify-end">
                      
                        <div className="relative flex ">
                            {/* <span className="intro-text z-50">IONIAN DREAM</span> */}
                            <IntroText2 />
                        </div>
                        <span className="opacity-0 intro-para">WE ART THE WORLD POWERED BY TRADITIONS, NATURE AND INNOVATIONS. WE ART THE WORLD POWERED BY TRADITIONS, NATURE AND INNOVATION</span>
                    </div>
                    <div className="h-[50%] absolute top-0 flex flex-col items-center justify-end">
                        <span className="font-semibold uppercase mb-2 ">
                            start the experience
                        </span>
                        <LuMoveDown />
                    </div>
                </div>
                    <IntroVideo />
                {/* <div className="flex h-48 items-center justify-center">
                    <span className="font-semibold uppercase text-neutral-500">
                        Scroll up
                    </span>
                </div> */}
            </div>
        </>
    );
};



const IntroVideo = () => {
    const [scope, animate] = useAnimate();

    const targetRef = useRef(null);
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });


    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 0.9]); 

    return (
        <div ref={targetRef} className="h-[200vh]  ">
            <div ref={scope} className="sticky top-4 h-screen flex align-center justify-center overflow-hidden img-main ">
                <motion.div
                    id="video"
                    style={{
                        scale: scale,
                    }}
                    
                    className="w-full h-full "
                >
                    <video className="w-full h-full object-cover object-bottom" autoPlay loop muted>
                        <source src="/sea.mp4" type="video/mp4" />
                    </video>
                </motion.div>
            </div>
            
            
        </div>
    )
}


const Navbar = () => {
    return (
        <div className="flex align-center w-full p-6 justify-between fixed z-50">
            <div className="flex align-center justify-center">
                <div className="burger ">
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
                <div className="ml-4 flex align-center">
                    <p>Ionian Dream Villas</p>
                </div>

            </div>
            <div className="grid gap-3 grid-cols-3 ">
                <div className="nav-icon ">
                    <GrFacebookOption />
                </div>
                <div className="nav-icon">
                    <AiFillInstagram />
                </div>
                <div className="nav-icon ">
                    <FaEnvelope />
                </div>
            </div>
        </div>
    )
}



export default Intro;