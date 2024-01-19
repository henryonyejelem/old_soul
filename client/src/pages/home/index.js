import './index.css'
import Button from '../../components/ui/button.js'

function Home(){
  return (
    <div className="home">
      <div className="hero h-[100vh] relative">
        <div className="hero-inner absolute top-[50%] translate-y-[-50%] left-[15%]">
          <div className='text-7xl text-primary-100 font-extrabold leading-[111px]'>
            <p>WHERE STYLE</p>
            <p>MEETS</p>
            <p className="text-primary-200 bg-primary-100 inline-block my-[27.6px] px-[20px]">EXPRESSION</p>
          </div>
          <div className='text-[1.275rem] text-black font-normal w-[625px]'>
            <p>
              Our curated collection whispers tales of timeless style. Step into a world where every thread tells a story, 
              and each garment carries the elegance of eras past.
            </p>
            <Button>SHOP NOW</Button>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Home;