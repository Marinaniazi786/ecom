import React from 'react'
import StarRating from './StarRating';
import "react-awesome-slider/dist/styles.css";
import FillHeart from "../assets/svg/FillHeart.svg";
import Eye from "../assets/svg/Eye.svg";
function BestProducts(props) {
    const className =""
  return (
    <>
    <div className=" mt-8  ml-7 ">
      <div className={" w-[250px] h-[220px]  relative group w-[170px] h-[145px] border-solid border-2  border-black-300 "+ 
          props.className 
        }
        >
        <img width={170} className="h-[150px] mt-7 ml-8 flex " src={props.imagePath} alt="" />
        <br />
        
        <div className="absolute    top-0 right-0 ">
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

export default BestProducts