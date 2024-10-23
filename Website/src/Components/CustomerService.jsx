import React from "react";
import CustomerServ from "../assets/svg/CustomerServ.svg";
import Delivery from "../assets/svg/Delivery.svg";
import Headphone from "../assets/svg/Headphone.svg";
import Guarantee from "../assets/svg/Guarantee.svg";

function CustomerService() {
  return (
    <>
      <div className="grid grid-cols-12  text-center ">
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4   mt-7  ">
          <div className=" mx-auto rounded-[40px] w-[80px] h-[80px] bg-slate-300  flex justify-center">
            <div className="rounded-[32px] w-[64px] h-[64px] bg-black m-auto ">
              <div>
                <img className="mx-auto mt-3" src={Delivery} alt="" />
              </div>
            </div>
          </div>
          <div className="ml-1 mt-7">
            <h1 className="font-semibold">FREE AND FAST DELIVERY</h1>
            <h4 className="font-normal">
              Free delivery for all orders over $140
            </h4>
          </div>
        </div>
        {/* SERVICE */}
        <div className="col-span-12 sm:-col-span-12 md:col-span-6 lg:col-span-4   mt-3">
          <div className=" mx-auto rounded-[40px] w-[80px] h-[80px] bg-slate-300 flex justify-center">
            <div className="rounded-[32px] w-[64px] h-[64px] bg-black m-auto ">
              <div>
                <img className="mx-auto mt-3" src={Headphone} alt="" />
              </div>
            </div>
          </div>
          <div className="ml-1 mt-7">
            <h1 className="font-semibold">24/7 CUSTOMER SERVICE</h1>
            <h4 className="font-normal">Friendly 24/7 customer support</h4>
          </div>
        </div>
        {/* Guarantee */}
        <div className="col-span-12  sm:-col-span-12 md:col-span-6 lg:col-span-4   mt-2">
          <div className=" mx-auto rounded-[40px] w-[80px] h-[80px] bg-slate-300 flex justify-center">
            <div className="rounded-[32px] w-[64px] h-[64px] bg-black m-auto ">
              <div>
                <img className="mx-auto mt-3" src={Guarantee} alt="" />
              </div>
            </div>
          </div>
          <div className="ml-1 mt-7">
            <h1 className="font-semibold">MONEY BACK GUARANTEE</h1>
            <h4 className="font-normal">We return money within 30 days</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerService;
