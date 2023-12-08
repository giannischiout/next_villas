'use client';
import { LuMoveDown, LuScale } from "react-icons/lu";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Lenis from '@studio-freight/lenis'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useAnimate, useAnimation } from "framer-motion";


const Intro = () => {
    return (
        <>
            <Navbar />
            <div className="">
                <div className=" flex h-[60vh] flex-col items-center justify-center ">
                    <div className="h-[50%]  flex flex-col items-center justify-end"> 
                    <span className="intro-subtitle">Villas Leukada</span>
                        <div className="relative flex ">
                            <span className="intro-text z-50">IONIAN DREAM</span>
                        </div>
                        <span className="intro-para">WE ART THE WORLD POWERED BY TRADITIONS, NATURE AND INNOVATIONS. WE ART THE WORLD POWERED BY TRADITIONS, NATURE AND INNOVATION</span>
                    </div>
                    <div className="h-[50%] absolute top-[20%] flex flex-col items-center justify-end">
                        <span className="font-semibold uppercase mb-2 ">
                           start the experience
                        </span>
                        <LuMoveDown />
                    </div>
                </div>
                <IntroVideo />
                <div className="flex h-48 items-center justify-center">
                    <span className="font-semibold uppercase text-neutral-500">
                        Scroll up
                    </span>
                </div>
            </div>
        </>
    );
};



const IntroVideo = () => {
    const controls = useAnimation();
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

   
    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]); // Scaling from 1 to 2 based on scroll progress
 
    return (
        <div ref={targetRef} className="h-[300vh] ">
            <div ref={scope} className="sticky p-10 top-0 h-screen flex align-center justify-center overflow-hidden">
                <motion.div
                    id="video"
                    style={{
                    scale: scale,
                        
                    }}
                    className="w-full h-full"
                    animate={controls}
                    >
                    {/* <video className="w-full h-full object-cover object-bottom" autoPlay loop muted>
                        <source src="/sea.mp4" type="video/mp4" />
                    </video> */}
                    <Image 
                        
                        src="/jira.webp"
                        alt="Picture of the author"
                        fill={true}
                        />
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