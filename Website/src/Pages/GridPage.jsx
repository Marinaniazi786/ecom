import React from "react";
import Frame560 from "../assets/Frame560.png";

function GridPage() {
  return (
    <>
      {/* 2 col */}


      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-6 sm:col-span-12 lg:col-span-3 h-[100px] bg-blue-500 ">5</div>
        <div className="col-span-12 md:col-span-6 sm:col-span-12 lg:col-span-3 h-[100px] bg-blue-500 ">5</div>
        <div className="col-span-12 md:col-span-6 sm:col-span-12 lg:col-span-3 h-[100px] bg-blue-500 ">5</div>
        <div className="col-span-12 md:col-span-6 sm:col-span-12 lg:col-span-3 h-[100px] bg-blue-500 ">5</div>
      
      </div>
    </>
  );
}

export default GridPage;
