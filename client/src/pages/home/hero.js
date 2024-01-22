import Button from '../../components/ui/button.js'

import { useRef } from 'react'
import { motion, useScroll} from 'framer-motion'
import useParallax from './useParallax.js'

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const y = useParallax(scrollYProgress, '-30%', '-200%');

  return (
    <div className="hero h-[100vh]" ref={ref}>
      <motion.div 
      style={{translateY : y}}
      className="hero-inner absolute top-[50%] left-[15%]">
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
              <Button>SHOP NOW</Button>   
            </motion.div>
          </div>    
        </div>
      </motion.div>
    </div>  
  )
}

export default Hero