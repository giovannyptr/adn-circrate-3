import PaginatedBlog from '@components/PaginatedBlog';
import Pagination from '@components/Pagination';
import Link from "next/link";
import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";
import ContactForm from '../../_components/sections/ContactForm';

import { getSortedCategoriesData } from "@library/categories";
import { getPaginatedPostsData, getFeaturedPostsData } from "@library/posts";
import PopularsPostsData from "@data/sections/popular-posts.json";
import DiscoverSection from '../../_components/sections/Discover';

export const metadata = {
  title: {
    default: "Blog",
  },
  description: AppData.settings.siteDescription,
};

async function Blog() {
  const populars = await getAllPopulars();
  const categories = await getAllCategories();
  const postsData = await getAllPosts();

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
            <div className="col-lg-7">
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

              {/* Paginated Blog */}
              <PaginatedBlog items={postsData.posts} />
            </div>
            <div className="col-lg-5">
              {/* You can add sidebar or additional content here */}
            </div>

            <DiscoverSection />
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <div className="container mil-p-0-120">
        <div className="mil-background-grid mil-softened" />
        <Pagination
          currentPage={postsData.currentPage}
          totalItems={postsData.totalPosts}
          perPage={AppData.settings.perPage}
          renderPageLink={(page) => `/blog/page/${page}`}
        />
      </div>

      {/* Contact Form Section */}

    </>
  );
}

export default Blog;

async function getAllPopulars() {
  const popularsData = await getFeaturedPostsData(PopularsPostsData.featured);
  return popularsData;
}

async function getAllCategories() {
  const categoriesData = await getSortedCategoriesData();
  return categoriesData;
}

async function getAllPosts() {
  const { posts, total } = getPaginatedPostsData(AppData.settings.perPage, 1);
  return {
    posts: posts,
    totalPosts: total,
    currentPage: 1,
  };
}
