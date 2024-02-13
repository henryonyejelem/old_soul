import insta from "../../assets/icons/Instagram Logo.svg"
import twitter from "../../assets/icons/Twitter Logo.svg"
import facebook from "../../assets/icons/Facebook Logo.svg"
function Footer() {
  const handleClick = () => {
    localStorage.setItem("isLoggedIn", "false")
    window.scroll(0,0)
    window.location.reload();
  }

  return (
    <div className="min-h-[15vh] bg-black text-white flex justify-between w-[100vw] md:justify-center sm:text-[11px]">
        <div className="self-center text-4xl font-NewYork w-[33%] pl-5 md:hidden">Old Soul</div>
        <div className="w-[33%] flex-col justify-center">
            <div className="flex justify-center gap-12 py-3 sm:gap-4">
                <div>Help</div>
                <div>Contact</div>
                <div>Stores</div>
                <div>Privacy</div>
                <div>Terms</div>
                <button onClick={handleClick}>Logout</button>
            </div>

            <ul className="flex justify-center gap-12">
                <li><img src={insta} alt="" /></li>
                <li><img src={facebook} alt="" /></li>
                <li><img src={twitter} alt="" /></li>
            </ul>

            <div className="py-3 text-center">© 2024 Old Soul. All rights reserved. oldsoul.com</div>
            
        </div>
        <div className="w-[33%] md:hidden">            
        </div>
    </div>
  )
}

export default Footer