import Button from '../../components/ui/button.js'

function Arrivals() {  
  return (
    <div className="new-Arrivals h-[100vh] relative">
        <div className="absolute top-[50%] right-[8%] translate-y-[-30%] md:right-[50%] md:translate-x-[50%] md:w-[69vw] sm:w-[95vw] sm:text-center">
            <div className='text-6xl text-primary-100 font-extrabold leading-3xl my-xl md:text-white sm:text-[57px] sm:leading-[65px]'>
            <p>WEEKLY NEW</p>
            <p className='text-[6.7rem] sm:text-[75px] xs:text-[60px]'>ARRIVALS</p>
            </div>
            <div className='text-base text-black font-normal w-[522px] leading-base'>
            <p className='mb-xl sm:hidden'>
                Elevate your wardrobe with our curated selection of fresh arrivals. 
                Stay ahead of the fashion curve as we introduce new trends.
            </p>
            <div className='sm:hidden'>
              <Button>NEW COLLECTION</Button>            
            </div>
            </div>
      </div>
    </div>  
  )
}

export default Arrivals