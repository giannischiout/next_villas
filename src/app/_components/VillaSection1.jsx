import { useAnimate} from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const VillaOne = () => {
    return (
        <div className="villa_section">
            <div className="villa_width">
                <div className="row_one">
                    <div className="row_one_image">
                        <Image
                            src="/8.webp"
                            alt="Picture of the first villa"
                            fill={true}
                        />
                        <h2>Ethos</h2>
                    </div>
                  
                </div>
                <div className="traslated_container">
                <div className="row_two">
                    <p>Understand chick is our design ethos and subtle details are our mantra</p>
                </div>
                <div className="row_three">
                    <div className="row_three_image">
                        <Image
                            src="/3.webp"
                            alt="Picture of the second villa"
                            fill={true}
                        />
                    </div>
                    <div className="row_three_content">
                        <p >We ensure everything about your stay is immaculate, from the
                            pillowy white Etro cotton sheets dressing your bed to the throughouly placed
                            garden-grown herb garnishes on your plate.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
// export const VillaTwo = () => {
//     return (
//         <div className="villa_two_container ">
//             <div className="villa_two_width">
//                 <div className="villa_two_row_one ">
//                     <div className="row_one_image  ">
//                         <Image
//                             src="/8.webp"
//                             alt="Picture of the first villa"
//                             fill={true}
//                         />
                        
//                     </div>
//                     <h2 className="villa_name">Ethos</h2>
//                 </div>
//                 <div className="traslated_container">
//                 <div className="row_two">
//                     <p>Understand chick is our design ethos and subtle details are our mantra</p>
//                 </div>
//                 <div className="row_three">
//                     <div className="row_three_image">
//                         <Image
//                             src="/3.webp"
//                             alt="Picture of the second villa"
//                             fill={true}
//                         />
//                     </div>
//                     <div className="row_three_content">
//                         <p >We ensure everything about your stay is immaculate, from the
//                             pillowy white Etro cotton sheets dressing your bed to the throughouly placed
//                             garden-grown herb garnishes on your plate.
//                         </p>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export const VillaTwo = () => {
    const [scope, animate] = useAnimate()
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    useEffect(() => {
        if(inView) {
            animate(scope.current, {
                opacity: [0, 1],
               
            }, {
                duration: 1,
                ease: "easeInOut"
            })
        }
      
    }, [inView])
    return (
        <div ref={ref} className="villa_two_container">
           <div ref={scope} id={'business_name'}>
           IONIAN VILLAS
           </div>
        </div>
    )
}



export default VillaOne;