import Button from '../../components/ui/button.js'

function Arrivals() {  
  return (
    <div className="new-Arrivals h-[100vh] relative">
        <div className="absolute top-[50%] right-[8%] translate-y-[-30%]">
            <div className='text-6xl text-primary-100 font-extrabold leading-3xl my-xl'>
            <p>WEEKLY NEW</p>
            <p className='text-[6.7rem]'>ARRIVALS</p>
            </div>
            <div className='text-base text-black font-normal w-[522px] leading-base'>
            <p className='mb-xl'>
                Elevate your wardrobe with our curated selection of fresh arrivals. 
                Stay ahead of the fashion curve as we introduce new trends.
            </p>
            <Button>NEW COLLECTION</Button>
            </div>
      </div>
    </div>  
  )
}

export default Arrivals