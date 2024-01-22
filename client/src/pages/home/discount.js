import React from 'react'

function Discount() {
  return (
    <div className='discount h-[40vh] relative'>
      <div className='absolute top-[50%] translate-y-[-50%] left-[20%]'>
        <p className='font-bold text-5xl leading-[80px] text-[#444444]'>
          50% OFF SALE<br/>
          END OF SEASON
        </p>
        <p className='w-[100%] text-center border-2  text-[#444444] border-[#444444] py-[0.325rem] my-xl'>
          SHOP NOW
        </p>
      </div>
    </div>
)
}

export default Discount