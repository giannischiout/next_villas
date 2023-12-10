import Image from "next/image";
import { useEffect } from "react";
import { useAnimation, motion, useAnimate, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LetterReveal from "./LetterReveal";

const Wrapper = () => {
    return (
        <div>
            <SectionFirst />
            <SectionSecond />
          
        </div>
    )
}

const SectionFirst = () => {
   
    return (
        <section className="description">
        <div>
            <span>Tastemakers of Understated Chic Luxury</span>
            <p>Sitting atop the curvaceous cliffs of Italy’s Amalfi Coast,
                Casa Angelina offers a sublime slice of modern minimalism on the Mediterranean, with an emphasis on barefoot luxury and top-level gastronomy.</p>
            <p>Sitting atop the curvaceous cliffs of Italy’s Amalfi Coast, Casa Angelina offers a sublime slice of modern minimalism on the Mediterranean, with an emphasis on barefoot luxury and top-level gastronomy.</p>
            <p>We work to ensure everything about your stay is true perfection, from our welcome amenities and the thoughtful turndown services to the curated dishes from our chefs and activities organized by our concierge.</p>

        </div>
    </section>
    )
}



const SectionSecond = () => {

    const [ref, inView] = useInView();
    const [scope, animate] = useAnimate()
   
   
     useEffect(() => {
       if(inView) {
        animate('.animate_movement', {
            translateY: ['20%', '0%'],
            opacity: [0.7, 1],
        }, {
            ease: 'easeInOut',
            duration: 0.9,
        
        })
        animate('.image_curtain', {
            height: ['100%', '0%'],
        }, {
            ease: 'easeInOut',
            duration: 0.8,
        
        })
       }
       
   
  }, [ inView]);


    
    return (
            <section ref={ref} className="relative" >
                <div ref={scope} className="ethos">
                <div className="ethos_intro">
                    <div>
                        <div className="image_curtain"></div>
                            <Image
                                src="/8.webp"
                                alt="Picture of the author"
                                fill={true}
                            />
                        </div>
                        <LetterReveal word="Ethos" style="ethos_intro_text" />
                </div>
                <div className="ethos_mid">
                    <p>Understand chick is our design ethos and subtle details are our mantra</p>
                </div>
                <div className="ethos_outro">
                    <div>
                        <Image
                            src="/3.webp"
                            alt="Picture of the author"
                            fill={true}
                        />
                      
                        <h3>Design</h3>
                    </div>
                    <div className="animate_movement">
                        <p className="">We ensure everything about your stay is immaculate, from the 
                            pillowy white Etro cotton sheets dressing your bed to the throughouly placed 
                            garden-grown herb garnishes on your plate.
                        </p>
                    </div>
                </div>
                </div>
            </section>
       
    )
}

export default Wrapper;