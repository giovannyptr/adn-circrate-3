import Link from "next/link";

const LatestPostsSection = ({ paddingTop }) => {
    const posts = [
        {
            id: "post1",
            title: "Singapore Concrete Institute Award",
            category: "Awards",
            image: "/img/ss1.png",  // Update with your actual image path
            link: "https://cde.nus.edu.sg/cee/news-detail/sci-excellence-award-2022-won-by-nus-team-titled-on-improving-the-productivity-and-reducing-the-carbon-footprint-for-the-upscaling-of-waste-marine-clay/",
            short: "Circrete team's solution wins Singapore Concrete Institute (SCI) Excellence Award."
        },
        {
            id: "post2",
            title: "Circrete Featured in CNA",
            category: "News",
            image: "/img/ss2.png",  // Update with your actual image path
            link: "https://www.youtube.com/watch?v=W1EWKanznFU",
            short: "Let's take a look at Circrete's innovation from CNA's report."
        }
    ];

    return (
        <>
            {/* blog */}
            <section>
                <div className={paddingTop ? "container mil-p-120-60" : "container mil-p-0-60"}>
                    <div className="mil-background-grid mil-softened" />

                    <div className="row">
                        <div className="col-12">
                            <div className="mil-center mil-mb-90">
                                <h2 className="mil-upper mil-up mil-mb-30" style={{ marginTop: "40px" }}>News and Social Media</h2>
                            </div>
                        </div>
                        {posts.map((item, key) => (
                            <div className="col-lg-6" key={`blog-post-${key}`}>
                                <Link href={item.link} className="mil-blog-card mil-mb-60">
                                    <div className="mil-cover mil-up mil-long">
                                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="mil-description" style={{ textAlign: 'center', padding: '20px' }}>
                                        <span className="mil-suptitle mil-upper mil-up mil-mb-10">{item.category}</span>
                                        <h4 className="mil-upper mil-up mil-mb-10">{item.title}</h4>
                                        <p>{item.short}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* blog end */}
        </>
    );
};

export default LatestPostsSection;
