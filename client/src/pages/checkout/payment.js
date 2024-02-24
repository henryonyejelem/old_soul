import plus from "../../assets/icons/plus.svg"
import minus from "../../assets/icons/minus.svg"
import visa from "../../assets/icons/visaCard.png"
import master from "../../assets/icons/amexCard.png"
import discover from "../../assets/icons/discover.png"
import amex from "../../assets/icons/masterCard.png"
import klarna from "../../assets/icons/klarna.png"
import paypal from "../../assets/icons/paypal.png"

import {useState} from 'react'

function Payment(props) {
    const [expanded, setExpanded] = useState('Card')
    function handleButtonClick(section){
        if(section === expanded) setExpanded('')
        else setExpanded(section)
    }

    const handleClick = () => {
        props.handler("review")
    }
    
  return (
    <div className="lg:mr-[100px] xs:mr-4">
        <div className="font-semibold text-[30px] md:text-[25px]">
            Payment
        </div>
       
        <hr className='border-black bg-black border-[0.035rem] my-xl transition-all'/>

        <div>
        <div className='flex justify-between items-center' onClick={()=>handleButtonClick('Card')}>
            <div className="flex gap-3 md:gap-1">
                <div className='text-[20px] font-medium md:text-[17px]'>Card Payments</div>
                <div className='flex gap-1'>
                    <img src={visa} alt="" className="md:h-[22px]"/>
                    <img src={amex} alt="" className="md:h-[22px]"/>
                    <img src={discover} alt="" className="md:h-[22px]"/>
                    <img src={master} alt="" className="md:h-[22px]"/>
                </div>
            </div>
            {expanded === 'Card' ?  <img src={minus} alt=""/> : <img src={plus} alt=""/>}
        </div>
        {expanded === 'Card' && 
        <div className="w-[90%] flex flex-col gap-7 mt-xl"> 
            <input placeholder="Card Number" className="border pl-2 py-1 border-[#707070] w-[100%]" />           
            <div className="flex gap-3 md:flex-col md:gap-7">
                <input placeholder="Expiry Date" className="border pl-2 py-1 border-[#707070] flex-grow"/>
                <input placeholder="CVC/CVV" className="border pl-2 py-1 border-[#707070] flex-grow" />
            </div>            
            <input placeholder="Name on card" className="border pl-2 py-1 border-[#707070] w-[100%]" />
        </div>
            
        
        }
        </div>

        <hr className='border-black bg-black border-[0.035rem] my-xl transition-all'/>

        <div>
        <div className='flex justify-between items-center' onClick={()=>handleButtonClick('Klarna')}>
            <div className="flex gap-2">
                <div className='text-[20px] mb md:text-[17px]'>Pay over time with klarna</div>
                <img src={klarna} alt=""/>
            </div>
            {expanded === 'Klarna' ? <img src={minus} alt=""/> : <img src={plus} alt=""/>}
        </div>
        {expanded === 'Klarna' && <p className='w-[95%] mt-xl'>
            
        </p>}
        </div>

        <hr className='border-black bg-black border-[0.035rem] my-xl'/>

        <div>
            <div className='flex justify-between items-center' onClick={()=>handleButtonClick('Paypal')}>
                <div className="flex gap-2">
                    <div className='text-[20px] md:text-[17px]'>Paypal</div>
                    <img src={paypal} alt=""/>
                </div>
                {expanded === 'Paypal' ?  <img src={minus} alt=""/> : <img src={plus} alt=""/>}
            </div>
            {expanded === 'Paypal' && <p className='w-[95%] mt-xl' >
                
            </p>}
        </div>

        <hr className='border-black bg-black border-[0.035rem] my-xl transition-all'/>

        <button className="bg-black text-white font-medium py-2 text-[15px] w-[100%] my-[24px]" onClick={handleClick}>Next</button>

        <div className="text-[15px] flex gap-1 font-semibold">
            <div>{'<<<'}</div>
            <div>shipping information</div>
        </div>

    </div>
  )
}

export default Payment