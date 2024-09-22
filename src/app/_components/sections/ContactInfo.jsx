import Data from "@data/sections/contact-info.json";
import Link from "next/link";

const ContactInfoSection = () => {
    return (
        <>
            {/* Contact Info Section */}
            <section>
                <div className="container mil-p-120-90">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="mil-mb-90">
                                <h2
                                    className="mil-upper mil-up mil-mb-30"
                                    dangerouslySetInnerHTML={{ __html: Data.title }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6" style={{ marginTop: "2rem" }}>
                            {Data.description2 && (
                                <div className="mil-mb-30">
                                    <p
                                        className="mil-up mil-mb-20"
                                        style={{ fontWeight: 'bold' }} // Make the paragraph text bold
                                        dangerouslySetInnerHTML={{ __html: Data.description2 }}
                                    />
                                    {Data.items && (
                                        <ul className="mil-up" style={{ paddingLeft: "20px" }}>
                                            {Data.items.map((item, index) => (
                                                <li
                                                    key={index}
                                                    style={{
                                                        marginBottom: "10px", // Add spacing between list items
                                                        listStyleType: "disc",
                                                        fontWeight: 'bold' // Make the list items bold
                                                    }}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        {Data.image3 && (
                            <div className="mil-mb-30">
                                <img
                                    src={Data.image3.url}
                                    alt={Data.image3.alt}
                                    className="img-fluid"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </div>
                        )}
                    </div>

                    <div className="row justify-content-between">
                        {/* Render image2 with sizing */}
                        <div className="col-lg-6">
                            {Data.image2 && (
                                <div className="mil-mb-30">
                                    <img
                                        src={Data.image2.url}
                                        alt={Data.image2.alt}
                                        className="img-fluid"
                                        style={{ maxWidth: '100%', height: 'auto', }}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="col-lg-6" style={{ marginTop: '5rem' }}>
                            <p
                                className="mil-mb-90"
                                style={{ fontWeight: 'bold' }}
                                dangerouslySetInnerHTML={{ __html: Data.description }}
                            />
                        </div>

                    </div>
                </div>
            </section>
            {/* Contact Info Section end */}
        </>
    );
};

export default ContactInfoSection;
