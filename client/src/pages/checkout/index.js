import Information from "./information"

function Checkout() {
  return (
    <div className='flex gap-10 mt-[6vh] ml-[20vw] min-h-[100vh] mr-[3vw]'>
        <div className=" w-[60%]">
            <div className="font-NewYork text-[44px]">
                Old Soul
            </div>
            <div className="flex gap-3 leading-[50px] text-[15px]">
                <div className="font-bold">Information</div>
                <div> {'>'} </div>
                <div>Payment</div>
                <div> {'>'} </div>
                <div>Review</div>
            </div>
            <Information/>
        </div>
        <div className="mt-[12vh] w-[40%] leading-7">
            <div className="flex justify-between items-end mb-xl">
                <div className="text-[25px] font-bold">Order summary</div>
                <div className="text-[13px] text-primary-400 underline underline-offset-2">Edit Cart</div>
            </div>

            <div className="flex text-[13px] justify-between">
                <div>Subtotal</div>
                <div>$207.66</div>
            </div>     
            <div className="flex text-[13px] justify-between">
                <div>Shipping (2 items)</div>
                <div>FREE</div>
            </div>     
            <div className="flex text-[13px] justify-between">
                <div>Estimated Tax</div>
                <div>$12.45</div>
            </div>     
            <hr className="border-[0.5px] my-[10px] border-[#707070]"/>  
            <div className="flex font-bold justify-between">
                <div>Order Total</div>
                <div>$219.10</div>
            </div>
            <div className="text-[13px]">Have gift card or coupon? Add your code</div>

        </div>
    </div>
  )
}

export default Checkout