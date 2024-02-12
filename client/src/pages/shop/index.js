import React from 'react'
import CategoryNav from '../../components/ui/categoryNav'

import fall_1 from '../../assets/images/shop/fall2024_1.jpg'
import fall_2 from '../../assets/images/shop/fall2024_2.jpg'
import fall_3 from '../../assets/images/shop/fall2024_3.jpg'
import banner from '../../assets/images/shop/banner.jpg'

import coat from "../../assets/images/collection/women/Coat.jpg"
import dress from "../../assets/images/collection/women/Dresses.jpg"
import pant from "../../assets/images/collection/women/Pants.jpg"
import skirt from "../../assets/images/collection/women/Skirts.jpg"
import top from "../../assets/images/collection/women/Tops.jpg"

import img1 from "../../assets/images/home/popular1.jpg"
import img2 from "../../assets/images/home/popular2.jpg"
import img3 from "../../assets/images/home/popular3.jpg"
import img4 from "../../assets/images/home/popular4.jpg"

function Shop() {
  return (
    <div className=' pt-[8vh] min-h-[100vh] pb-[5vh]'>
        <div className="flex justify-around text-2xl mt-xl font-bold bg-primary-300 text-primary-100">
            <div>50% OFF SALE END OF SEASON</div>
            <div>50% OFF SALE END OF SEASON</div>
            <div>50% OFF SALE END OF SEASON</div>
        </div>

        <CategoryNav/>

        
        <div className='mx-8 text-[27px] font-semibold'>
          <div className='my-xl'>FALL 2023</div>

          <div className='flex justify-between '>
            <img src={fall_1} alt="" className='w-[32.3%]'/>
            <img src={fall_2} alt="" className='w-[32.3%]'/>
            <img src={fall_3} alt="" className='w-[32.3%]'/>
          </div>

          <div className='my-[40px]'><img src={banner} className='w-[100%]' alt=""/></div>

          <div className='my-[40px]'>POPULAR CATEGORIES</div>

          <div className="categories flex justify-between my-xl gap-10">
              <div className="">
                  <div className="h-[29vh] overflow-hidden"><img src={coat} alt="" className="h-[100%] transition-all ease-out duration-500"/></div>
                  <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Coats</p>
              </div>
              <div className="">
                  <div className="h-[29vh] overflow-hidden"><img src={dress} alt="" className="transition-all ease-out duration-500"/></div>
                  <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Dresses</p>
              </div>
              <div className="">
                  <div className="h-[29vh] overflow-hidden"><img src={top} alt="" className="transition-all ease-out duration-500"/></div>
                  <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Tops</p>
              </div>
              <div className="">
                  <div className="h-[29vh] overflow-hidden"><img src={pant} alt="" className="transition-all ease-out duration-500"/></div>
                  <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Pants</p>
              </div>
              <div className="">
                  <div className="h-[29vh] overflow-hidden"><img src={skirt} alt="" className="transition-all ease-out duration-500"/></div>
                  <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Skirts</p>
              </div>
          </div>

          <div className='my-[40px]'>NEW ARRIVALS</div>
          
          <ul className="flex gap-10 my-xl">
              <li>
                <img src={img1} alt=""/>
              </li>
              <li>
                <img src={img2} alt="" />
              </li>
              <li>
                <img src={img3} alt=""/>
              </li>
              <li>
                <img src={img4} alt=""/>
              </li>
            </ul>
        </div>

    </div>
  )
}

export default Shop