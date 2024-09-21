import Data from "@data/sections/call-to-action.json";
import Link from "next/link";

const CallToAction = () => {
    return (
        <>
            {/* Call to Action Section */}
            <section style={{ background: "#144430" }}>
                <div className="container mil-p-0-90">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div>
                                {/* Title */}
                                <h2 
                                    className="mil-upper mil-up mil-mb-40" 
                                    style={{ marginTop: "40px", color: "white" }} 
                                    dangerouslySetInnerHTML={{ __html: Data.title }} 
                                />

                                {/* Description1 */}
                                {Data.description1 && (
                                    <div className="mil-mb-30">
                                        <p 
                                            className="mil-up mil-mb-60" 
                                            style={{ color: "white" }} 
                                            dangerouslySetInnerHTML={{ __html: Data.description1 }} 
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-lg-5 mil-mt-suptitle-offset">
                            {/* Littletitle2 and Description2 */}
                            {Data.littletitle2 && (
                                <div className="mil-mb-30">
                                    <h3 
                                        style={{ color: "var(--Green---Neon, #87C540)" }} 
                                        dangerouslySetInnerHTML={{ __html: Data.littletitle2 }} 
                                    />
                                    {Data.description2 && (
                                        <h3 
                                            className="mil-up mil-mb-60" 
                                            style={{ color: "white" }} 
                                            dangerouslySetInnerHTML={{ __html: Data.description2 }} 
                                        />
                                    )}
                                </div>
                            )}

                            {/* Littletitle3 and Description3 */}
                            {Data.littletitle3 && (
                                <div className="mil-mb-30">
                                    <h3 
                                        style={{ color: "var(--Green---Neon, #87C540)" }} 
                                        dangerouslySetInnerHTML={{ __html: Data.littletitle3 }} 
                                    />
                                    {Data.description3 && (
                                        <h3 
                                            className="mil-up mil-mb-60" 
                                            style={{ color: "white" }} 
                                            dangerouslySetInnerHTML={{ __html: Data.description3 }} 
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action End */}
        </>
    );
};

export default CallToAction;
