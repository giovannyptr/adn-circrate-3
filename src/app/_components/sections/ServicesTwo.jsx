import Data from "@data/sections/services-2.json";
import Link from "next/link";

const ServicesTwoSection = () => {
    return (
        <>
            {/* services two */}
            <section>
                <div className="container mil-p-120-60">
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
                        <div className="col-lg-6">
                            <p
                                className="mil-mb-90"
                                style={{ fontWeight: 'bold' }}
                                dangerouslySetInnerHTML={{ __html: Data.description }}
                            />
                        </div>
                    </div>

                    {/* Image below the title and description */}
                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            {/* <img src="/img/cement_process_before.png" alt="CO2 emission in cement production" className="img-fluid" /> */}
                            <img
                                src="/img/cement_process_before.png"
                                alt="CO2 emission in cement production"
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* services two end */}
        </>
    );
};

export default ServicesTwoSection;
