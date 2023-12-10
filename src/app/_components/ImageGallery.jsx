import React from 'react';
import { motion } from "framer-motion";


const ImagesGallery = () => {

    const images = [
        { scr: '1.webp' },
        { scr: '2.webp' },
        { scr: '3.webp' },
        { scr: '4.webp' },
        { scr: '5.webp' },
        { scr: '6.webp' },
        { scr: '7.webp' },
        { scr: '8.webp' },
        { scr: '9.webp' },
        { scr: '10.webp' },




    ]
    return (
        <div className="scroller">
            <motion.div className="scroller_inner">
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

export default ImagesGallery;