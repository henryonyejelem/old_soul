import { useContext } from "react";

import Information from "./information.js"
import Payment from "./payment.js"
import Review from "./review.js"

import {useState} from "react"

import { CartContext } from '../../context/cartContext.js';

function Checkout() {
    const { state } = useContext(CartContext);
    const [active, setActive] = useState("information")

    const handleClick = (elem) => {
        setActive(elem)
    }

    const cartlist = state.cart
    const sum = Number(cartlist.reduce((acc, obj) => acc + obj.price, 0)).toFixed(2);
    const tax = Number(cartlist.reduce((acc, obj) => acc + obj.price, 0)*(9.25/100)).toFixed(2);
    const total = Number(cartlist.reduce((acc, obj) => acc + obj.price, 0)*1.0925).toFixed(2);

  return (
    <div className='flex gap-10 ml-[20vw] min-h-[100vh]'>
        <div className="pt-[6vh] w-[60%]">
            <div className="font-NewYork text-[48px]">
                Old Soul
            </div>
            <div className="flex gap-3 leading-[50px] text-[15px]">
                <div className="font-bold">Information</div>
                <div className={`${active !== "information" && "font-bold"}`}> {'>'} </div>
                <div className={`${active !== "information" && "font-bold"}`}>Payment</div>
                <div className={`${active === "review" && "font-bold"}`}> {'>'} </div>
                <div className={`${active === "review" && "font-bold"}`}>Review</div>
            </div>
            {active === "information" && <Information handler={handleClick}/>}
            {active === "payment" && <Payment handler={handleClick}/>}
            {active === "review" && <Review/>}
        </div>
        <div className="shadow-inner pt-[18vh] px-[3vw] w-[40%] leading-8 bg-[#F0F0F0] text-[15px]">
            <div className="flex justify-between items-end mb-xl">
                <div className="text-[30px] font-bold">Order summary</div>
                <div className=" text-primary-400 underline underline-offset-2">Edit Cart</div>
            </div>

            <div className="flex justify-between">
                <div>Subtotal</div>
                <div>${sum}</div>
            </div>     
            <div className="flex justify-between">
                <div>Shipping (2 items)</div>
                <div>FREE</div>
            </div>     
            <div className="flex justify-between">
                <div>Estimated Tax</div>
                <div>${tax}</div>
            </div>     
            <hr className="border-[0.5px] my-[10px] border-[#707070]"/>  
            <div className="flex font-bold justify-between text-[18px]">
                <div>Order Total</div>
                <div>${total}</div>
            </div>
            <div className="">Have gift card or coupon? Add your code</div>

        </div>
    </div>
  )
}

export default Checkout