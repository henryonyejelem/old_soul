import menu from "../../assets/icons/navMenu.svg"
import account from "../../assets/icons/navAccount.svg"
import wishlist from "../../assets/icons/navWishlist.svg"
import cart from "../../assets/icons/navCart.svg"

function nav() {
  return (    
    <div className="nav font-NewYork absolute top-2 z-40 text-primary-100 flex justify-between items-center w-[100vw] px-[35px] py-[10px]">        
        <div className="w-[33%]"><img src = {menu} alt=""/></div>
        <p className="text-3xl text-primary-100 text-center w-[33%]">Old Soul</p>
        <ul className="flex gap-8 w-[33%] justify-end">
            <li><img src = {account} alt=""/></li>
            <li><img src = {wishlist} alt=""/></li>
            <li><img src = {cart} alt=""/></li>
        </ul>
    </div>    
  )
}

export default nav