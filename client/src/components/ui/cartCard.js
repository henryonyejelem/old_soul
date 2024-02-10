import React from 'react'

function CartCard(props) {
    const src = require(`../../assets/images/collection/${props.gender}/${props.src}.jpg`)
    return (
        <div className='flex mb-[5vh] justify-between'>
            <div className='flex gap-3 w-[60%] relative'> 
                <img src={src} alt="" className='h-[18vh] aspect-square object-cover'/>
                <div className='leading-7'>
                    <div className='font-bold text-[20px] '>
                        {props.name}
                    </div>
                    <div>Size: {props.size}</div>  
                    <div>Color: {props.color}</div>  

                    <div className='absolute bottom-0 opacity-55 flex gap-8'>
                        <div>Edit</div>
                        <div>Remove</div>
                        <div>Move to wishlist</div>
                    </div>             
                </div>
            </div>
            <div className='w-[10%]'>${Number(props.price).toFixed(2)}</div>
            <div className='text-center w-[10%] flex flex-col'><div className='mx-auto border border-1 border-black w-[70%]'>{props.quantity}</div></div>
            <div className='text-end w-[10%]'>${Number(props.price).toFixed(2)}</div>
        </div>
    )
}

export default CartCard