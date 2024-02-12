import {useState, useEffect}  from 'react'

import {Link} from 'react-router-dom'

import menu from "../../assets/icons/navMenu.svg"
import account from "../../assets/icons/navAccount.svg"
import wishlist from "../../assets/icons/navWishlist.svg"
import cart from "../../assets/icons/navCart.svg"


function Nav() {

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
    }
    if (window.scrollY !== 0) {
      setIsTopOfPage(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () =>  { window.removeEventListener("scroll", handleScroll); }
  }, [isTopOfPage]);

  const nav = isTopOfPage ? "scale-[115%] px-[155px]" : "scale-[100%] px-[35px] bg-white"
  

  return (    
    <div className={`${nav} nav font-NewYork fixed z-30 flex justify-between items-center w-[100vw] py-[10px] transition-all ease-out duration-500`}>        
        <div className="w-[33%]"><img src = {menu} alt=""/></div>
        <Link to={`/`}><p className="text-3xl text-center w-[33% text-primary-100 cursor-pointer">Old Soul</p></Link>
        <ul className="flex gap-8 w-[33%] justify-end">
            {localStorage.getItem('isLoggedIn') === 'true' ? <li><img src = {account} alt=""/></li> : <Link to={"/signin"}><li><img src = {account} alt=""/></li></Link>}
            {localStorage.getItem('isLoggedIn') === 'true' ? <Link to = {'/wishlist'}><li><img src = {wishlist} alt=""/></li></Link>: <li><img src = {wishlist} alt=""/></li> } 
            {localStorage.getItem('isLoggedIn') === 'true' ? <Link to = {'/cart'}><li><img src = {cart} alt=""/></li></Link> : <li><img src = {cart} alt=""/></li>}
        </ul>
    </div>    
  )
}

export default Nav