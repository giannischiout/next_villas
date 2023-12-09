
'use client'
import { motion, inView, useAnimate, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
const Intro2 = () => {
    return (
        <div className="wrapper__2">
            <Navbar />
            <div className="random-1">
                <div className="intro_content">
                    <h1>THIS IS THE HEADER</h1>
                    <h2>THIS IS THE HEADER</h2>
                </div>
            </div>
            <div className="sticky-div">
                <div className="sticky-inner">
                    bbbbbbbbbbbbbbbbb
                </div>
            </div>

            <div className="part_two h-[100vh]"></div>
                
            <ImagesGallery />
                <div>
                    sefseseseseffse
                </div>
            <div className="part_four"></div>
        </div>
    );
}



// const RoundPart = ({children, style, bgColor}) => {
//     const roundDiv = useRef(null)
//     const [scope, animate] = useAnimate()
//     const {scrollYProgress} = useScroll({
//         target:  roundDiv,
//     })

//     useEffect(() => {
//         inView("#inner_round_div", (e) => {
            
//            let animation = animate('#inner_round_div', {
//                 borderTopLeftRadius: ['50%', '0'],
//                 borderTopRightRadius: ['50%',  '0'],
//                 width: '100%',
//                 height: '100%',
//                 top: [-130, 0],
//             }, {
//                 ease: 'easeInOut',
//                 duration: 0.5,
//             })
//             return (leaveInfo) => animation.stop()

//           })

//     }, [scrollYProgress])

//     return (
//         <div ref={scope} className={`${style} round_container` } style={{backgroundColor: bgColor}}>
//             <motion.div ref={roundDiv} id="inner_round_div" className={`inner_round`} style={{backgroundColor: bgColor}}>
//                 {children}
//             </motion.div>
//         </div>
//     )
// }





const ImagesGallery = () => {
   

    const images = [
        {scr: '1.webp'},
        {scr: '2.webp'},
        {scr: '3.webp'},
        {scr: '4.webp'},
        {scr: '5.webp'},
        {scr: '6.webp'},
        {scr: '7.webp'},
        {scr: '8.webp'},
        {scr: '9.webp'},
        {scr: '10.webp'},
       

        
        
    ]
    return (
        <div  className="scroller">
            <motion.div  className="scroller_inner">
            {images.map((image, index) => {
                return (
                    <div key={index} className="scroller_gallery">
                        <img src={`${image.scr}`} alt="" />
                    </div>
                )
            })}
            </motion.div>
          
        </div>
    )
}
export default Intro2;