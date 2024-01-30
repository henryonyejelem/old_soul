import React from 'react'

function CheckoutCard(props) {
    const src = require(`../../assets/images/collection/women/${props.src}.jpg`)

    return (
        <div className='flex mb-[5vh] justify-between'>
            <div className='flex gap-3 w-[90%] relative'> 
                <img src={src} alt="" className='h-[18vh] aspect-square object-cover'/>
                <div className='leading-7'>
                    <div className='font-bold text-[20px] '>
                        {props.name}
                    </div>
                    <div>Size: Medium</div>  
                    <div>Color: Dark Brown</div>                                 
                </div>
            </div>
            <div className='w-[10%] text-[20px] font-bold'>${Number(props.price).toFixed(2)}</div>
        </div>
    )
}

export default CheckoutCard