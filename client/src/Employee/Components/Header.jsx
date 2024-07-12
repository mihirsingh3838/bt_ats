import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa"; // Import the logout icon

const Header = () => {
  return (
    <div className="flex items-center justify-between p-3">
      <div>
        <div className="md:text-2xl text-xl font-bold">Dashboard</div>
        <div className="text-xs font-normal text-gray-500">
          Welcome to Bluetown
        </div>
      </div>
      <div className="flex items-center">
        <button className="flex items-center  text-black rounded-md px-4 py-2">
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
