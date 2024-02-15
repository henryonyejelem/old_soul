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

  const nav = isTopOfPage ? "lg:px-[80px] lg:scale-[100%] scale-[115%]  px-[155px]" : "md:px-[30px] scale-[100%] px-[35px] bg-white "
  

  return (    
    <div className={`${nav} nav font-NewYork fixed z-30 flex justify-between items-center w-[100vw] py-[10px] transition-all ease-out duration-500 sm:px-[30px]`}>        
        <div className="w-[33%] sm:hidden"><img src = {menu} alt=""/></div>
        <Link to={`/`}><p className="text-[30px] text-center text-primary-100 cursor-pointer sm:text-[30px]">OLD SOUL</p></Link>
        <ul className="flex gap-8 w-[33%] sm:w-auto sm:gap-5 justify-end">
            {localStorage.getItem('isLoggedIn') === 'true' ? <li><img src = {account} alt=""/></li> : <Link to={"/signin"}><li><img src = {account} alt=""/></li></Link>}
            {localStorage.getItem('isLoggedIn') === 'true' ? <Link to = {'/wishlist'}><li><img src = {wishlist} alt=""/></li></Link>: <li><img src = {wishlist} alt=""/></li> } 
            {localStorage.getItem('isLoggedIn') === 'true' ? <Link to = {'/cart'}><li><img src = {cart} alt=""/></li></Link> : <li><img src = {cart} alt=""/></li>}
        </ul>
    </div>    
  )
}

export default Nav