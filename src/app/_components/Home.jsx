'use client'
import Hero from "./Intro2";
import React, { useEffect } from "react";
import SectionSecond from "./SectionSecond";
import Lenis from "@studio-freight/lenis";
import SectionThee from "./SectionThree";
import ImagesGallery from "./ImageGallery";
import SectionFour from "./SectionFour";
const HomePage = () => {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
    return (
        <div>
            {/* <Hero /> */}
            <SectionSecond />
            <SectionThee  />
            <SectionFour  />
            {/* <ImagesGallery /> */}
        </div>
    )
}


export default HomePage;