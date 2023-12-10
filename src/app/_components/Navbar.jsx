
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Burger from "./Burger";
const Navbar = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,

    })

    const color = useTransform(scrollYProgress, [0, 0.2], ['white', 'black']);


    return (
        <div ref={targetRef}>
            <div 
                className="navbar">
                <div className="navbar_left">
                    <Burger />
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
        </div>

    )
}

export default Navbar