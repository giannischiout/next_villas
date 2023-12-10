
import Image from "next/image"
import LetterReveal from "./LetterReveal"
import { BsArrowRight } from "react-icons/bs";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const SectionThee = () => {
  return (
    <div className="three_container">
      <div className="flex  h-[10vh] items-center justify-center">
        
      </div>
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
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"], {
  
  
  });

  return (
 
     <section ref={targetRef} className="relative h-[300vh]  flex align-center justify-center villas_wrapper">
     <div className="sticky top-0 flex h-screen items-center overflow-hidden   ">
       <motion.div style={{ x }} className="flex gap-4 motion_villas">
          <IntroBox />
          <VillaBox image={"10.webp"} />
          <VillaBox image={"3.webp"}/>
          <VillaBox  image={"4.webp"}/>
       </motion.div>
     </div>
   </section>
  );
};






const VillaBox  = ({image}) => {
    return (
   <div className="villa_box_container">
            <Image 
                src={`/${image}`}
                fill={true}
            />
        </div>
     
    )
}


const IntroBox = () => {
    return (
      <div className="intro_box">
        <div>
        <p className="intro_box_header">Take a moment to explore our Villas</p>
      <p className="">We ensure everything about your stay is immaculate, from the pillowy white Etro cotton sheets dressing your bed to the throughouly placed garden-grown herb garnishes on your plate.</p>
        </div>
   
      </div>
    )
}


const Button = () => {
  return (
    <div>

    </div>
  )
}

export default SectionThee;