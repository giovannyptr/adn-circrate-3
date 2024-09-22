import Data from "@data/sections/solving.json";
import Link from "next/link";

const SolvingSection = () => {
    return (
        <>
            {/* ideas */}
            <section>
                <div className="container mil-p-0-90">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div>
                                <h2 className="mil-upper mil-up mil-mb-40" style={{ marginTop: "40px" }} dangerouslySetInnerHTML={{ __html: Data.title }} />
                                {/* Check if image exists and render it */}
                                {Data.image && (
                                    <div className="mil-mb-30" style={{ textAlign: 'center' }}>
                                        <img
                                            src={Data.image.url}
                                            alt={Data.image.alt}
                                            className="img-fluid"
                                            style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                    </div>
                                )}
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: Data.subtitle }} />

                                {/* Add littletitle and description1 below subtitle */}
                                {Data.littletitle && (
                                    <div className="mil-mb-30">
                                        <h3 dangerouslySetInnerHTML={{ __html: Data.littletitle }} />
                                        {Data.description1 && (
                                            <p className="mil-up mil-mb-60" dangerouslySetInnerHTML={{ __html: Data.description1 }} />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-lg-5 mil-mt-suptitle-offset">
                            {/* Add image2 on top of the description */}
                            {Data.image2 && (
                                <div className="mil-mb-30" style={{ textAlign: 'center' }}>
                                    <img
                                        src={Data.image2.url}
                                        alt={Data.image2.alt}
                                        className="img-fluid"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                    />
                                </div>
                            )}


                            {/* Add subtitle2 below image2 */}
                            {Data.subtitle2 && (
                                <>
                                    <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: Data.subtitle2 }} />

                                    {/* Add littletitle2 and description2 below subtitle2 */}
                                    {Data.littletitle2 && (
                                        <div className="mil-mb-30">
                                            <h3 dangerouslySetInnerHTML={{ __html: Data.littletitle2 }} />
                                            {Data.description2 && (
                                                <p className="mil-up mil-mb-60" dangerouslySetInnerHTML={{ __html: Data.description2 }} />
                                            )}
                                        </div>
                                    )}

                                    {/* Add littletitle3 and description3 below littletitle2 */}
                                    {Data.littletitle3 && (
                                        <div className="mil-mb-30">
                                            <h3 dangerouslySetInnerHTML={{ __html: Data.littletitle3 }} />
                                            {Data.description3 && (
                                                <p className="mil-up mil-mb-60" dangerouslySetInnerHTML={{ __html: Data.description3 }} />
                                            )}
                                        </div>
                                    )}
                                </>
                            )}

                            {/* Display the description */}
                            {/* <p className="mil-up mil-mb-60" dangerouslySetInnerHTML={{ __html: Data.description }} /> */}

                            {/* <div className="row">
                                {Data.items.map((item, key) => (
                                    <div className="col-sm-4" key={`ideas-item-${key}`}>
                                        <Link href={item.link} className="mil-icon-box mil-sm-center mil-mb-30">
                                            <div className="mil-icon mil-icon-accent-bg mil-up mil-mb-30">
                                                <img src={item.icon} alt="icon" />
                                            </div>
                                            <h6 className="mil-upper mil-up" dangerouslySetInnerHTML={{ __html: item.label }} />
                                        </Link>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* ideas end */}
        </>
    );
};

export default SolvingSection;
