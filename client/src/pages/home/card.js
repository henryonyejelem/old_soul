import { motion } from 'framer-motion'

function Card(props) {
  return (
    <div className="w-[22vw]">
        <motion.img src={props.img} alt="" className="" 
          initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut", duration: 3, delay: 0.44, type: 'spring' }}
        />
        <div className="flex justify-between font-semibold text-[14px] mt-[5px]">
            <p>{props.name}</p>
            <p>{`$${props.price}`}</p>
        </div>
    </div>   
  )
}

export default Card