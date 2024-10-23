import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import FillHeart from "../assets/svg/FillHeart.svg";
import Eye from "../assets/svg/Eye.svg";

import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";
function Items(props) {

  const navigation = useNavigate()

  return (
    <>
      <div onClick={()=> navigation("/SingleProduct/" + props.id )} className=" mt-6 ml-6 ">
        <div className="w-[200px] h-[200px] relative group">
          <img width={170} className="h-[150px]" src={props.imagePath} alt="" />
          <br />
          <div>
            <button
              onClick={()=>alert (props.id)}
              className="bg-black px-5 w-full absolute hidden  group-hover:block"
            >
              {" "} 
              
              <span className="text-white">Add to Cart</span>
            </button>
          </div>
          <div className="absolute  -mt-4 -mr-4  top-0 right-0 ">
            <img src={FillHeart} alt="" />
            <img src={Eye} alt="" />
          </div>
        </div>
        <div>
          <h4>{props.title}</h4>
        </div>

        <div>
          <h3>
            <span className="text-red-600">{props.offPrice}</span>{" "}
           <span className="line-through"> {props.actualPrice}</span> {" "}
          </h3>
        </div>
        <div>
          <StarRating />
        </div>
      </div>
    </>
  );
}

export default Items;
