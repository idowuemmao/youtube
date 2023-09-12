/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRef, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Filter = () => {
  const list = [
    "All",
    "Gaming",
    "Music",
    "Mixes",
    "React routers",
    "Live",
    "Marital Arts Movies",
    "Belief",
    "Superhero movies",
    "JavaScript",
    "Thrillers",
    "Contemporary Worship Music",
    "Lionel Messi",
    "News",
    "Speaking in tongues",
    "Superheroes",
    "Computers",
    "Action Thrillers",
    "Film Criticisms",
    "Dramedy",
    "Comedy",
    "Presentations",
    "Action-adventure games",
    "Recently Uploaded",
    "New to You",
  ];
  const listing = list.map((item) => {
    return (
      <div
        key={item}
        className="bg-[#222222] cursor-pointer p-2 hover:bg-[#333333] transition duration-200 ease-in-out h-fit min-w-max rounded-xl text-sm"
      >
        {item}
      </div>
    );
  });

  const tabMenuRef = useRef(null);
  const btnLeftRef = useRef(null);
  const btnRightRef = useRef(null);

  const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenuRef.current.scrollLeft);
    let scrollableWidth = Math.ceil(
      tabMenuRef.current.scrollWidth - tabMenuRef.current.clientWidth
    );
    btnLeftRef.current.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRightRef.current.style.display =
      scrollableWidth > scrollLeftValue ? "block" : "none";
  };

  const handleLeftClick = () => {
    if (tabMenuRef.current) {
      tabMenuRef.current.scrollLeft -= 200;
    }
    IconVisibility();
  };

  const handleRightClick = () => {
    if (tabMenuRef.current) {
      tabMenuRef.current.scrollLeft += 200;
    }
    IconVisibility();
  };
  useEffect(() => {
    IconVisibility(); // Initial check

    if (tabMenuRef.current) {
      tabMenuRef.current.addEventListener("scroll", IconVisibility);
    }

    return () => {
      if (tabMenuRef.current) {
        tabMenuRef.current.removeEventListener("scroll", IconVisibility);
      }
    };
  }, []);

  return (
    <div className="relative top-2 text-white flex gap-2 w-4/5 h-fit">
      <button
        ref={btnLeftRef}
        onClick={handleLeftClick}
        className=" hover:bg-[#333333] cursor-pointer p-2 rounded-lg transition duration-200 ease-in-out "
      >
        <AiOutlineLeft className="text-white  text-sm " />
      </button>
      <div
        className="flex gap-3 overflow-scroll scrollbar-hide tabMenuRef transition duration-500 ease-in-out"
        ref={tabMenuRef}
      >
        {listing}
      </div>
      <button
        ref={btnRightRef}
        onClick={handleRightClick}
        className=" hover:bg-[#333333] cursor-pointer p-2 rounded-lg transition duration-200 ease-in-out "
      >
        <AiOutlineRight className="text-white  text-sm " />
      </button>
    </div>
  );
};

export default Filter;
