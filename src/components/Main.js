import React from "react";
import VidData from "./VidData";
import ReactPlayer from "react-player";
const Main = () => {
  // console.log(VidData);
  const vidElement = VidData.map((vid) => {
    <div key={vid.id} className=" text-white border-4 border-white">
      <h2 className="text-white text-2xl">{vid.author}</h2>
      {/* <ReactPlayer controls={true} url={vid.vid} width={200} height={500} /> */}
    </div>;
  });
  return <div className="top-32 z-50">{vidElement}</div>;
};

export default Main;
