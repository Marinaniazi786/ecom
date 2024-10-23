import React from "react";
import Search from "../assets/svg/Search.svg";
import Heart from "../assets/svg/Heart.svg";
import Cart from "../assets/svg/Cart.svg";
import ShoppingCart from "../assets/ShoppingCart.png";
import CopyRight from "../Components/CopyRight";


function Login() {
  return (
    <>
      {/* <Navbar/> */}
      <div className="col-span-12bg-gray-900 ms-8 mr-4">
        <nav class="">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open main menu</span>
                </button>
              </div>
              <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex flex-shrink-0 items-center"></div>
                <div class="hidden sm:ml-6 sm:block">
                  <div class="flex space-x-4 text-black-600">
                    <a
                      href="#"
                      class="rounded-md  px-3 py-2 text-sm font-bold text-black"
                      aria-current="page"
                    >
                      Exclusive
                    </a>
                    <a
                      href="#"
                      class="rounded-md px-3 py-2 text-sm font-normal text-black hover:bg-gray-700 hover:text-white"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      class="rounded-md px-3 py-2 text-sm font-normal text-black hover:bg-gray-700 hover:text-white"
                    >
                      Contact
                    </a>
                    <a
                      href="#"
                      class="rounded-md px-3 py-2 text-sm font-normal text-black hover:bg-gray-700 hover:text-white"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      class="rounded-md px-3 py-2 text-sm font-normal text-black hover:bg-gray-700 hover:text-white"
                    >
                      Sign-Up
                    </a>
                  </div>
                </div>
              </div>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">View notifications</span>
                </button>

                <div class="relative ml-3 flex display-flex row ">
                  <div className="flex items-center space-x-4 ml-3 ">
                    <div className=" bg-slate-100 w-[230px]  mt-1">
                      <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="px-2 py-1 border rounded bg-slate-100"
                      />

                      <button className="mt-2 ml-1 hover:text-purple-600">
                        <img src={Search} alt="" />
                      </button>
                    </div>
                  </div>

                  <div className="ml-1">
                    <button className="p-2 hover:text-purple-600">
                      <img src={Heart} alt="" />
                    </button>
                    <button className="p-2 hover:text-purple-600">
                      <img src={Cart} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-regular text-black"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-regular text-black hover:bg-gray-700 hover:text-white"
              >
                Contact
              </a>
              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-regular text-black hover:bg-gray-700 hover:text-white"
              >
                About
              </a>
              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-regular text-black hover:bg-gray-700 hover:text-white"
              >
                Sign-Up
              </a>
            </div>
          </div>
        </nav>
        <div className="border-b-2 border-slate-300"></div>
      </div>
      {/* NAVBAR END */}
      {/*<**********************************************************************************> */}

      <div className="grid grid-cols-12 mt-[50px]">
        <div className="col-span-6 bg-teal-100 	">
          <img src={ShoppingCart} alt="" />
        </div>
        <div className="col-span-6	">
          <div className=" w-[371px] h-[326px] mx-auto mt-[150px] ">
            <h1 className="text-2xl font-medium ">Log in to Exclusive</h1>
            <br />
            <h5 className="text-regular">Enter your details below</h5>
            <div className="mt-[60px]">
              <input
                className=" border-b-2 border-slate-200 w-[280px]"
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

            <div className="col-span-12 flex mt-[40px] ">
              <div className="col-span-6 ">
                <button
                  onClick={{}}
                  className=" w-[150px] h-[50px]  bg-red-500 border-red-500 rounded hover:border-purple-600 px-5"
                >
                  {" "}
                  <span className="text-white">Log In </span>{" "}
                </button>
              </div>
              <div className="col-span-6 mt-4">
                <button
                  onClick={{}}
                  className="hover:border-purple-600 px-5"
                >
                  {" "}
                  <span className="text-red-500"> Forget Password? </span>{" "}
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

export default Login;
