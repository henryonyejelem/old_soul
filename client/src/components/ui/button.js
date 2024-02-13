import buttonArrow from '../../assets/icons/buttonArrow.svg'

function Button(props) {
  return (
    <div className='flex gap-2 justify-end cursor-pointer'>
        {props.children}  
        <img src={buttonArrow} alt="" className='stroke-2'/>             
    </div>
  )
}

export default Button