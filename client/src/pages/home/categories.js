import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import useParallax from './useParallax.js'

function Categories() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end center"]
    })
    const y = useParallax(scrollYProgress, '10%', '-20%');

    return (
    <div className='gender-categories h-[65vh] flex text-xl overflow-clip' ref={ref}>
    
        <motion.div style={{translateY : y}} className='men w-[50vw] h-[80vh] relative'>
            <p className='w-[80%] absolute top-[80%] left-[50%] translate-x-[-50%] bg-white z-40 text-center py-1'>MEN</p>
        </motion.div>
        <motion.div style={{translateY : y}}  className='women w-[50vw] h-[80vh] relative'>
            <p className='w-[80%] absolute top-[80%] left-[50%] translate-x-[-50%] bg-white z-40 text-center py-1'>WOMEN</p>
        </motion.div>  
             
    </div>
    )
}

export default Categories