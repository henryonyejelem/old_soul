import insta from "../../assets/icons/Instagram Logo.svg"
import twitter from "../../assets/icons/Twitter Logo.svg"
import facebook from "../../assets/icons/Facebook Logo.svg"
function Footer() {
  return (
    <div className="h-[15vh] mt-[50px] bg-black text-white flex justify-between">
        <div className="self-center text-4xl font-NewYork w-[33%] pl-5">Old Soul</div>
        <div className="w-[33%] flex-col justify-center">
            <ul className="flex justify-center gap-12 py-3">
                <li>Help</li>
                <li>Contact</li>
                <li>Stores</li>
                <li>Privacy</li>
                <li>Terms</li>
            </ul>

            <ul className="flex justify-center gap-12">
                <li><img src={insta} alt="" /></li>
                <li><img src={facebook} alt="" /></li>
                <li><img src={twitter} alt="" /></li>
            </ul>

            <div className="py-3 text-center">© 2024 Old Soul. All rights reserved. oldsoul.com</div>
            
        </div>
        <div className="w-[33%]">            
        </div>
    </div>
  )
}

export default Footer