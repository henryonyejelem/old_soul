import img1 from "../../assets/images/home/popular1.jpg"
import img2 from "../../assets/images/home/popular2.jpg"
import img3 from "../../assets/images/home/popular3.jpg"
import img4 from "../../assets/images/home/popular4.jpg"
import img5 from "../../assets/images/home/popular5.jpg"
import img6 from "../../assets/images/home/popular6.jpg"

import Button from "../../components/ui/button"

function Popular() {
  return (
      <div className='popular-collection my-[70px]'>
        <div className='font-bold text-[20px] text-center mb-9'>POPULAR COLLECTION</div>
        <div className="flex flex-col justify-end">        
            <div className="flex mx-auto gap-10 overflow-auto w-[95vw]">                
              <img src={img1} alt="" className="md:w-[55vw] md:h-[45vh] md:object-cover"/>       
              <img src={img2} alt="" className="md:w-[55vw] md:h-[45vh] md:object-cover"/>
              <img src={img3} alt="" className="md:w-[55vw] md:h-[45vh] md:object-cover"/>
              <img src={img4} alt="" className="md:w-[55vw] md:h-[45vh] md:object-cover"/>
              <img src={img5} alt="" className="md:w-[55vw] md:h-[45vh] md:object-cover"/>
              <img src={img6} alt="" className="md:w-[55vw] md:h-[45vh] md:object-cover"/>
            </div> 
          <div className="px-[40px] my-xl">
              <Button>BROWSE COLLECTION</Button>
          </div>
        </div>    
      </div>
   
    
  )
}

export default Popular