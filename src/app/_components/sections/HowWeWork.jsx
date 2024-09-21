import Data from "@data/sections/how-we-work.json";

const HowWeWorkSection = () => {
  return (
    <>
      {/* how we work */}
      <section style={{ background: "var(--Green-Bg, #134832)", color: "#ffffff" }}>
        <div className="container mil-p-90-60">
          <div className="mil-background-grid mil-softened" />

          <div className="row">
            <div className="col-12">
              <div className="mil-center mil-mb-90">
                <h2 className="mil-upper mil-up" 
                    style={{ background: "var(--Green-Bg, #134832)", color: "#ffffff" }} 
                    dangerouslySetInnerHTML={{ __html: Data.title }} />
                <span className="mil-suptitle mil-upper mil-up mil-mb-30" 
                      style={{ background: "var(--Green-Bg, #134832)", color: "#ffffff" }} 
                      dangerouslySetInnerHTML={{ __html: Data.subtitle }} />
                <p style={{ background: "var(--Green-Bg, #134832)", color: "#ffffff" }} 
                   dangerouslySetInnerHTML={{ __html: Data.text }} />
              </div>
            </div>

            {Data.items.map((item, key) => (
              <div key={`howwework-item-${key}`} className="col-lg-4">
                <div className="mil-hww mil-icon-box mil-up mil-mb-60" 
                     style={{ background: "var(--Green-Bg, #134832)", color: "#ffffff" }}>
                  <div className="mil-icon mil-icon-border mil-mb-30">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <h4 className="mil-upper mil-mb-20" 
                      style={{ background: "var(--Green-Bg, #134832)", color: "#ffffff" }}>
                    {item.title}
                  </h4>
                  <div className="mil-divider-sm mil-mb-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* how we work end */}
    </>
  );
};

export default HowWeWorkSection;
