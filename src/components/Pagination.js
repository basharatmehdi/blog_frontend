import React from "react";

const Pagination = (props) => {
  const { postsPerPage, totalPosts, paginate, currentPage } = props;
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="my-5 flex items-center justify-center">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => paginate(page)}
          className={`w-8 h-8 md:w-10 md:h-10 text-center mr-2 rounded-full text-white hover:bg-[#00ac8a]/30 ${
            page === currentPage ? "bg-[#00ac8a]/30" : "bg-gray-800/30"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
