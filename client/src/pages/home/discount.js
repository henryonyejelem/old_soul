import React from 'react'

function Discount() {
  return (
    <div className='discount h-[40vh] relative md:h-[25vh]'>
      <div className='absolute top-[50%] translate-y-[-50%] left-[20%] md:left-[50%] md:translate-x-[-50%]'>
        <p className='font-bold text-5xl leading-[80px] text-[#444444] md:text-3xl md:leading-[40px] sm:w-[290px]'>
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