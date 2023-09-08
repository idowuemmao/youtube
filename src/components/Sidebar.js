import React from "react";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import {
  MdOutlineSubscriptions,
  MdOutlineHistory,
  MdOutlineWatchLater,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { HiOutlineScissors } from "react-icons/hi";
import { RiVideoLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sidebar relative top-14">
      <div className="icon-div">
        <BiSolidHomeAlt2 className="icon" />
        <h6 className="text">Home</h6>
      </div>
      <div className="icon-div">
        <RiVideoLine className="icon" />
        <h6 className="text">Shorts</h6>
      </div>
      <div className="icon-div">
        <MdOutlineSubscriptions className="icon" />
        <h6 className="text">Subscriptions</h6>
      </div>
      <div className=" icon-div min-[1500px]:hidden">
        <MdOutlineVideoLibrary className="icon" />
        <h6 className="text">Library</h6>
      </div>
      <hr className="line " />
      <div className="hidden min-[1500px]:grid">
        <div className="icon-div">
          <MdOutlineVideoLibrary className="icon" />
          <h6 className="text">Library</h6>
        </div>
        <div className="icon-div">
          <MdOutlineHistory className="icon" />
          <h6 className="text">History</h6>
        </div>
        <div className="icon-div">
          <RiVideoLine className="icon" />
          <h6 className="text">Your videos</h6>
        </div>
        <div className="icon-div">
          <MdOutlineWatchLater className="icon" />
          <h6 className="text">Watch later</h6>
        </div>
        <div className="icon-div">
          <HiOutlineScissors className="icon" />
          <h6 className="text">Your clips</h6>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
