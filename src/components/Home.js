import React, { useState } from "react";
import PostCard from "./PostCard";
import SidebarHeading from "./SidebarHeading";
import SidebarPosts from "./SidebarPosts";
import SocialMedia from "./SocialMedia";
import Newsletter from "./Newsletter";
import Slider from "./Slider";
import Footer from "./Footer";
import posts from "../data/posts";
import Pagination from "./Pagination";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="lg:container mx-auto text-white pt-4 mt-20 px-6 md:px-12">
      <Slider />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          {currentPosts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
          <div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>

        <div className="md:col-span-4">
          {/*  */}
          <SidebarHeading title={"Popular Posts"} />
          {posts.slice(0, 5).map((post) => (
            <SidebarPosts key={post.title} {...post} />
          ))}

          {/* Latest Posts */}
          <SidebarHeading title={"Latest Posts"} />
          {posts.slice(0, 5).map((post) => (
            <SidebarPosts key={post.title} {...post} />
          ))}

          {/* Social Media */}
          <SidebarHeading title={"Social Media"} />
          <SocialMedia />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
