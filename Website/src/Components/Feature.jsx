import React from "react";
import Rectangle from "../assets/svg/Rectangle.svg";
// kk
function Feature() {
  return (
    <>
      <div>
        <div className=" col-span-6 flex space-x-4 ">
          <img src={Rectangle} alt="" />

          <h5 className="  text-red-600 mt-2 decoration-solid">Featured</h5>
        </div>
      </div>
      <div className="col-span-12 mt-6  flex row">
        <h1 className="font-semibold text-2xl ">New Arrival</h1>
      </div>

  
    </>
  );
}

export default Feature;
