import coat from "../../../assets/images/collection/women/Coat.jpg"
import dress from "../../../assets/images/collection/women/Dresses.jpg"
import pant from "../../../assets/images/collection/women/Pants.jpg"
import skirt from "../../../assets/images/collection/women/Skirts.jpg"
import top from "../../../assets/images/collection/women/Tops.jpg"

import dropdown from "../../../assets/icons/dropdown.svg"
import search from "../../../assets/icons/Search Icon.svg"

import Card from "../../../components/ui/card.js"
import CategoryNav from "../../../components/ui/categoryNav.js"

import axios from "axios"
import {useState, useEffect} from "react"

function Women() {

    const [db, setDB] = useState([]);
    let url = "http://localhost:8000/women";

    useEffect(() => {              
        axios.get(url)
        .then(result => {
            setDB(result.data);
        })
    }, [url])

  return (
    <div className="pt-[8vh]">
        <div className="flex justify-around text-2xl font-bold bg-primary-300 sm:py-2 text-primary-100 lg:text-[20px] md:text-2xl sm:text-[20px]">
            <div className="md:hidden">50% OFF SALE END OF SEASON</div>
            <div>50% OFF SALE END OF SEASON</div>
            <div className="md:hidden">50% OFF SALE END OF SEASON</div>
        </div>

        <CategoryNav active={'women'}/>
        
       
        <div className="md:overflow-scroll">
            <div className="categories flex justify-between mx-8 md:mx-4 gap-10 md:w-[250vw] text-[19px] md:text-[13px]">
                <div className="">
                    <div className="overflow-hidden"><img src={coat} alt="" className="hover:scale-[1.15] h-[100%] transition-all ease-out duration-500"/></div>
                    <p className="mt-xl font-bold text-center w-[100%]">Coats</p>
                </div>
                <div className="">
                    <div className="overflow-hidden"><img src={dress} alt="" className="hover:scale-[1.15] transition-all ease-out duration-500"/></div>
                    <p className="mt-xl font-bold text-center w-[100%]">Dresses</p>
                </div>
                <div className="">
                    <div className="overflow-hidden"><img src={top} alt="" className="hover:scale-[1.15] transition-all ease-out duration-500"/></div>
                    <p className="mt-xl font-bold text-center w-[100%]">Tops</p>
                </div>
                <div className="">
                    <div className="overflow-hidden"><img src={pant} alt="" className="hover:scale-[1.15] transition-all ease-out duration-500"/></div>
                    <p className="mt-xl font-bold text-center w-[100%]">Pants</p>
                </div>
                <div className="">
                    <div className="overflow-hidden"><img src={skirt} alt="" className="hover:scale-[1.15] transition-all ease-out duration-500"/></div>
                    <p className="mt-xl font-bold text-center w-[100%]">Skirts</p>
                </div>
            </div>
        </div>

        <div className="flex my-7 mx-8 md:mx-3 min-md:justify-between">
            <div className="flex text-base gap-[50px] md:justify-between font-medium md:text-[12px] md:gap-3 w-[100%]">
                <div className="flex gap-1">
                    <p>Season</p>
                    <img src={dropdown} alt="" className="h-[9px] translate-y-[10px] md:h-[7px] md:translate-y-[7px]"/>
                </div>
                <div className="flex gap-1">
                    <p>Size</p>
                    <img src={dropdown} alt="" className="h-[9px] translate-y-[10px] md:h-[7px] md:translate-y-[7px]"/>
                </div>
                <div className="flex gap-1">
                    <p>Price</p>
                    <img src={dropdown} alt="" className="h-[9px] translate-y-[10px] md:h-[7px] md:translate-y-[7px]"/>
                </div>
                <div>Customer Top Rated</div>
                <div>Offers</div>
            </div>
            <div className="w-[25vw] text-base py-2 px-5 bg-[#E9E7E7] rounded-full items-center flex gap-2 md:hidden">
                <img src={search} alt="" className="h-[15px]"/>
                <p className="text-[#898989] font-medium">Search</p>
            </div>
        </div>

        <div className="mx-8 grid grid-cols-4 gap-6 mb-[70px] md:grid-cols-2 md:mx-4">
            {db.map(item => <Card name={item.name} price={item.price} src={item.ID} gender={"women"} category = {item.tags}/>)}
        </div>
    </div>
  )
}

export default Women