import React from 'react'

function CartCard(props) {
    const src = require(`../../assets/images/collection/${props.gender}/${props.src}.jpg`)
    return (
        <div className='mb-[5vh]'>        
            <div className='flex justify-between'>
                <div className='flex gap-3 w-[60%] md:w-[100%] relative'> 
                    <img src={src} alt="" className='h-[18vh] md:w-[40vw] min-md:aspect-square object-cover'/>
                    <div className='leading-7 md:flex-grow xs:text-[14px] xs:leading-6 md:leading-[22px]'>
                        <div className='font-bold text-[20px] md:text-[17px]'>
                            {props.name}
                        </div>
                        <div>Size: {props.size}</div>  
                        <div>Color: {props.color}</div>  

                        <div className='absolute bottom-0 opacity-55 flex gap-8 md:text-[13px] xs:text-[11px] xs:gap-3 lg:invisible md:visible'>
                            <div>Edit</div>
                            <div>Remove</div>
                            <div>Move to wishlist</div>
                        </div>             
                    </div>
                </div>
                <div className='w-[10%] md:hidden'>${Number(props.price).toFixed(2)}</div>
                <div className='text-center w-[10%] flex flex-col md:hidden'><div className='mx-auto border border-1 border-black w-[70%]'>{props.quantity}</div></div>
                <div className='text-end w-[10%] md:hidden'>${Number(props.price * props.quantity).toFixed(2)}</div>            
            </div>
            <div className='min-md:hidden flex justify-between items-center'>
                <div className='w-[37%]'><div className=' text-[15px] py-0 border border-1 border-black w-[45%] mx-auto text-center my-xl'>{props.quantity}</div></div>   
                <div className='text-end'>${Number(props.price).toFixed(2)}</div>                                  
            </div>
            <div className='min-md:hidden text-end font-bold'> Total ${Number(props.price * props.quantity).toFixed(2)}</div>  
        </div>
    )
}

export default CartCard