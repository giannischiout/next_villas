'use client';
import { LuMoveDown } from "react-icons/lu";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";


const Intro = () => {
    return (
        <div className="h-[400vh]">
            <Navbar />
            <div className="h-[60vh] flex align-center justify-center">
                <div className="flex align-center justify-center flex-col">
                    <p>start the experience</p>
                    <LuMoveDown />
                </div>
            </div>
            <div className="flex align-center justify-center">
                <div className="w-[70%] ">
                    <video className="w-full h-[65vh] object-cover object-bottom" autoPlay loop muted>
                        <source src="/sea.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}


const Navbar = () => {
    return (
        <div className="flex align-center w-full p-6 justify-between fixed">
            <div className="flex align-center justify-center">
                <div className="burger">
                    <RxHamburgerMenu />
                </div>
                <div className="ml-4 flex align-center">
                    <p>Ionian Dream Villas</p>
                </div>

            </div>
            <div className="grid gap-3 grid-cols-3 ">
                <div className="nav-icon">
                <GrFacebookOption  />
                </div>
                <div className="nav-icon">
                <AiFillInstagram />
                </div>
                <div className="nav-icon">
                <FaEnvelope  />
                </div>
            </div>
        </div>
    )
}



export default Intro;