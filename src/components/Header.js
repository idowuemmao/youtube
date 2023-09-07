import React from "react";
import { HiOutlineSearch, HiOutlineMenu } from "react-icons/hi";
import { LuUserSquare } from "react-icons/lu";
import { MdOutlineKeyboardVoice } from "react-icons/md";

import { PiDotsThreeVerticalBold, PiDotsSixVerticalBold } from "react-icons/pi";

const Header = () => {
  return (
    <div className="flex justify-between p-2 border-b-2 border-gray-400 bg-gray-950 text-white items-center">
      {/* left */}
      <div className="flex gap-2 items-center">
        <HiOutlineMenu />
        <h1 className="font-extrabold">YouTube</h1>
      </div>
      {/* middle */}
      <div className="flex items-center gap-2  pr-2 h-8">
        <input
          type="text"
          placeholder="Search"
          name="search"
          className="bg-black focus:outline-2 focus:outline-blue-700 focus:border-none  p-1 w-96"
        />
        <HiOutlineSearch className="bg-gray-600 object-contain h-full w-6 p-1" />
        <MdOutlineKeyboardVoice className="bg-black rounded-full" />
      </div>
      {/* right */}
      <div className="flex">
        <PiDotsSixVerticalBold />
        <PiDotsThreeVerticalBold />
        <LuUserSquare />
      </div>
    </div>
  );
};

export default Header;
