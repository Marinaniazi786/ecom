import React from 'react'
import Rectangle from "../assets/svg/Rectangle.svg";
function ThisMonth() {
    
   
      return (
        <div>
        <div className=" col-span-6 flex space-x-4 ">
          <img src={Rectangle} alt="" />
    
          <h5 className="  text-red-600 mt-2 decoration-solid">This Month</h5>
        </div>
       
      </div>
      )
    }

export default ThisMonth