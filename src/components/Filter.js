import React from "react";

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
        className="bg-[#222222] p-2 h-fit min-w-max rounded-xl text-sm"
      >
        {item}
      </div>
    );
  });
  return (
    <div className="relative top-2 text-white flex gap-3 overflow-hidden">
      {listing}
    </div>
  );
};

export default Filter;

// const tabMenuRef = useRef(null);
//   const btnLeftRef = useRef(null);
//   const btnRightRef = useRef(null);

//   const IconVisibility = () => {
//     let scrollLeftValue = Math.ceil(tabMenuRef.current.scrollLeft);
//     let scrollableWidth = Math.ceil(
//       tabMenuRef.current.scrollWidth - tabMenuRef.current.clientWidth
//     );
//     btnLeftRef.current.style.display = scrollLeftValue > 0 ? "block" : "none";
//     btnRightRef.current.style.display =
//       scrollableWidth > scrollLeftValue ? "block" : "none";
//   };

//   const handleLeftClick = () => {
//     if (tabMenuRef.current) {
//       tabMenuRef.current.scrollLeft -= 100;
//     }
//     IconVisibility();
//   };

//   const handleRightClick = () => {
//     if (tabMenuRef.current) {
//       tabMenuRef.current.scrollLeft += 100;
//     }
//     IconVisibility();
//   };
//   useEffect(() => {
//     IconVisibility(); // Initial check

//     if (tabMenuRef.current) {
//       tabMenuRef.current.addEventListener("scroll", IconVisibility);
//     }

//     return () => {
//       if (tabMenuRef.current) {
//         tabMenuRef.current.removeEventListener("scroll", IconVisibility);
//       }
//     };
//   }, []);
