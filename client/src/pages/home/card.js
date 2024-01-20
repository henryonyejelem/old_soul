function Card(props) {
  return (
    <div className="w-[22vw]">
        <img src={props.img} alt="" className=""/>
        <div className="flex justify-between font-semibold text-[14px] mt-[5px]">
            <p>{props.name}</p>
            <p>{`$${props.price}`}</p>
        </div>
    </div>   
  )
}

export default Card