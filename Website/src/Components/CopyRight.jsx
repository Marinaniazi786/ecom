import React from "react";
import NextArrow from "../assets/svg/NextArrow.svg";
import Qrcode from "../assets/Qrcode.png";
import Google from "../assets/Google.png";
import Appstore from "../assets/Appstore.png";
import App from "../App";
import FacebookIcon from "../assets/svg/FacebookIcon.svg";
import Linkdin from "../assets/svg/Linkdin.svg";
import Instagram from "../assets/svg/Instagram.svg";
import Twitter from "../assets/svg/Twitter.svg";
import Copyright from "../assets/svg/Copyright.svg";

function CopyRight() {
  return (
    <>
      <div className="grid grid-cols-12  gap-6 bg-black text-white  text-center pb-16">
        {/* INPUT */}

        <div className="col-span-2 mt-7 bg-black col-start-2">
          <h1 className="font-bold mt-3">Exclusive</h1>
          <h5 className="font-medium mt-3">Subscribe</h5>
          <h5 className="font-normal mt-3">Get 10% off your first order</h5>

          <form class="space-y-4 mt-4">
            <div className="flex bg-black w-[250px] h-[46px] border border-white rounded shadow-sm  ">
              <input
                type="email"
                id="email"
                class="mt-1 bg-black  rounded w-[150px] l px-3 py-2 placeholder-gray-400  sm:text-sm"
                placeholder="Enter your Email"
              />
              <img className="bg-black px-3 py-2 " src={NextArrow} alt="" />
            </div>
          </form>
        </div>
        {/* SUPPORT */}
        <div className="col-span-2 bg-black mt-7">
          <h1 className="font-semibold mt-3">Support </h1>
          <h5 className="font-medium mt-3">
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </h5>
          <h5 className="font-medium mt-3">exclusive@gmail.com</h5>
          <h5 className="font-medium mt-2">+88015-88888-9999</h5>
        </div>
        {/* ACCOUNT */}
        <div className="col-span-2 bg-black mt-7">
          <h1 className="font-semibold mt-3"> Account</h1>
          <h5 className="font-regulafr mt-3">My Account</h5>
          <h5 className="font-regulafr mt-3">Login / Register</h5>
          <h5 className="font-regulafr mt-3">Cart</h5>
          <h5 className="font-regulafr mt-3">Wishlist</h5>
          <h5 className="font-regulafr mt-3">Shop</h5>
        </div>
        {/* QUICK LINK */}
        <div className="col-span-2 bg-black mt-7">
          <h1 className="font-semibold mt-3"> Quick Link</h1>
          <h5 className="font-regulafr mt-3">Privacy Policy</h5>
          <h5 className="font-regulafr mt-3">Terms of Use</h5>
          <h5 className="font-regulafr mt-3">FAQ</h5>
          <h5 className="font-regulafr mt-3">Contact</h5>
        </div>
        {/* Download App */}
        <div className="col-span-2 bg-black mt-7">
          <h1 className="font-semibold mt-3"> Download App</h1>
          <h5 className="font-regulafr mt-3">Save $3 with App New User Only</h5>
          <div className="mt-1 col-span-6 bg-white flex">
            <img src={Qrcode} alt="" />
            <div className="col-span-6">
              <img src={Google} alt="" />
              <img className="mt-2" src={Appstore} alt="" />
            </div>
          </div>
          <div className="col-span-12 flex bg-black gap-4 ml-3 mt-6">
            <img src={FacebookIcon} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkdin} alt="" />
          </div>
        </div>

    

        {/* <div className="col-span-12 bg-black flex opacity-50 text-center"> */}
        {/* <img src={Copyright} alt="" /> */}
      </div>
      
      <h5 className="text-center bg-black text-stone-500 ">
        {" "}
        © Copyright Rimel 2022. All right reserved
      </h5>
      {/* </div> */}
    </>
  );
}

export default CopyRight;
