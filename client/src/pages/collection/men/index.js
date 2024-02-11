import coat from "../../../assets/images/collection/men/Coats.jpg"
import suit from "../../../assets/images/collection/men/Suit.jpg"
import pant from "../../../assets/images/collection/men/Pants.jpg"
import sweater from "../../../assets/images/collection/men/Sweaters.jpg"
import top from "../../../assets/images/collection/men/Tops.jpg"

import dropdown from "../../../assets/icons/dropdown.svg"
import search from "../../../assets/icons/Search Icon.svg"

import Card from "../../../components/ui/card.js"
import CategoryNav from "../../../components/ui/categoryNav.js"

import axios from "axios"
import {useState, useEffect} from "react"

function Men() {
    const [db, setDB] = useState([]);
    let url = "http://localhost:8000/men";

    useEffect(() => {              
        axios.get(url)
        .then(result => {
            setDB(result.data);
        })
    }, [url])
  return (
    <div className="pt-[8vh]">
        <div className="flex justify-around text-2xl font-bold bg-primary-300 text-primary-100">
            <div>50% OFF SALE END OF SEASON</div>
            <div>50% OFF SALE END OF SEASON</div>
            <div>50% OFF SALE END OF SEASON</div>
        </div>

        <CategoryNav active={'men'}/>

        <div className="categories flex justify-between mx-8 gap-10">
            <div className="">
                <div className="h-[29vh] overflow-hidden"><img src={coat} alt="" className="hover:scale-[1.15] h-[100%] transition-all ease-out duration-500"/></div>
                <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Coats</p>
            </div>
            <div className="">
                <div className="h-[29vh] overflow-hidden"><img src={suit} alt="" className="hover:scale-[1.15] transition-all ease-out duration-500"/></div>
                <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Suit</p>
            </div>
            <div className="">
                <div className="h-[29vh] overflow-hidden"><img src={top} alt="" className="hover:scale-[1.15] transition-all ease-out duration-500"/></div>
                <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Tops</p>
            </div>
            <div className="">
                <div className="h-[29vh] overflow-hidden"><img src={pant} alt="" className="hover:scale-[1.15] transition-all ease-out duration-500"/></div>
                <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Pants</p>
            </div>
            <div className="">
                <div className="h-[29vh] overflow-hidden"><img src={sweater} alt="" className="hover:scale-[1.15] transition-all ease-out duration-500"/></div>
                <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Sweaters</p>
            </div>
        </div>

        <div className="flex my-7 mx-8 justify-between">
            <div className="flex text-base gap-[50px] font-medium">
                <div className="flex gap-1">
                    <p>Season</p>
                    <img src={dropdown} alt="" className="h-[9px] translate-y-[10px]"/>
                </div>
                <div className="flex gap-1">
                    <p>Size</p>
                    <img src={dropdown} alt="" className="h-[9px] translate-y-[10px]"/>
                </div>
                <div className="flex gap-1">
                    <p>Price</p>
                    <img src={dropdown} alt="" className="h-[9px] translate-y-[10px]"/>
                </div>
                <div>Customer Top Rated</div>
                <div>Offers</div>
            </div>
            <div className="w-[25vw] text-base py-2 px-5 bg-[#E9E7E7] rounded-full items-center flex gap-2">
                <img src={search} alt="" className="h-[15px]"/>
                <p className="text-[#898989] font-medium">Search</p>
            </div>
        </div>

        <div className="mx-8 grid grid-cols-4 gap-6 mb-[70px]">
            {db.map(item => <Card name={item.name} price={item.price} src={item.ID} gender="men" category = {item.tags}/>)}
        </div>
    </div>
  )
}

export default Men