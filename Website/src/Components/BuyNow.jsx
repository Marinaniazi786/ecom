import React from "react";
import SPP from "../assets/SPP.png";

function BuyNow() {
  return (
    <div className="grid grid-cols-12 flex row bg-black ms-8 mr-4 mt-7">
      <div className="col-span-12  mt-7  xs:col-span-12  sm:col-span-12 md:col-span-7 lg:col-span-7 ">
        <div className="ml-4 text-green-400 font-semibold	">
          <h3>Categories</h3>
        </div>
        <div
          className="w-[400px] h-[120px] text-[48px] hover:underline underline-blue-400 mt-4 ml-4 text-3xl text-white font-semibold
"
        >
          <h1>Enhance Your </h1>

          <h1 className="mt-5 col-span-3">Music Experience</h1>
        </div>
        <div className=" flex col-span-3">
          <div className="rounded-[31px] w-[62px] h-[62px] bg-white ml-3">
            <div>
              <p className=" pt-2 font-semibold ml-5 p-0 m-0 w-[19px] h-[20px] text-[14px] leading-[20px]">
                23
              </p>
              <span className="ml-3.5 p-0 m-0 w-[32px] h-[18px]  text-[11px] leading-[18px]">
                Hours
              </span>
            </div>
          </div>
          <div className="rounded-[31px] w-[62px] h-[62px] bg-white ml-3">
            <div>
              <p className=" pt-2 font-semibold ml-5 p-0 m-0 w-[19px] h-[20px] text-[14px] leading-[20px]">
                05
              </p>
              <span className="ml-4 p-0 m-0 w-[32px] h-[18px]  text-[11px] leading-[18px]">
                Days
              </span>
            </div>
          </div>
          <div className="rounded-[31px] w-[62px] h-[62px] bg-white ml-3">
            <div>
              <p className=" pt-2 font-semibold ml-6 p-0 m-0 w-[19px] h-[20px] text-[14px] leading-[20px]">
                59
              </p>
              <span className="ml-3.5 p-0 m-0 w-[32px] h-[18px]  text-[11px] leading-[18px]">
                Minutes
              </span>
            </div>
          </div>
          <div className="rounded-[31px] w-[62px] h-[62px] bg-white ml-3">
            <div>
              <p className=" pt-2 font-semibold ml-6 p-0 m-0 w-[19px] h-[20px] text-[14px] leading-[20px]">
                35
              </p>
              <span className="ml-3.5 p-0 m-0 w-[32px] h-[18px]  text-[11px] leading-[18px]">
                Seconds
              </span>
            </div>
          </div>
        </div>
        <div className="ml-4 mt-6 ">
          <button
            onClick={{}}
            className=" w-[171px] h-[56px] bg-green-400 border rounded hover:border-purple-600 px-5"
          >
            {" "}
            <span className="text-white">Buy Now</span>{" "}
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 sm:col-span-12 xs:col-span-12 md:col-span-6  mt-7">
        <img src={SPP} alt="" />
      </div>
    </div>
  );
}

export default BuyNow;
