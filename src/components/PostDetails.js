import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts";

const PostDetails = () => {
  // const url = window.location.href.split("/");
  // const paramId = url[url.length - 1];
  const param = useParams();
  const postId = param.id;
  const singlePost = posts.filter((post) => post.id === parseInt(postId));
  return (
    <div className="container mx-auto text-white pt-4 mt-20 px-3 md:px-6 lg:px-12">
      <div className="">
        <h1 className="text-white">Post Details</h1>
      </div>
    </div>
  );
};

export default PostDetails;
