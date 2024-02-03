function CategoryNav(props) {
  return (
    <div className="ml-8 my-7 flex text-xl gap-5">
        <div className={`${props.active==="men" && "font-semibold"}`}>Men</div>
        <div className={`${props.active==="women" && "font-bold"}`}>Women</div>
        <div className={``}>Accessories</div>
    </div>
  )
}

export default CategoryNav