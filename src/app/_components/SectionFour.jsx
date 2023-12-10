import Image from "next/image";


const SectionFour = () => {
    return (
        <div className="four_container">
            <div className="four_grid_container">
                <div className=" four_intro_grid">
                       {/* GRID 1 */}
                    <div>
                    </div>
                    {/* GRID 2 */}
                    <div>
                        <div className="four_small_image">
                            <Image src="/8.webp" alt="Picture of the author" fill={true} />
                        </div>
                    </div>
                     {/* GRID 3 */}
                    <div>
                        <div className="four_large_image">
                            <Image src="/8.webp" alt="Picture of the author" fill={true} />
                        </div>
                    </div>
                    {/* FOURTH PART */}
                    <div>
                        <h5>Harmony</h5>
                        <p>a collection of exquisite villas nestled in the enchanting
                            landscape of Lefkada. Offering a harmonious blend of modern luxury and serene natural beauty,
                            these villas epitomize elegance and comfort. Each villa boasts breathtaking views of the azure Ionian Sea,
                            inviting you to unwind in a private haven of tranquility. Immerse yourself in the island's rich
                            culture and explore nearby beaches with crystal-clear waters. Indulge in the ultimate getaway experience,
                            where every moment is a celebration of relaxation and sophistication</p>
                    </div>
                    {/* <div>
                    <div className="presticky_first">
                        <div>
                            <p className="gallery_text">Gallery</p>
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
                </div> */}
                </div>
            </div>

            {/* <div className="four_top_container">
                <div>
                    <div>
                        <Image
                            src="/8.webp"
                            alt="Picture of the author"
                            fill={true}
                        />
                    </div>
                </div>
            </div> */}
            <div className="four_top"></div>

            {/* IMAGES */}
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