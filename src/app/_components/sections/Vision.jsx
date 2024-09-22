import Data from "@data/sections/vision.json";
import Link from "next/link";

const VisionSection = () => {
  return (
    <>
      {/* vision */}
      <section>
        <div className="container mil-p-0-120">
          <div className="mil-background-grid mil-softened" />

          <div className="mil-center mil-mb-120">
            <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: Data.subtitle }} />
            <h2 className="mil-upper mil-up" dangerouslySetInnerHTML={{ __html: Data.title }} />
          </div>

          <div className="row mil-mb-30">
            {Data.items.map((item, key) => (
              <div className="col-lg-4 col-md-6 col-12 mil-up" key={`vision-item-${key}`}>
                <div className="mil-icon-box mil-center mil-mb-60">
                  <div className="mil-icon-xl mil-mb-30">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="img-fluid"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                  <h5 className="mil-subtitle mil-mb-15">{item.subtitle}</h5>
                  <h4 className="mil-upper mil-mb-10">{item.title}</h4>
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '20px' }}> {/* Increased bottom margin here */}
                    {item.googleScholarLink && (
                      <Link href={item.googleScholarLink} target="_blank" style={{ marginRight: '15px', display: 'flex', alignItems: 'center' }}>
                        <img src="/img/google-scholar.png" alt="Google Scholar" style={{ width: '24px', height: '24px' }} />
                        <span style={{ marginLeft: '8px' }}>Google Scholar</span>
                      </Link>
                    )}
                    {item.linkedinLink && (
                      <Link href={item.linkedinLink} target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/img/linkedin.svg" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
                        <span style={{ marginLeft: '8px' }}>LinkedIn</span>
                      </Link>
                    )}
                  </div>
                  <p style={{ marginTop: '20px' }}>{item.text}</p> {/* Increased top margin here */}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
      {/* vision end */}
    </>
  );
};

export default VisionSection;
