import Image from "next/image";
const SectionSecond = () => {
    return (
        <div>
            <section className="description">
                <div>
                    <span>Tastemakers of Understated Chic Luxury</span>
                    <p>Sitting atop the curvaceous cliffs of Italy’s Amalfi Coast,
                        Casa Angelina offers a sublime slice of modern minimalism on the Mediterranean, with an emphasis on barefoot luxury and top-level gastronomy.</p>
                    <p>Sitting atop the curvaceous cliffs of Italy’s Amalfi Coast, Casa Angelina offers a sublime slice of modern minimalism on the Mediterranean, with an emphasis on barefoot luxury and top-level gastronomy.</p>
                    <p>We work to ensure everything about your stay is true perfection, from our welcome amenities and the thoughtful turndown services to the curated dishes from our chefs and activities organized by our concierge.</p>

                </div>
            </section>
            <section className="ethos">
                <div className="ethos_intro">
                    <div>
                        <Image
                            src="/villa.jpg"
                            alt="Picture of the author"
                            fill={true}
                        />
                        <h3>Ethos</h3>
                    </div>
                </div>
                <div className="ethos_mid">
                    <p>Understand chick is our design ethos and subtle details are our mantra</p>
                </div>
                <div className="ethos_outro">
                    <div></div>
                    <div>
                        <p>We ensure everything about your stay is immaculate, from the 
                            pillowy white Etro cotton sheets dressing your bed to the throughouly placed 
                            garden-grown herb garnishes on your plate.
                        </p>
                    </div>
                </div>
            </section>
            <div className="whitespace"></div>
        </div>
    )
}

export default SectionSecond;