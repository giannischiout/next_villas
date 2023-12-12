'use client'
import Hero from "./Intro2";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import VillaOne from "./VillaSection1";
import { VillaTwo } from "./VillaSection1";
import SectionSecond from "./SectionSecond";
import SectionThee from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFirst from "./SectionOne";
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
            <Hero />
            <SectionFirst />
            <VillaOne />
        <VillaTwo />
     

            {/* <VillaOne /> */}
            {/* <SectionSecond /> */}
            {/* <div className="h-[100vh] w-[100%]">

            </div> */}
            <SectionThee  />
            <SectionFour  />
            {/* <ImagesGallery /> */}
        </div>
    )
}











export default HomePage;