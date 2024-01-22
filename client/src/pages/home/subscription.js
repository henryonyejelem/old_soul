import Button from '../../components/ui/button.js'
import subscribeImg from '../../assets/images/home/subscribe.jpg'

import { motion } from 'framer-motion'

function Subscription() {
  return (
    <div className='subscribe flex justify-center h-[100vh] gap-12'>
        <div className='my-auto'>
            <img src={subscribeImg} alt="" className="h-[75vh] object-cover"/>
        </div>
        <div className="my-auto">
            <motion.p initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} 
              transition={{ ease: "easeOut", duration: 3, delay: 0.54, type: 'spring' }}
            className="font-bold text-primary-200 text-4xl">DONT MISS ANYTHING</motion.p>

            <motion.p initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} 
              transition={{ ease: "easeOut", duration: 3, delay: 0.54, type: 'spring' }}
            className="w-[100%]">Sign up for promotions, tailored new arrivals, stock updates <br/>
            and more - straight to your inbox</motion.p>

            <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} 
              transition={{ ease: "easeOut", duration: 3, delay: 0.54, type: 'spring' }}
            ><p className="w-[100%] my-xl text-[#707070]">Email Address</p></motion.div>

            <motion.hr className="h-[2px] bg-[#707070]" initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} 
              transition={{ ease: "easeOut", duration: 3, delay: 0.54, type: 'spring' }}
            />

            <motion.div className="my-xl" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} 
              transition={{ ease: "easeOut", duration: 3, delay: 0.54, type: 'spring' }}
            ><Button>SUBSCRIBE NOW</Button></motion.div>
        </div>
    </div>
  )
}

export default Subscription