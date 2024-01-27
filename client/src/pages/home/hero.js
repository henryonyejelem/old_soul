import Button from '../../components/ui/button.js'

import {Link} from 'react-router-dom'

import { motion} from 'framer-motion'


function Hero() {
  return (
    <div className="hero h-[100vh]">
      <div 
      className="hero-inner absolute top-[50%] translate-y-[-30%] left-[15%] ">
        <div className='text-6xl text-primary-100 font-extrabold leading-3xl'>
          <div className='overflow-hidden'>
            <motion.p initial={{ y: 80 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ ease: "easeOut", duration: 1.4, type: 'spring'}}>WHERE STYLE</motion.p>
          </div>
          <div className='overflow-hidden'>
            <motion.p initial={{ y: 80 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ ease: "easeOut", duration: 1.4, delay: 0.08, type: 'spring'}}>MEETS</motion.p>
          </div>
          <div className='overflow-hidden'>
            <motion.p className='bg-primary-100 text-primary-200 text-center py-1 my-xl' 
            initial={{ y: 118 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ ease: "easeOut", duration: 1.4, delay: 0.16, type: 'spring' }}>EXPRESSION</motion.p>
          </div>
        </div>
        <div className='text-base text-black font-normal w-[550px] leading-base'>
          
          <div className='overflow-hidden'>
            <motion.p initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ ease: "easeOut", duration: 1.4, delay: 0.24, type: 'spring' }}>
              Our curated collection whispers tales of timeless style. Step into a world where  
            </motion.p>
          </div>

          <div className='overflow-hidden'>
            <motion.p initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ ease: "easeOut", duration: 1.4, delay: 0.32, type: 'spring' }}>
              every thread tells a story, and each garment carries the elegance of eras past. 
            </motion.p> 
          </div> 

          <div className='overflow-hidden my-xl'>
            <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ ease: "easeOut", duration: 1.4, delay: 0.7, type: 'spring' }}>
              <Link to={`/collection/women`}><Button>SHOP NOW</Button></Link> 
            </motion.div>
          </div>    
        </div>
      </div>
    </div>  
  )
}

export default Hero