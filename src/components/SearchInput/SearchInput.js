import React from "react";

import { FaSearch } from "react-icons/fa";

export default function SearchInput(props) {
  return (
    <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 cursor-pointer w-fit">
      <FaSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:outline-none focus:ring-2  pl-10"
      />
    </div>
  );
}
