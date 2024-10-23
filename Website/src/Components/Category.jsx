import React from "react";

function Category(props) {
  const className = "";
  return (
    <>
      <div
        className={
          "  col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-2 mt-6 ml-6 w-[170px] h-[145px] border-solid border-2 rounded border-black-300 " +
          props.className
        }
      >
        <div className=" flex justify-center mt-6 ">
          <div>
            <img width={50} height={50} src={props.imagePath} alt="" />
          </div>
        </div>
        <div className="text-center mb-8 mt-6">
          <h4>{props.title}</h4>
          {/* <div>
            <button
              onClick={()=>alert ("yes")}
              className="bg-black px-5 w-full absolute hidden  group-hover:block"
            >
              {" "} 
              
              <span className="text-white">Add to Cart</span>
            </button>
          </div> */}
          
        </div>
        <div className=" flex ml-auto  ">
            <button
              // onClick={{}}
              onClick={()=>alert (props.title)}
              className=" rounded bg-red-500 border hover:border-purple-600 px-5 ml-7"
            >
              {" "}
              <span className="text-white">View All</span>{" "}
            </button>
          </div>
      </div>
    </>
  );
}

export default Category;
