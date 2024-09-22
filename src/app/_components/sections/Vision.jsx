import Data from "@data/sections/vision.json";
import Link from "next/link";

const VisionSection = () => {
  return (
    <>
      {/* vision */}
      <section>
        <div className="container mil-p-0-120">
          <div className="mil-background-grid mil-softened" />

          <div className="mil-center mil-mb-60"> {/* Reduced margin bottom from 120px to 60px */}
            <span className="mil-suptitle mil-upper mil-up mil-mb-15" dangerouslySetInnerHTML={{ __html: Data.subtitle }} /> {/* Reduced margin bottom from 30px to 15px */}
            <h2 className="mil-upper mil-up" dangerouslySetInnerHTML={{ __html: Data.title }} />
          </div>

          <div className="row mil-mb-15"> {/* Reduced margin bottom from 30px to 15px for the row */}
            {Data.items.map((item, key) => (
              <div className="col-lg-4 col-md-6 col-12 mil-up" key={`vision-item-${key}`}>
                <div className="mil-icon-box mil-center mil-mb-30"> {/* Reduced margin bottom from 60px to 30px for each icon box */}
                  <div className="mil-icon-xl mil-mb-15"> {/* Reduced margin bottom from 30px to 15px for the icon */}
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="img-fluid"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        width: '380px',  // Set the width to 380px
                        height: '380px', // Set the height to 380px
                        objectFit: 'cover', // Crops the image to fill the 380x380px area
                      }}
                    />
                  </div>
                  <h5 className="mil-subtitle mil-mb-10">{item.subtitle}</h5> {/* Reduced margin bottom from 15px to 10px */}
                  <h4 className="mil-upper mil-mb-5">{item.title}</h4> {/* Reduced margin bottom from 10px to 5px */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '10px' }}> {/* Reduced margin top and bottom */}
                    {item.googleScholarLink && (
                      <Link href={item.googleScholarLink} target="_blank" style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
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
                  <p style={{ marginTop: '5px' }}>{item.text}</p> {/* Reduced top margin */}
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
