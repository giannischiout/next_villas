import Image from "next/image";


const SectionFour = () => {
    return (
        <div className="four_container">
            <div className="four_presticky">
                <div>
                    <div className="presticky_first">
                        <div>
                            <p className="gallery_text">IONNIAN VILLAS</p>
                            <p className="gallery_subtext">Gallery</p>
                        </div>
                    </div>
                    <div className="presticky_second">
                        <div>
                            <Image
                                src="/8.webp"
                                alt="Picture of the author"
                                fill={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="four_top_container">
                <div>
                    <div className="image_curtain"></div>
                    <div>
                        <Image
                            src="/8.webp"
                            alt="Picture of the author"
                            fill={true}
                        />
                    </div>
                </div>
            </div>
            <div className="four_top"></div>
            <div className="four_images_wrapper ">
                <div>
                    <DoubleImage />
                    <div>sefse</div>
                    <div>sefse</div>
                    <div>sefse</div>
                    <div>sefse</div>
                    <div>sefse</div>
                </div>
                <div></div>
            </div>
        </div>
    )
}



const FirstDiv = () => {
    return (
        <div></div>
    )
}

const DoubleImage = () => {
    return (
        <div className="double_image">
            <div>
                <Image
                    src="/8.webp"
                    alt="Picture of the author"
                    fill={true}
                />
            </div>
            <div>
                <Image
                    src="/8.webp"
                    alt="Picture of the author"
                    fill={true}
                />
            </div>
        </div>
    )
}

export default SectionFour;