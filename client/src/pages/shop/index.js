import React from 'react'
import CategoryNav from '../../components/ui/categoryNav'

import fall_1 from '../../assets/images/shop/fall2024_1.jpg'
import fall_2 from '../../assets/images/shop/fall2024_2.jpg'
import fall_3 from '../../assets/images/shop/fall2024_3.jpg'

function Shop() {
  return (
    <div className=' pt-[8vh] min-h-[100vh]'>
        <CategoryNav/>
        
        <div className='mx-8 text-[32px]'>
          <div>Fall 2023</div>
          <div className='flex justify-between my-xl'>
            <img src={fall_1} alt="" className='w-[32.3%]'/>
            <img src={fall_2} alt="" className='w-[32.3%]'/>
            <img src={fall_3} alt="" className='w-[32.3%]'/>

          </div>
          
        </div>

    </div>
  )
}

export default Shop