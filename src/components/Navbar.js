import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className="shadow-sm shadow-green-600 fixed top-0 w-full bg-[#000300] z-10">
        <div className="text-white items-center h-20 flex justify-between container px-4 mx-auto">
          <h1 className="w-full flex text-2xl md:text-3xl text-[#00df9a] font-bold">
            Blog
          </h1>
          <ul className="hidden md:flex uppercase font-light tracking-wide md:tracking-widest">
            <li className="p-4 hover:bg-[#00df9a] hover:ease-in-out hover:duration-500 hover:text-black hover:font-semibold rounded-md">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 hover:bg-[#00df9a] hover:ease-in-out hover:duration-500 hover:text-black hover:font-semibold rounded-md">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="p-4 hover:bg-[#00df9a] hover:ease-in-out hover:duration-500 hover:text-black hover:font-semibold rounded-md">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 hover:bg-[#00df9a] hover:ease-in-out hover:duration-500 hover:text-black hover:font-semibold rounded-md">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div onClick={handleClick} className="block md:hidden cursor-pointer">
            {!click ? <FaBars size={20} /> : <FaTimes size={20} />}
          </div>
          <div
            className={
              !click
                ? "fixed left-[-200%] ease-in-out duration-500 "
                : "fixed left-0 top-0 w-[50%] h-full bg-[#000] border-r border-green-800 ease-in-out duration-500"
            }
          >
            <h1 className="text-2xl text-[#00df9a] font-bold tracking-wider leading-10 mx-8 mt-8 border-b border-amber-500">
              Blog
            </h1>
            <ul className="uppercase font-light tracking-wide md:tracking-[100px] pt-10 px-4">
              <li className="p-4 border-b border-amber-600 hover:border-b hover:border-[#00df9a] ease-in-out">
                <Link to="/">Home</Link>
              </li>
              <li className="p-4 border-b border-amber-600 hover:border-b hover:border-[#00df9a] ease-in-out">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="p-4 border-b border-amber-600 hover:border-b hover:border-[#00df9a] ease-in-out">
                <Link to="/about">About</Link>
              </li>
              <li className="p-4 border-b border-amber-600 hover:border-b hover:border-[#00df9a] ease-in-out">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
