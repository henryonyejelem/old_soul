function Popup(props) {
  return (
    <div className = "absolute left-[50%] translate-x-[-50%] bottom-10 z-40 bg-black rounded-full text-white text-sm px-10 py-2 animate-popUp">{props.type} to {props.name}</div>
  )
}

export default Popup