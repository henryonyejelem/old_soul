import './index.css'

import Hero from "./hero.js"
import Arrivals from "./arrivals.js"
import Fall from './fall.js'
import Popular from './popular.js'
import Categories from './categories.js'

import Button from '../../components/ui/button.js'
import subscribeImg from '../../assets/images/home/subscribe.jpg'


function Home(){  
  return (
    <div className="home">
      <Hero/>  
         
      <Arrivals/> 

      <Fall/>

      <Categories/>      

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
          <img src={subscribeImg} alt="" className="h-[75vh] object-cover"/>
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