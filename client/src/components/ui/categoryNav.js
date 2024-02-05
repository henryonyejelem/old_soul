import {Link} from "react-router-dom"
function CategoryNav(props) {
  return (
    <div className="ml-8 my-7 flex text-xl gap-5">
        <div className={`${props.active==="men" && "font-semibold"}`}><Link to={"/collection/men"}>Men</Link></div>
        <div className={`${props.active==="women" && "font-bold"}`}><Link to={"/collection/women"}>Women</Link></div>
        <div className={``}>Accessories</div>
    </div>
  )
}

export default CategoryNav