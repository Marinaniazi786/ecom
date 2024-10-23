import React from 'react'
import FillHeart from "../assets/svg/FillHeart.svg";
import Eye from "../assets/svg/Eye.svg";
import StarRating from "./StarRating";

function ExploreProducts(props) {
    const className = ""
  return (
    <>
      <div className=" mt-8 ml-7">
        <div className={" w-[250px] h-[220px]  relative group w-[170px] h-[145px] border-solid border-2  border-black-300 "+ 
          props.className }
          > 
          <img width={170} className="h-[150px] mt-7 ml-7" src={props.imagePath} alt="" />
          <br />
          <div>
            <button
              onClick={{}}
              className="bg-black px-5 w-full absolute hidden  group-hover:block"
            >
              {" "}
              <span className="text-white">Add to Cart</span>
            </button>
          </div>
          <div className="absolute top-0 right-0 ">
            <img src={FillHeart} alt="" />
            <img src={Eye} alt="" />
          </div>
        </div>
        <div>
          <h4>{props.title}</h4>
          </div>
          <div className='flex space-x-4'>  
            <h3>
            <span className="text-red-600">{props.actualPrice}</span>{" "}
           {/* <span className="line-through"> {props.actualPrice}</span> {" "} */}
          </h3>
          
          <StarRating /> 
          </div>
         
        

        
          
        
       
      </div>
    </>
  )
}

export default ExploreProducts