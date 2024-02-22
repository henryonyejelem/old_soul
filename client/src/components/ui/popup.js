function Popup(props) {
  return (
    <div className = "fixed left-[50%] translate-x-[-50%] bottom-8 z-40 bg-black rounded-full text-white text-sm px-10 py-2 animate-popUp">{props.type} to {props.name}</div>
  )
}

export default Popup