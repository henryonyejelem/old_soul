import {useState, useEffect}  from 'react'

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
    <div className={`${nav} nav font-NewYork fixed z-40 flex justify-between items-center w-[100vw] py-[10px] transition-all ease-out duration-500`}>        
        <div className="w-[33%]"><img src = {menu} alt=""/></div>
        <p className="text-3xl text-center w-[33% text-primary-100">Old Soul</p>
        <ul className="flex gap-8 w-[33%] justify-end">
            <li><img src = {account} alt=""/></li>
            <li><img src = {wishlist} alt=""/></li>
            <li><img src = {cart} alt=""/></li>
        </ul>
    </div>    
  )
}

export default Nav