import Data from "@data/sections/how-we-work.json";
import Link from "next/link";

const HowWeWorkSection = () => {
  return (
    <>
        {/* vision */}
        <section style={{ backgroundColor: "var(--Green-Bg, #134832)" }}>
            <div className="container" style={{ padding: '60px 120px', margin: '0 auto' }}> {/* Adjusted padding */}
                <div className="mil-background-grid mil-softened" />

                <div className="mil-center" style={{ marginBottom: '60px' }}> {/* Reduced bottom margin */}
                    <h2 className="mil-upper mil-up" dangerouslySetInnerHTML={{__html : Data.title}} style={{ color: "#FFFFFF" }} />
                    <p className="mil-suptitle mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} style={{ color: "#FFFFFF" }} />
                </div>

                <div className="row">
                    {Data.items.map((item, key) => (
                    <div className="col-lg-4 mil-up" key={`vision-item-${key}`}>

                        <div className="mil-icon-box mil-center" style={{ marginBottom: '30px', color: "#FFFFFF" }}> {/* Reduced bottom margin */}
                            <div className="mil-icon mil-icon-xl mil-icon-border mil-mb-30">
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <h4 className="mil-upper" style={{ marginBottom: '15px', color: "#FFFFFF" }}>{item.title}</h4> {/* Adjusted margin */}
                            {/* <p>{item.text}</p> */}
                        </div>

                    </div>
                    ))}
                </div>

                {/* <div className="row justify-content-center mil-center">
                    <div className="mil-center mil-up">
                        <Link href={Data.button.link} className="mil-link mil-upper" style={{ color: "#FFFFFF" }}>{Data.button.label} <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                    </div>
                </div> */}
            </div>
        </section>
        {/* vision end */}
    </>
  );
};

export default HowWeWorkSection;
