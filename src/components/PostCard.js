import React from "react";
import { BsHandThumbsUp, BsHandThumbsUpFill, BsEye } from "react-icons/bs";
import Button from "./Button";

const PostCard = () => {
  return (
    <div className="md:flex lg:h-[250px] md:h-[200px] mb-6 justify-between relative">
      <div className="absolute bg-emerald-500 top-1 left-1 px-3 py-[2px] rounded-lg text-sm text-black uppercase">
        category
      </div>
      <img
        src="https://res.cloudinary.com/dkas3akvg/image/upload/v1682163926/cld-sample-4.jpg"
        alt=""
        className="md:w-[40%] lg:w-[45%] lg:h-[250px] md:h-[200px] object-cover rounded-t-2xl md:rounded-r-none w-full h-[200px] md:rounded-l-2xl"
      />
      <div className="lg:px-8 px-4 py-4 border border-[#abe7e5] md:rounded-r-2xl rounded-b-2xl md: rounded-t-none md:rounded-l-none flex flex-col justify-between overflow-hidden">
        <h3 className="w-full font-semibold text-base lg:text-lg text-gray-300">
          This is the title of any post here.
        </h3>
        <p className="text-gray-400 text-sm lg:h-[38%] md:h-[38%] md:line-clamp-3 lg:line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sequi
          perspiciatis voluptatibus odit vero voluptatem vel fugiat, asperiores
          dolorem ex nostrum voluptates unde laudantium optio eius eos
        </p>
        <div className="flex items-center justify-between">
          <div className="flex text-gray-300 gap-5 items-center">
            <div className="flex flex-row md:flex-col text-center">
              <div className="flex justify-center">
                <BsHandThumbsUp size={16} />
              </div>
              <p className="text-sm flex ml-2 md:ml-0">
                100 <span className="hidden lg:block ml-1">Likes</span>
              </p>
            </div>
            <div className="flex flex-row md:flex-col text-center align-middle">
              <div className="flex justify-center">
                <BsEye size={16} />
              </div>
              <p className="text-sm flex ml-2 md:ml-0">
                1K <span className="hidden lg:block ml-1">Views</span>
              </p>
            </div>
          </div>
          <Button>Read More ...</Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
