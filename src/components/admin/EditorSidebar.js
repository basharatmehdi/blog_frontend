import React from "react";
import { MdPublish, MdSave } from "react-icons/md";

const categories = ["Travel", "Race", "Cars", "Technology", "News"];

const EditorSidebar = (props) => {
  return (
    <div className="py-2 ">
      <div className="flex items-center justify-between">
        <button className="flex items-center bg-[#00DF9A]/80 px-3 py-1 rounded-md">
          <MdSave size={24} />
          <span>Save</span>
        </button>
        <button className="flex items-center bg-[#00DF9A]/80 px-3 py-1 rounded-md">
          <MdPublish size={24} />
          <span>Publish</span>
        </button>
      </div>
      <div className=" mt-4 rounded-md">
        <select name="category" id="category">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default EditorSidebar;
