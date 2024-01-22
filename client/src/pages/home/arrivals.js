import Button from '../../components/ui/button.js'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import useParallax from './useParallax.js'


function Arrivals() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end start"]
  })
  const y = useParallax(scrollYProgress, '30%', '-130%');
  
  return (
    <div className="new-Arrivals h-[100vh] relative" ref={ref}>
        <motion.div 
        style={{translateY : y}}
        className="absolute top-[50%] right-[8%]">
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
        </motion.div>
    </div>  
  )
}

export default Arrivals