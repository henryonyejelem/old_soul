import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../context/cartContext.js';
import CheckoutCard from "../../components/ui/checkoutCard.js";

function Review() {
  const { state } = useContext(CartContext);
  const cartlist = state.cart
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className="lg:mr-[100px] xs:mr-4">
      
      <div className="text-[30px] mb-xl font-semibold">Review</div> 
            
        <div className="">

          <div className="">
            {cartlist.map(item => <CheckoutCard name={item.name} price={item.price} src={item.ID} gender={item.gender} quantity={item.quantity}/>)}
          </div>
          
          <button className="bg-black text-white font-medium py-2 text-[15px] w-[100%] my-[24px] md:my-0" onClick={handleClick}>Pay</button>

            <div className="text-[15px] flex gap-1 font-semibold pb-[70px] md:mt-[24px]">
                <div>{'<<<'}</div>
                <div>billing information</div>
            </div>

        </div>

   

    </div>
  )
}

export default Review