import Data from "@data/sections/contact-info.json";
import Link from "next/link";

const ContactInfoSection = () => {
    return (
        <>
            {/* Contact Info Section */}
            <section>
                <div className="container mil-p-0-90">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div>
                                <h2
                                    className="mil-upper mil-up mil-mb-40"
                                    style={{ marginTop: "40px" }}
                                    dangerouslySetInnerHTML={{ __html: Data.title }}
                                />

                                {/* Render image1 with sizing */}
                                {Data.image && (
                                    <div className="mil-mb-30">
                                        <img
                                            src={Data.image.url}
                                            alt={Data.image.alt}
                                            className="img-fluid"
                                            style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }}
                                        />
                                    </div>
                                )}

                                {/* Render littletitle and description1 */}
                                {Data.littletitle && (
                                    <div className="mil-mb-30">
                                        <h3 dangerouslySetInnerHTML={{ __html: Data.littletitle }} />
                                        {Data.description1 && (
                                            <p
                                                className="mil-up mil-mb-60"
                                                dangerouslySetInnerHTML={{ __html: Data.description1 }}
                                            />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-lg-5 mil-mt-suptitle-offset">
                            {/* Render description2 with ul and li items */}
                            {Data.description2 && (
                                <div className="mil-mb-30">
                                    <p
                                        className="mil-up mil-mb-20" /* Reduced margin for better spacing */
                                        dangerouslySetInnerHTML={{ __html: Data.description2 }}
                                    />

                                    {/* Render list items with padding and spacing */}
                                    {Data.items && (
                                        <ul className="mil-up" style={{ paddingLeft: "20px", marginTop: "10px" }}>
                                            {Data.items.map((item, index) => (
                                                <li
                                                    key={index}
                                                    style={{
                                                        marginBottom: "10px", /* Add spacing between list items */
                                                        listStyleType: "disc"
                                                    }}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}

                            {/* Render image2 with sizing */}
                            {Data.image2 && (
                                <div className="mil-mb-30">
                                    <img
                                        src={Data.image2.url}
                                        alt={Data.image2.alt}
                                        className="img-fluid"
                                        style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Info Section end */}
        </>
    );
};

export default ContactInfoSection;
