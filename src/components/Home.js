import React from "react";
import PostCard from "./PostCard";
import Popular from "./Popular";
import SidebarHeading from "./SidebarHeading";

const Home = () => {
  return (
    <div className="container mx-auto text-white pt-4 mt-20">
      <div className="container mx-auto px-4 md:px-6 h-screen">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
          <div className="md:col-span-4">
            <SidebarHeading />
            <Popular />
            <Popular />
            <Popular />
            <Popular />
            <Popular />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
