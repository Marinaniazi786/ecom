import React from "react";
import PS5 from "../assets/PS5.png";
import AWW from "../assets/AWW.png";
import WIRELESS from "../assets/WIRELESS.png";
import PERFUME from "../assets/PERFUME.png";

function FeatureImages() {
  return (
    <div className="grid grid-cols-12  mt-7 flex">
      <div className="col-span-6 h-[600px] bg-blue-300 ">
      <div
        className="   mt-5  ml-7 bg-cover bg-center bg-black  h-[560px] flex items-center justify-center"
        style={{ backgroundImage: `url(${PS5})` }}
      >
        <div className=" mr-auto ml-7 mt-auto pb-9 ">
          <h1 className=" 	 mt-6 text-white text-3xl">PlayStation 5</h1>

          <h5 className="mt-7 text-white text normal ">
            Black and White version of the PS5 <br /> coming out on sale.
          </h5>
          <div className="">
            <button
              onClick={{}}
              className=" w-[130px] h-[37px] bg-black  hover:border-white px-5 ml-7 mt-4"
            >
              {" "}
              <span className="text-white underline underline-offset-8">
                Shop Now
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
      </div>

      <div className="  col-span-6  ml-6 h-[600px] bg-green-300">
        <div className=" grid grid-cols-12 mt-5 flex row ">
          <div className=" h-[280px] place-content-center  col-span-6   bg-black text-white">
            <h1 className=" mt-7 font-semibold ml-7">Women’s Collections</h1>
            <br />
            <h5 className="font-normal ml-7">
              Featured woman collections that <br />
              give you another vibe.
            </h5>
            <div className="">
              <button
                onClick={{}}
                className=" w-[130px] h-[37px] bg-black border hover:border-white px-5 ml-7 mt-4"
              >
                {" "}
                <span className="text-white underline underline-offset-8">
                  Shop Now
                </span>{" "}
              </button>
            </div>
          </div>
          <div className="col-span-6 ">
            <img className="h-[280px]" src={AWW} alt="" />
          </div>
          <div className="col-span-6 p-4  mt-6 bg-black h-[257px]">
            <div
              className=" bg-black    bg-center bg-contain bg-no-repeat h-[230px]   "
              style={{ backgroundImage: `url(${WIRELESS})` }}
            >
             <div className="bg-red-300 ">
              </div> 
            
          </div>
          </div>

          <div className="col-span-6 bg-black ml-4 mt-7">
            <div className=" mt-5 flex justify-center">
            {/* style={{ backgroundImage: `url(${PERFUME})` }} */}
              <img src={PERFUME} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureImages;
