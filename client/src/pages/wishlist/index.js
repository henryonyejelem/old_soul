import dropdown from "../../assets/icons/dropdown.svg"

import Card from '../../components/ui/card.js';

import { useWishlist } from '../../context/wishlistContext.js'


function Wishlist() {
    const { wishlistItems } = useWishlist();
    const wishlist = wishlistItems   
    

    
    return (
        <div className="pt-[150px] min-h-[100vh]">
            <div className="flex justify-center">
                <div className="flex flex-col items-center">
                    <div className="text-center text-[40px] font-bold max-w-max">Your Dream Closet Awaits in Your Wishlist!</div> 
                    <div className="text-center text-[20px] w-[70%] my-xl">Unleash your creativity, explore the endless possibilities, and, in doing so, bring your fashion desires to vibrant life.</div> 
                </div>
            </div>

            <div className="flex justify-center my-2 mx-8">
                <div className="flex text-base gap-[50px] font-medium">
                    <div className="flex gap-1">
                        <p>Season</p>
                        <img src={dropdown} alt="" className="h-[9px] translate-y-[10px]"/>
                    </div>
                    <div className="flex gap-1">
                        <p>Size</p>
                        <img src={dropdown} alt="" className="h-[9px] translate-y-[10px]"/>
                    </div>
                    <div className="flex gap-1">
                        <p>Price</p>
                        <img src={dropdown} alt="" className="h-[9px] translate-y-[10px]"/>
                    </div>
                    <div>Customer Top Rated</div>
                    <div>Offers</div>
                </div>
            </div>

            <div className="mx-8 grid grid-cols-4 gap-6 my-xl">
                {wishlist.map(item => <Card name={item.name} price={item.price} src={item.ID} gender={item.gender} category={item.tag} />)}
            </div>

            
            

        </div>
    )
}

export default Wishlist