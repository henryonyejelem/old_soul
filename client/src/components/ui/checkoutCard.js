import React from 'react'

function CheckoutCard(props) {
    const src = require(`../../assets/images/collection/${props.gender}/${props.src}.jpg`)

    return (
        <div className='flex mb-[5vh] justify-between gap-4 md:gap-0 md:flex-col md:mb-3'>
            <div className='flex gap-3 w-[90%] relative md:w-[100%] md:flex-col'> 
                <img src={src} alt="" className='h-[18vh] aspect-square object-cover'/>
                <div className='leading-7'>
                    <div className='font-bold text-[20px] lg:text-[18px]'>
                        {props.name}
                    </div>
                    <div>Size: Medium</div>  
                    <div>Color: Dark Brown</div>                                 
                </div>
            </div>
            <div className='text-[20px] font-bold lg:text-[18px] md:hidden'>${Number(props.price * props.quantity).toFixed(2)}</div>
            <div className='text-[20px] font-bold lg:text-[18px] min-md:hidden'>Total ${Number(props.price * props.quantity).toFixed(2)}</div>
        </div>
    )
}

export default CheckoutCard