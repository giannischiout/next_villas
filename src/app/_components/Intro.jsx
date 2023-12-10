'use client';
import { LuMoveDown, LuScale } from "react-icons/lu";
import Navbar from "./Navbar";
import Lenis from '@studio-freight/lenis'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useAnimate, useAnimation, stagger } from "framer-motion";





export const IntroText = () => {
    const [scope, animate] = useAnimate();
    const [value, setValue] = useState('#e8e6de');

    let word = 'IONIAN DREAM'
    let subtitle = 'LIVE THE'
    const staggerMenuItems = stagger(0.1);
    const staggerSubtitle = stagger(0.02);


    const letterElements = word.split('').map((letter, index) => (
        <span key={index} className="new_intro_text z-50">
            {letter}
        </span>
    ));

    const split_subtitle = subtitle.split('').map((letter, index) => {
        return (
            <span key={index} className="opacity-0 live text-xl z-50">
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
        <div className="text_container">
            <div className="text-center flex flex-col leading-none mb-40" ref={scope} style={{ color: value }}>
                <span className="intro-subtitle">Villas Leukada</span>
                <div className="title">{letterElements}</div>
            </div>
            <div className="scroll_down">
                <p>Scroll Down</p>
                <LuMoveDown />
            </div>
        </div>

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



export const IntroVideo = () => {
    const [scope, animate] = useAnimate();



    const { scrollYProgress } = useScroll({
        target: targetRef,
    });


    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 0.9]);

    return (
        <div ref={targetRef} className="h-[200vh] overflow-hidden">
            <div className="sticky top-0 h-screen flex align-center justify-center overflow-hidden img-main ">
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






export default Intro;