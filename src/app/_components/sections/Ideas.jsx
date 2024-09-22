import Data from "@data/sections/ideas.json";
import Link from "next/link";

const IdeasSection = () => {
    return (
        <>
            {/* ideas */}
            <section>
                <div className="container mil-p-0-90" style={{ marginBottom: '8rem' }}>
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between">
                        <div className="col-lg-6 col-12">
                            <div>
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: Data.subtitle }} />
                                <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: Data.title }} />
                                <ul className="mil-icon-list mil-mb-60">
                                    {Data.items.map((item, key) => (
                                        <li className="mil-hover mil-up" key={`about-three-list-item-${key}`}>
                                            <img src="/img/icons/11.svg" alt="icon" />
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="row">
                                <div className="col-md-5" style={{ margin: '1rem' }}>
                                    <img
                                        src="/img/cards/card1.svg"
                                        alt="First Card"
                                        className="mil-scale"
                                        data-value-1="1"
                                        data-value-2="1.3"
                                        style={{ width: '100%', objectFit: 'contain' }}
                                    />
                                </div>
                                <div className="col-md-5" style={{ margin: '1rem' }}>
                                    <img
                                        src="/img/cards/card2.svg"
                                        alt="Second Card"
                                        className="mil-scale"
                                        data-value-1="1"
                                        data-value-2="1.3"
                                        style={{ width: '100%', objectFit: 'contain' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ideas end */}
        </>
    );
};

export default IdeasSection;
