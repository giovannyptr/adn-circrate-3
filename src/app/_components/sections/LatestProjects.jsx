import Data from "@data/sections/latest-projects.json";
import Link from "next/link";

const LatestProjectsSection = ({ projects }) => {
  const projectRows0 = [];

  for (var i = 0; i < Data.numOfItems; i += 3) {
    projectRows0.push(projects.slice(i, 3 + i));
  }

  const projectRows = [];

  projectRows0.map((row, row_key) => {
    var row1_items = [];
    var row2_items = [];
    row.map((item, row2_key) => {
      if (row2_key < 2) {
        row1_items.push(item);
      } else {
        row2_items.push(item);
      }
    });
    projectRows.push(row1_items);
    projectRows.push(row2_items);
  });

  return (
    <>
      {/* portfolio */}
      <section style={{ background: "#F1F5EB", padding: "60px 0" }}>
        <div className="container-fluid">
          {/* Add the title at the top with spacing */}
          <div className="row">
            <div className="col-12 text-center mb-5" style={{ marginTop: "40px" }}>
              <h2
                style={{
                  color: "#134832",
                  textAlign: "center",
                  fontFamily: "Sora",
                  fontSize: "46px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "55.2px", // 120%
                  textTransform: "uppercase",
                }}
              >
                Let's Build a Greener World Together with Circrete
              </h2>
            </div>
          </div>

          <div className="row">
            {projectRows.map((row, row_key) => (
              <div className="col-md-6 col-lg-3" key={`projects-row-${row_key}`}>
                {row.map((item, key) => (
                  <Link
                    href={`/partnership`} // Changed from `/projects/${item.id}` to `/partnership`
                    key={`projects-item-${key}`}
                    className={
                      row.length == 2
                        ? "mil-portfolio-item mil-square-item mil-up mil-mb-30"
                        : "mil-portfolio-item mil-long-item mil-up mil-mb-30"
                    }
                  >
                    <img src={item.image} alt={item.title} />
                    {/* <div className="mil-project-descr">
                      <h4 className="mil-upper mil-mb-20">{item.title}</h4>
                      <div className="mil-divider-sm mil-mb-20"></div>
                      <p>{item.short}</p>
                    </div> */}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* blog end */}
    </>
  );
};

export default LatestProjectsSection;
