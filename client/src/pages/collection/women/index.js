import coat from "../../../assets/images/collection/women/Coat.jpg"
import dress from "../../../assets/images/collection/women/Dresses.jpg"
import pant from "../../../assets/images/collection/women/Pants.jpg"
import skirt from "../../../assets/images/collection/women/Skirts.jpg"
import top from "../../../assets/images/collection/women/Tops.jpg"

function Women() {
  return (
    <div className="pt-[8vh]">
        <div className="flex justify-around text-2xl font-bold bg-primary-300 text-primary-100">
            <div>50% OFF SALE END OF SEASON</div>
            <div>50% OFF SALE END OF SEASON</div>
            <div>50% OFF SALE END OF SEASON</div>
        </div>

        <div className="ml-8 my-7 flex text-xl gap-5">
            <div>Men</div>
            <div className="font-semibold">Women</div>
            <div>Accessories</div>
        </div>

        <div className="categories flex justify-between gap-7 mx-8">
            <div className="">
                <img src={coat} alt=""/>
                <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Coats</p>
            </div>
            <div className="">
                <img src={dress} alt="" />
                <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Dresses</p>
            </div>
            <div className="">
                <img src={top} alt="" />
                <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Tops</p>
            </div>
            <div className="">
                <img src={pant} alt="" />
                <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Pants</p>
            </div>
            <div className="">
                <img src={skirt} alt="" />
                <p className="text-[19px] mt-xl font-bold text-center w-[100%]">Skirts</p>
            </div>
        </div>
    </div>
  )
}

export default Women