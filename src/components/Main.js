import React from "react";
import VidData from "./VidData";
import Image from "next/image";

const Main = () => {
  const vidElement = VidData.map((vid) => {
    return (
      <div key={vid.id}>
        <Image src={vid.vid} alt="img" className="w-44" />
        <div>
          
        </div>
      </div>
    );
  });
  return <div className="flex flex-wrap w-full gap-8">{vidElement}</div>;
};

export default Main;
