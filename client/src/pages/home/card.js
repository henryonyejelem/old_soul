function Card(props) {
  return (
    <div className="w-[22vw] sm:w-[65vw] md:w-[50vw]">
        <img src={props.img} alt="" className=""           
        />
        <div className="flex justify-between font-semibold text-[14px] mt-[5px] sm:text-[16px]">
            <p>{props.name}</p>
            <p>{`$${props.price}`}</p>
        </div>
    </div>   
  )
}

export default Card