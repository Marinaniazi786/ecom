import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import ShoppingCart from "../assets/ShoppingCart.png";
import IconGoogle from "../assets/IconGoogle.png";
import { useNavigate } from "react-router-dom";
import CopyRight from "../Components/CopyRight";


function SignUp() {
const navigate = useNavigate()


  function goToLogin() {
    navigate('/login')
  }
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="grid grid-cols-12 mt-[50px]">
        <div className="col-span-6 bg-teal-100 	">
          <img src={ShoppingCart} alt="" />
        </div>
        <div className="col-span-6	">
          <div className=" w-[371px] h-[326px] mx-auto mt-[40px] ">
            <h1 className="text-2xl font-medium ">Create an account</h1>
            <br />
            <h5 className="text-regular">Enter your details below</h5>
            <div className="mt-[60px]">
              <input
                className=" border-b-2 border-slate-200 w-[280px]"
                type="text"
                placeholder="Name"
              />
              <br />
              <input
                className=" mt-[20px] border-b-2 border-slate-200 w-[280px]"
                type="text"
                placeholder="Email or Phone Number"
              />
              <br />
              <input
                className=" mt-[20px] border-b-2 border-slate-200 w-[280px]"
                type="text"
                placeholder="Password"
              />
            </div>

            <div className="col-span-12  mt-[40px] ">
              <div className="col-span-4 ">
                <button
                  onClick={{}}
                  className=" w-[280px] h-[46px] bg-red-500 border-red-500 rounded hover:border-purple-600 px-5"
                >
                  {" "}
                  <span className="text-white">Create Account </span>{" "}
                </button>
              </div>
              <div className="col-span-4 flex w-[280px] border border-slate-300 rounded mt-5 ">
                <div className="col-span-2 mt-3 ml-[50px]">
                  <img src={IconGoogle} alt="" />
                </div>
                <div className="col-span-2">
                  <button
                    onClick={{}}
                    className=" w-[200px] h-[46px]    hover:border-purple-600 px-5"
                  >
                    {" "}
                    <span className="text-black">
                      Sign Up with Google{" "}
                    </span>{" "}
                  </button>
                </div>
              </div>
              <div className="col-span-4 flex mt-5">
                <h5>Already have account?</h5>
                <button
                  onClick={goToLogin}
                  className="hover:border-purple-600 px-5"
                >
                  {" "}
                  <span className="text-black border-b-2 border-slate-400">
                    {" "}
                    Log in{" "}
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 mt-[100px]">
          <CopyRight/>
        </div>
      </div>
    </>
  );
}

export default SignUp;
