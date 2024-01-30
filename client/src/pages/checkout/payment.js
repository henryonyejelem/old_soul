import plus from "../../assets/icons/plus.svg"
import minus from "../../assets/icons/minus.svg"

import {useState} from 'react'

function Payment() {
    const [expanded, setExpanded] = useState('Card')
    function handleButtonClick(section){
        if(section === expanded) setExpanded('')
        else setExpanded(section)
    }
    
  return (
    <div>
        <div>
            <div className='flex justify-between items-center' onClick={()=>handleButtonClick('Description')}>
              <div className='text-xl mb'>Card Payments</div>
              {expanded === 'Card' ?  <img src={minus} alt=""/> : <img src={plus} alt=""/>}
            </div>
            {expanded === 'Card' && <p className='w-[95%] mt-xl'>
             
            </p>}
          </div>

          <hr className='border-black border-[0.035rem] my-xl transition-all'/>

          <div>
            <div className='flex justify-between items-center' onClick={()=>handleButtonClick('Materials')}>
              <div className='text-xl mb'>Pay over time with klarna</div>
              {expanded === 'Klarna' ? <img src={minus} alt=""/> : <img src={plus} alt=""/>}
            </div>
            {expanded === 'Klarna' && <p className='w-[95%] mt-xl'>
              
            </p>}
          </div>

          <hr className='border-black border-[0.035rem] my-xl'/>

          <div>
            <div className='flex justify-between items-center' onClick={()=>handleButtonClick('Shipping')}>
              <div className='text-xl mb'>Paypal</div>
              {expanded === 'Paypal' ?  <img src={minus} alt=""/> : <img src={plus} alt=""/>}
            </div>
            {expanded === 'Paypal' && <p className='w-[95%] mt-xl' >
             
            </p>}
          </div>
    </div>
  )
}

export default Payment