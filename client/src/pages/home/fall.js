import Card from "./card"
import Button from "../../components/ui/button"

import img1 from "../../assets/images/home/fall2024_1.jpg"
import img2 from "../../assets/images/home/fall2024_2.jpg"
import img3 from "../../assets/images/home/fall2024_3.jpg"

import { motion } from 'framer-motion'

function Fall() {
  return (
    <div className="fall2024 h-[100vh] flex">
        <div className = "flex justify-center gap-4 m-auto"> 
            <div>
                <Card img={img1} name={"Double Breasted Coat"} price={349.99}/>
                <div className="w-[21vw]">
                    <p className="font-NewYork text-3xl leading-xl mt-xl text-primary-100">Unveiling Fall 2024 Fashion Trends</p>
                    <p className="my-xl">Must-Have Essentials for a Stylish Fall Wardrobe.</p>
                    <Button>BROWSE CATALOG</Button>
                </div>
            </div>
            <div className="mt-[9%]">
                <Card img={img2} name={"Donegall Tweed Jacket"} price={349.99}/>
            </div>
            <div className="mt-[18%] relative">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut", duration: 3, delay: 0.4, type: 'spring' }}
                className="font-bold absolute right-0 text-primary-200 text-7xl leading-3xl translate-y-[-105%]">
                    FALL<br/>
                    2024
                </motion.p>
                <Card img={img3} name={"Cotten Blazer"} price={349.99}/>
            </div>
        </div>
    </div>  
  )
}

export default Fall