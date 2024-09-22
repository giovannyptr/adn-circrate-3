import Link from "next/link";
import PageBanner from "@components/PageBanner";
import DiscoverSection from '../../_components/sections/Discover';

const Blog = () => {
    const categories = [
        { id: 'concrete-tech', title: 'Concrete Technology' },
        { id: 'sustainability', title: 'Sustainability' }
    ];

    const posts = [
        {
            id: "post1",
            title: "Singapore Concrete Institute Award",
            category: "Awards",
            image: "/img/ss1.png",
            link: "https://cde.nus.edu.sg/cee/news-detail/sci-excellence-award-2022-won-by-nus-team-titled-on-improving-the-productivity-and-reducing-the-carbon-footprint-for-the-upscaling-of-waste-marine-clay/",
            short: "Circrete team's solution wins Singapore Concrete Institute (SCI) Excellence Award."
        },
        {
            id: "post2",
            title: "Circrete Featured in CNA",
            category: "News",
            image: "/img/ss2.png",
            link: "https://www.youtube.com/watch?v=W1EWKanznFU",
            short: "Let's take a look at Circrete's innovation from CNA's report."
        }
    ];

    return (
        <>
            {/* Page Banner */}
            <PageBanner
                breadTitle={"Insight"}
                pageTitle={"Latest News & Insights About Cirecrete’s Green Cement"}
                bgImage={"/img/h4.png"}
            />

            {/* Blog Section */}
            <section>
                <div className="container mil-p-120-60">
                    <div className="mil-background-grid mil-softened"></div>
                    <div className="row justify-content-between">
                        <div className="col-lg-12">
                            {/* Blog Filter */}
                            <div className="mil-filter mil-up mil-mb-90">
                                <div className="mil-filter-links">
                                    <Link href="/blog" className="mil-current">All</Link>
                                    {categories.map((item, key) => (
                                        <Link key={`categories-item-${key}`} href={`/blog/category/${item.id}`}>
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Blog Entries in a Flexbox */}
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                {posts.map((post, index) => (
                                    <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', flex: '1 1 calc(50% - 20px)', marginBottom: '20px' }}>
                                        <div className="mil-blog-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px' }}>
                                            <div className="mil-cover mil-up" style={{ overflow: 'hidden' }}>
                                                <img src={post.image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                            </div>
                                            <div className="mil-description" style={{ textAlign: 'center', padding: '20px' }}>
                                                <h4 className="mil-upper mil-up" style={{ marginBottom: "10px", fontSize: "24px" }}>{post.title}</h4>
                                                <span className="mil-suptitle mil-upper mil-up" style={{ marginBottom: "10px", display: "block", color: "#007bff" }}>{post.category}</span>
                                                <p>{post.short}</p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <DiscoverSection />
            </section>
        </>
    );
};

export default Blog;
