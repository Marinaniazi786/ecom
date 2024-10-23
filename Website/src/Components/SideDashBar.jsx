import React from 'react'
import Arrow from '../assets/svg/Arrow.svg'
import AAP from '../assets/AAP.jpg'
import Slider from './Slider'

function SideDashBar() {
  return (
    <>
<div className="mt-1  ms-8 justify-between justify-start flex flex-col sm:flex-row w-full  gap-4	">
      
      <div class="w-64 h-[425px] bg-white shadow-md">
          <ul class="space-y-1 p-4">
              <li class="group">
                  <a href="#" class="flex justify-between items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                      <span>Woman's Fashion</span>
                      <img src={Arrow} alt="" />
  
                  </a>
              </li>
              <li class="group">
                  <a href="#" class="flex justify-between items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                      <span>Men's Fashion</span>
                      <img src={Arrow} alt="" />
                  </a>
              </li>
              <li>
                  <a href="#" class="block p-2 text-gray-700 hover:bg-gray-100 rounded">Electronics</a>
              </li>
              <li>
                  <a href="#" class="block p-2 text-gray-700 hover:bg-gray-100 rounded">Home & Lifestyle</a>
              </li>
              <li>
                  <a href="#" class="block p-2 text-gray-700 hover:bg-gray-100 rounded">Medicine</a>
              </li>
              <li>
                  <a href="#" class="block p-2 text-gray-700 hover:bg-gray-100 rounded">Sports & Outdoor</a>
              </li>
              <li>
                  <a href="#" class="block p-2 text-gray-700 hover:bg-gray-100 rounded">Baby's & Toys</a>
              </li>
              <li>
                  <a href="#" class="block p-2 text-gray-700 hover:bg-gray-100 rounded">Groceries & Pets</a>
              </li>
              <li>
                  <a href="#" class="block p-2 text-gray-700 hover:bg-gray-100 rounded">Health & Beauty</a>
              </li>
          </ul>
      </div>
      {/* <div className='mt-6   mr-[128px]'> 
        <Slider/> */}
      {/* </div>
   */}
        </div>
     <br />  
    
    </>)
}

export default SideDashBar