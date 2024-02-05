import { useContext } from "react";
import CartCard from "../../components/ui/cartCard.js";
import { CartContext } from '../../context/cartContext.js';

import CategoryNav from "../../components/ui/categoryNav.js"

import {Link} from "react-router-dom"

function Cart() {
  const { state } = useContext(CartContext);
  
  //const cartlist = getRandomItems(db, 4)
  const cartlist = state.cart
  const sum = Number(cartlist.reduce((acc, obj) => acc + obj.price, 0)).toFixed(2);
  const tax = Number(cartlist.reduce((acc, obj) => acc + obj.price, 0)*(9.25/100)).toFixed(2);
  const total = Number(cartlist.reduce((acc, obj) => acc + obj.price, 0)*1.0925).toFixed(2);
  return (
    <div className="pt-[8vh] pb-[8vh] min-h-[100vh]">
      <CategoryNav/>
      <div className="mx-8 text-[35px] font-bold">My Cart</div> 

      <div className="flex mx-8 gap-[7%]">
        <div className="w-[70%]">
          <hr className="border-[0.5px] border-[#707070] my-xl"/>
          <div className="flex gap-1 justify-between font-bold">
            <div className="w-[60%] mb-[10px]">Item</div>
            <div className="w-[10%]">Each</div>
            <div className="w-[10%] text-center">Quantity</div>
            <div className="w-[10%] text-end">Total</div>

          </div>
          <div className="">
            {cartlist.map(item => <CartCard name={item.name} price={item.price} src={item.ID} quantity={item.quantity} color={item.color} size={item.size}/>)}
          </div>
          <hr className="border-[0.5px] border-[#707070] my-xl"/>

          <div className="flex justify-between font-bold">
            <div>{cartlist.length} Items</div>
            <div>${sum}</div>
          </div>

        </div>

        <div className="text-sm mt-[10px] flex-grow leading-10">
          <div className="font-bold opacity-50">ENTER PROMO CODE</div>
          <div className="border border-1 px-3  border-black">Promo Code</div>
          <div>Have gift card or coupon? Add your code</div>
          <div className="flex justify-between">
            <div>Subtotal</div>
            <div>${sum}</div>
          </div>

          <div className="flex justify-between">
            <div>Shipping({cartlist.length}items)</div>
            <div>FREE</div>
          </div>

          <div className="flex justify-between">
            <div>Estimated Tax</div>
            <div>${tax}</div>
          </div>

          <hr className="border-[0.5px] my-[10px] border-[#707070]"/>

          
          <div className="flex justify-between">
            <div className="font-bold">ORDER TOTAL</div>
            <div>${total}</div>
          </div>

          <div>4 interest-free payments of {Number(total/4).toFixed(2)} with Klarna. </div>

          <div className="text-center bg-black text-white my-2">
            {total > 0.00 ? <Link to="/checkout">CHECKOUT {total}</Link> : "CHECKOUT"}
          </div>

        </div>
      </div>

    </div>
  )
}

export default Cart