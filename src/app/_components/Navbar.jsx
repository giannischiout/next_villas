
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
    return (
        <div className="flex align-center w-full p-6 justify-between fixed z-50">
            <div className="flex align-center justify-center">
                <div className="burger ">
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
                <div className="ml-4 flex align-center">
                    <p>Ionian Dream Villas</p>
                </div>

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
    )
}

export default Navbar