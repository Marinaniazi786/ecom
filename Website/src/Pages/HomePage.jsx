import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Search from "../assets/svg/Search.svg";
import Heart from "../assets/svg/Heart.svg";
import Cart from "../assets/svg/Cart.svg";
import Rectangle from "../assets/svg/Rectangle.svg";
import SideDashBar from "../Components/SideDashBar";
import Slider from "../Components/Slider";
import CounterSlider from "../Components/CounterSlider";
import MyTimer from "../Components/Counter";
import left from "../assets/svg/left.svg";
import Right from "../assets/svg/Right.svg";
import Items from "../Components/Items";
import AIP from "../assets/AIP.jpg";
import SSS from "../assets/SSS.jpg";
import MZK from "../assets/MZK.jpg";
import CCC from "../assets/CCC.png";
import Categories from "../Components/Categories";
import Category from "../Components/Category";
import Mobile from "../assets/svg/Mobile.svg";
import Computer from "../assets/svg/Computer.svg";
import Smartwatch from "../assets/svg/Smartwatch.svg";
import Gaming from "../assets/svg/Gaming.svg";
import Headphone from "../assets/svg/Headphone.svg";
import Camera from "../assets/svg/Camera.svg";
import ThisMonth from "../Components/ThisMonth";
import BestProducts from "../Components/BestProducts";
import JAK from "../assets/JAK.jpeg";
import BAG from "../assets/BAG.jpg";
import COL from "../assets/COL.jpeg";
import SHELF from "../assets/SHELF.jpeg";
import OurProducts from "../Components/OurProducts";
import ExploreProducts from "../Components/ExploreProducts";
import FOOD from "../assets/FOOD.jpeg";
import GPAD from "../assets/GPAD.jpg";
import CUROLOGY from "../assets/CUROLOGY.webp";
import CANON from "../assets/CANON.jpeg";
import GAMING from "../assets/GAMING.jpeg";
import SHOES from "../assets/SHOES.jpg";
import SAT from "../assets/SAT.webp";
import CAR from "../assets/CAR.jpeg";
import Red from "../assets/svg/Red.svg";
import Brown from "../assets/svg/Brown.svg";
import Black from "../assets/svg/Black.svg";
import Yellow from "../assets/svg/Yellow.svg";
import Feature from "../Components/Feature";
import BuyNow from "../Components/BuyNow";
import FeatureImages from "../Components/FeatureImages";
import CustomerService from "../Components/CustomerService";
import ArrowUp from "../assets/svg/ArrowUp.svg";
import CopyRight from "../Components/CopyRight";
import Addnew from "../Components/Addnew";
function HomePage() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [add, setAdd] = useState([]);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10000); // 10 minutes timer

  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
      });
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchCategory() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        console.log("_____________________________");

        setCategory(json);
      });
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  function fetchAddnew() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        console.log("_____________________________");

        setAdd(json);
      });
  }
  useEffect(() => {
    fetchAddnew();
  }, []);

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <SideDashBar />
        </div>
        <div className="col-span-9 mt-6">
          <Slider />
        </div>
      </div>
      {/* COUNTER */}

      <div className="grid grid-cols-12 ms-8 mr-4">
        <div className="col-span-12  ">
          <CounterSlider />
        </div>
        <div className="col-span-2">
          <h1 className="font-semibold text-2xl mt-6">Flash Sales</h1>
        </div>
        <div className="col-span-4 ">
          <MyTimer expiryTimestamp={time} />
        </div>
        <div className="col-span-6  flex row space-x-4 ">
          <div className="col-span-12 flex ml-auto ">
            <img width={46} height={46} src={left} alt="" />
            <img width={46} height={46} src={Right} alt="" />
          </div>
        </div>
      </div>

      {/* ************************************ITEMS********************************* */}
      {/* ITEMS */}
      <div className="grid grid-cols-12 gap-4 ">
        {product.map((item) => {
          return (
            <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3  ml-7  ">
              <Items
                imagePath={item.image}
                title={item.title}
                offPrice={item.price}
                actualPrice={0}
                starCount={5}
                id={item.id}
                starOnChange={7}
              />
            </div>
          );
        })}
      </div>

      {/* <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3  ml-7  ">
          <Items
            imagePath={AIP}
            title="HAVIT HV-G92 Gamepad"
            offPrice="$120"
            actualPrice="$160"
            starCount={5}
            starOnChange={7}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ml-7 ">
          <Items
            imagePath={SSS}
            title="AK-900 Wired Keyboard"
            offPrice="$960"
            actualPrice="$1160"
            starCount={5}
            starOnChange={7}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ml-7 ">
          <Items
            imagePath={MZK}
            title="IPS LCD Gaming Monitor"
            offPrice="$400"
            actualPrice="$260"
            starCount={5}
            starOnChange={7}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3  ml-7 ">
          <Items
            imagePath={CCC}
            title="S-Series Comfort Chair "
            offPrice="$375"
            actualPrice="$400"
            starCount={5}
            starOnChange={7}
          />
        </div>
        <div className="col-span-12 flex justify-center  ">
          <button
            onClick={{}}
            className=" w-[234px] h-[56px]  bg-red-500 border rounded hover:border-purple-600 px-5"
          >
            {" "}
            <span className="text-white">View All Products</span>{" "}
          </button>
        </div>
      </div> */}

      {/* ********************************CATEGORY******************************************************** */}
      {/* CATEGORIES */}

      <div className="grid grid-cols-12  ms-8 mr-4 mt-4">
        <div className="col-span-6">
          <Categories />
          <h1 className="font-semibold text-2xl ">Browse By Category</h1>
        </div>
        <div className="col-span-12 mt-6  flex row">
          {category.map((item) => {
            return (
              <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3  ml-7  ">
                <Category imagePath={Computer} title={item} />
              </div>
            );
          })}
        </div>
      </div>
      {/* </div>
        <div className="col-span-12 mt-6  flex row">
          <h1 className="font-semibold text-2xl ">Browse By Category</h1>

          <div className=" flex ml-auto  ">
            {/* <img width={46} height={46} src={left} alt="" />
            <img width={46} height={46} src={Right} alt="" /> */}

      {/* </div>
        </div> */}

      {/* <Category imagePath={Mobile} title="Mobiles" />
        <Category imagePath={Computer} title="Computers" />
        <Category imagePath={Smartwatch} title="Smartwatches" />
        <Category
          imagePath={Camera}
          title="Camera"
          color="red"
          className="bg-red-500 "
        />
        <Category imagePath={Headphone} title="Headphones" />
        <Category imagePath={Gaming} title="Gaming" /> */}

      <br />

      {/* BEST SELLING PRODUCTS */}
      <div className="grid grid-cols-12 ms-8 mr-4 mt-6">
        <div className="col-span-6">
          <ThisMonth />
        </div>
        <div className="col-span-12 mt-6  flex row">
          <h1 className="font-semibold text-2xl ">Best Selling Products</h1>

          <div className=" flex ml-auto  ">
            <button
              onClick={{}}
              className=" rounded bg-red-500 border hover:border-purple-600 px-5"
            >
              {" "}
              <span className="text-white">View All</span>{" "}
            </button>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ">
          <BestProducts
            imagePath={JAK}
            title="The north coat"
            offPrice="$260"
            actualPrice="$360"
            starCount={5}
            starOnChange={7}
            className="bg-slate-100"
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ">
          <BestProducts
            imagePath={BAG}
            title="Gucci duffle bag"
            offPrice="$960"
            actualPrice="$1160"
            starCount={5}
            starOnChange={7}
            className="bg-slate-100"
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ">
          <BestProducts
            imagePath={COL}
            title="RGB liquid CPU Cooler"
            offPrice="$160"
            actualPrice="$170"
            starCount={5}
            starOnChange={7}
            className="bg-slate-100"
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ">
          <BestProducts
            imagePath={SHELF}
            title="Small BookShelf"
            offPrice="$360"
            starCount={5}
            starOnChange={7}
            className="bg-slate-100"
          />
        </div>
      </div>
      {/* BUY NOW */}

      <BuyNow />

      {/* OUR PRODUCTS */}
      <div className="grid grid-cols-12 ms-8 mr-4 mt-7">
        <div className="col-span-12  ">
          <OurProducts />
        </div>
        <div className="col-span-8">
          <h1 className="font-semibold text-2xl mt-6">Explore Our Products</h1>
        </div>
        <div className="col-span-4 flex row space-x-4">
          <div className="w-full flex ml-auto  items-end justify-end">
            <img width={46} height={46} src={left} alt="" />
            <img width={46} height={46} src={Right} alt="" />
          </div>
        </div>
      </div>

      {/* ********************************ADD NEW PRODUCTS ***************************** */}
      <div className=" grid grid-cols-12 gap-4 flex">
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ">
          <Addnew />
          {/* // imagePath={image}
            // title="Breed Dry Dog Food"
            // actualPrice="$100"
            // starCount={5}
            // starOnChange={7}
            // className="bg-slate-100" */}
        </div>
      </div>

      {/* ********************************EXPLORE PRODUCTS ***************************** */}

      <div className=" grid grid-cols-12 gap-4 flex">
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ">
          <ExploreProducts
            imagePath={FOOD}
            title="Breed Dry Dog Food"
            actualPrice="$100"
            starCount={5}
            starOnChange={7}
            className="bg-slate-100"
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ">
          <ExploreProducts
            imagePath={CANON}
            title="CANON EOS DSLR Camera"
            actualPrice="$360"
            starCount={5}
            starOnChange={7}
            className="bg-slate-100"
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ">
          <ExploreProducts
            imagePath={GAMING}
            title="ASUS FHD Gaming Laptop"
            actualPrice="$700"
            starCount={5}
            starOnChange={7}
            className="bg-slate-100"
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ">
          <ExploreProducts
            imagePath={CUROLOGY}
            title="Curology Product Set "
            actualPrice="$500"
            starCount={5}
            starOnChange={7}
            className="bg-slate-100"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 flex">
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ">
          <ExploreProducts
            imagePath={CAR}
            title="Kids Electric Car"
            actualPrice="$960"
            starCount={5}
            starOnChange={7}
            className="bg-slate-100"
          />
          <div className="flex row ml-7  space-x-2">
            <img src={Red} alt="" />
            <img src={Brown} alt="" />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ">
          <ExploreProducts
            imagePath={SHOES}
            title="Jr. Zoom Soccer Cleats"
            actualPrice="$1160"
            starCount={5}
            starOnChange={7}
            className="bg-slate-100"
          />
          <div className="flex row ml-7 space-x-2">
            <img src={Yellow} alt="" />
            <img src={Brown} alt="" />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ">
          <ExploreProducts
            imagePath={GPAD}
            title="GP11 Shooter USB Gamepad"
            actualPrice="$660"
            starCount={5}
            starOnChange={7}
            className="bg-slate-100"
          />
          <div className="flex row ml-7 space-x-2">
            <img src={Black} alt="" />
            <img src={Brown} alt="" />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ">
          <ExploreProducts
            imagePath={SAT}
            title="Quilted Satin Jacket"
            actualPrice="$660"
            starCount={5}
            starOnChange={7}
            className="bg-slate-100"
          />
          <div className="flex row ml-7 space-x-2">
            <img src={Black} alt="" />
            <img src={Brown} alt="" />
          </div>
        </div>
        <div className="col-span-12 flex justify-center  ">
          <button
            onClick={{}}
            className=" w-[234px] h-[56px] bg-red-500 border rounded hover:border-purple-600 px-5"
          >
            {" "}
            <span className="text-white">View All Products</span>{" "}
          </button>
        </div>
      </div>
      <div className="  ms-8 mr-4">
        {/* <div className="col-span-6"> */}
        <Feature />
        {/* </div> */}
        <FeatureImages />
      </div>
      <div className="ms-8 mr-4 mt-7 ">
        <CustomerService />
      </div>
      <div className="mt-7 flex place-content-end">
        <img src={ArrowUp} alt="" />
      </div>
      <div className="mt-7">
        <CopyRight />
      </div>
    </>
  );
}

export default HomePage;
