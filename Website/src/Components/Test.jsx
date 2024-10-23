import React from 'react'
import Guarantee from "../assets/svg/Guarantee.svg";
import Delivery from "../assets/svg/Delivery.svg";
import Headphone from "../assets/svg/Headphone.svg"

function Test() {
  return (
    <> 
    <div className="grid grid-cols-12 bg-green-600">
        <div className='col-span-4  bg-blue-400 mt-7 ml-3 '>
            
           <div className=' ml-9 rounded-[40px] w-[80px] h-[80px] bg-slate-300 ml-3 mt-5 flex justify-center'>
            <div className='rounded-[32px] w-[64px] h-[64px] bg-black m-auto '>
                <div>
                 <img className='mx-auto mt-3' src={Delivery} alt="" />
                </div>
            </div>
           </div>
           <div className='ml-1'>
           <h1 className='font-semibold'>FREE AND FAST DELIVERY</h1>
           <h4 className='font-normal'>Free delivery for all orders over $140</h4>
           </div>   
        </div>
        {/* SERVICE */}
        <div className='col-span-4  bg-yellow-400 mt-7 ml-3'>
            
           <div className=' ml-9 rounded-[40px] w-[80px] h-[80px] bg-slate-300 ml-3 mt-5 flex justify-center'>
            <div className='rounded-[32px] w-[64px] h-[64px] bg-black m-auto '>
                <div>
                 <img className='mx-auto mt-3' src={Headphone} alt="" />
                </div>
            </div>
           </div>
           <div className='ml-1'>
           <h1 className='font-semibold'>24/7 CUSTOMER SERVICE</h1>
           <h4 className='font-normal'>Friendly 24/7 customer support</h4>
           </div>   
        </div>
        {/* Guarantee */}
        <div className='col-span-4  bg-red-400 mt-7 ml-3'>
            hh
           <div className=' ml-9 rounded-[40px] w-[80px] h-[80px] bg-slate-300 ml-3 mt-5 flex justify-center'>
            <div className='rounded-[32px] w-[64px] h-[64px] bg-black m-auto '>
                <div>
                 <img className='mx-auto mt-3' src={Guarantee} alt="" />
                </div>
            </div>
           </div>
           <div className='ml-1'>
           <h1 className='font-semibold'>MONEY BACK GUARANTEE</h1>
           <h4 className='font-normal'>We return money within 30 days</h4>
           </div>   
        </div>

    </div>
    </>
  )
    
   
}

export default Test