import './index.css'
import Fall from './fall.js'
import Popular from './popular.js'
import Button from '../../components/ui/button.js'
import subscribeImg from '../../assets/images/home/subscribe.jpg'

function Home(){
  return (
    <div className="home">
      <div className="hero h-[100vh] relative">
        <div className="hero-inner absolute top-[50%] translate-y-[-30%] left-[15%]">
          <div className='text-6xl text-primary-100 font-extrabold leading-3xl'>
            <p>WHERE STYLE</p>
            <p>MEETS</p>
            <p className="text-primary-200 bg-primary-100 inline-block my-xl px-[20px]">EXPRESSION</p>
          </div>
          <div className='text-base text-black font-normal w-[550px] leading-base'>
            <p className='mb-xl'>
              Our curated collection whispers tales of timeless style. Step into a world where every thread tells a story, 
              and each garment carries the elegance of eras past.
            </p>
            <Button>SHOP NOW</Button>
          </div>
        </div>
      </div>  

      <div className="new-Arrivals h-[100vh] relative">
        <div className="absolute top-[50%] translate-y-[-40%] right-[8%]">
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

      <div className="fall2024 h-[100vh] flex">
        <Fall/>
      </div>  

      <div className='gender-categories h-[70vh] flex text-xl'>
        <div className='men w-[50vw] relative'>
          <p className='w-[80%] absolute top-[80%] left-[50%] translate-x-[-50%] bg-white z-40 text-center py-1'>MEN</p>
        </div>
        <div className='women w-[50vw] relative'>
          <p className='w-[80%] absolute top-[80%] left-[50%] translate-x-[-50%] bg-white z-40 text-center py-1'>WOMEN</p>
        </div>                
      </div>

      <div className='popular-collection my-[70px]'>
        <div className='font-bold text-[20px] text-center mb-9'>POPULAR COLLECTION</div>
        <Popular/>       
      </div>

      <div className='discount h-[50vh] relative'>
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

      <div className='subscribe flex justify-center h-[100vh] gap-12'>
        <div className='my-auto'>
          <img src={subscribeImg} alt="" className="h-[75vh]"/>
        </div>
        <div className="my-auto">
          <p className="font-bold text-primary-200 text-4xl">DONT MISS ANYTHING</p>
          <p className="w-[100%]">Sign up for promotions, tailored new arrivals, stock updates <br/>
            and more - straight to your inbox</p>
          <div><p className="w-[100%] my-xl text-[#707070]">Email Address</p></div>
          <hr className="h-[2px] bg-[#707070]"/>
          <div className="my-xl"><Button>SUBSCRIBE NOW</Button></div>
        </div>
      </div>
    </div>
  )
}

export default Home;