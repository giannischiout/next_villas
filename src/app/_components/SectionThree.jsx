
import Image from "next/image"
import LetterReveal from "./LetterReveal"
import { BsArrowRight } from "react-icons/bs";
import { useRef, useEffect, useState } from "react";
import { useAnimation, motion, useAnimate, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionThee = () => {
  return (
    <div className="three_container ">
      {/* <div className="flex h-[10vh] items-center justify-center">

      </div> */}
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"], {

  });

  useEffect(() => {
    console.log('x')
      console.log(x.get)
  }, [x])
  return (

    <section ref={targetRef} className="relative h-[300vh]  flex align-center justify-center villas_wrapper z-50">
      <div className="three_sticky">
        <motion.div style={{ x }} className="flex motion_villas">
          <IntroBox />
          <VillaBox image={"10.webp"} />
          <VillaBox image={"3.webp"} />
          <VillaBox image={"4.webp"} />
        </motion.div>
      </div>
     
    </section>
  );
};




const VillasPresentaion = () => {}
const VillaBox = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView();
  const [scope, animate] = useAnimate()

  const handleHover = () => {
    setIsHovered(true);
  
  }

  
  useEffect(() => {
    if (inView) {
    
      animate('.villas_curtain', {
        width: ['100%', '0%'],
      }, {
        ease: 'anticipate',
        duration: 0.8,

      })
    }


  }, [inView]);

  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <div onClick={handleClick} ref={scope} className="relative ">
      <div className="villas_curtain"></div>
      <div 
  
        ref={ref} className="villa_box_container"
      >
        <Image
        onClick={handleClick}
          src={`/${image}`}
          fill={true}
        />
        <div className="villa_box_title ">
          <p  onClick={handleClick}>
      
            JIRA   
          </p>
        </div>
      </div>
    </div>

  )
}


const IntroBox = () => {
  return (
    <div className="intro_box">

      <div>
        
        <p className="intro_box_header">Take a moment to explore our Villas</p>
        <p className="intro_box_para">We ensure everything about your stay is immaculate, from the pillowy white Etro cotton
          sheets dressing your bed to the throughouly placed garden-grown herb garnishes on your plate.
        </p>
        <div className="intro_box_pointer">
          <p>EXPLORE</p>
          <BsArrowRight className="arrow_right" />

        </div>
      </div>

    </div>
  )
}

const LastAnimation = () => {
  return (
    <div  className="h-[500vh] bg-red-400 ">
        <div className="sticky top-0">
          <div className="absolute">
            <Image
              src="/3.webp"
              fill={true}
            />
          </div>
        </div>
    </div>
  )
}

export default SectionThee;