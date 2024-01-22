import img1 from "../../assets/images/home/popular1.jpg"
import img2 from "../../assets/images/home/popular2.jpg"
import img3 from "../../assets/images/home/popular3.jpg"
import img4 from "../../assets/images/home/popular4.jpg"

import Button from "../../components/ui/button"

import { motion } from 'framer-motion'

function Popular() {
  return (
      <div className='popular-collection my-[70px]'>
        <div className='font-bold text-[20px] text-center mb-9'>POPULAR COLLECTION</div>
        <div>
            <ul className="flex gap-10 px-[40px]">
                <li>
                  <motion.img src={img1} alt="" 
                    initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} 
                    transition={{ ease: "easeOut", duration: 3, delay: 0.44, type: 'spring' }}/>
                </li>
                <li>
                  <motion.img src={img2} alt="" 
                    initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} 
                    transition={{ ease: "easeOut", duration: 3, delay: 0.84, type: 'spring' }}/>
                </li>
                <li>
                  <motion.img src={img3} alt="" 
                    initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} 
                    transition={{ ease: "easeOut", duration: 3, delay: 1.24, type: 'spring' }}/>
                </li>
                <li>
                  <motion.img src={img4} alt="" 
                    initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} 
                    transition={{ ease: "easeOut", duration: 3, delay: 1.64, type: 'spring' }}/>
                </li>
                
            </ul>

            <div className="px-[40px] my-xl">
                <Button>BROWSE COLLECTION</Button>
            </div>
        </div>    
      </div>
   
    
  )
}

export default Popular