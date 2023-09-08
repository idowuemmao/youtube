import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { LuUserSquare } from "react-icons/lu";
import { RiVideoAddLine } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import Image from "next/image";
import youtube from "../images/youtube.png";

const Header = () => {
  return (
    <div className="fixed flex justify-between p-2 px-7 w-full z-50 bg-[#0f0f0f] text-white items-center">
      {/* left */}
      <div className="flex items-center cursor-pointer">
        <HiOutlineMenu className="text-3xl" />
        <Image
          src={youtube}
          alt="youtube-logo"
          width={30}
          height={30}
          className="ml-6"
        />
        <h1 className="font-extrabold text-lg">YouTube</h1>
      </div>
      {/* middle */}
      <div className="flex items-center  pr-2 h-10">
        <input
          type="text"
          placeholder="Search"
          name="search"
          className="bg-[#0f0f0f] focus:outline-2 pl-4 focus:outline-blue-700 border border-r-0 border-gray-800 rounded-l-full h-full p-1 w-72"
        />
        <AiOutlineSearch className="bg-[#222222] object-contain h-full border border-gray-800 w-16 font-light rounded-r-full p-1 cursor-pointer" />
        <MdKeyboardVoice className="bg-[#222222] w-10 p-2 h-full ml-6 rounded-full cursor-pointer hover:bg-opacity-80" />
      </div>
      {/* right */}
      <div className="flex items-center gap-8">
        <RiVideoAddLine className="icon-right" />
        <AiOutlineBell className="icon-right " />
        <LuUserSquare className="bg-[#222222] rounded-full p-3 h-10 w-10 text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
