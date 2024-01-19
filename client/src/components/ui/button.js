import React from 'react'

function Button(props) {
  return (
    <div className='w-[100%] text-right'>
        {props.children}       
    </div>
  )
}

export default Button