import { useContext } from "react";

import { CartContext } from '../../context/cartContext.js';
import CheckoutCard from "../../components/ui/checkoutCard.js";
function Review() {
  const { state } = useContext(CartContext);
  const cartlist = state.cart

  return (
    <div className="">
      
      <div className="text-[30px] mb-xl font-semibold">Review</div> 
            
        <div className="">

          <div className="">
            {cartlist.map(item => <CheckoutCard name={item.name} price={item.price} src={item.ID}/>)}
          </div>
          
          <button className="bg-black text-white font-medium py-2 text-[15px] w-[100%] my-[24px]">Pay</button>

            <div className="text-[15px] flex gap- font-semibold pb-[70px]">
                <div>{'<'}</div>
                <div>continue shopping</div>
            </div>

        </div>

   

    </div>
  )
}

export default Review