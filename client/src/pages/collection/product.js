import { useParams } from 'react-router-dom'
import db from "../../data/women.js"

function Product() {

  const { productID } = useParams()
  const { category } = useParams()
  const { gender } = useParams()
  const g = gender.charAt(0).toUpperCase() + gender.slice(1)
  const c = category.charAt(0).toUpperCase() + category.slice(1)

  const product = db.find((e) => e.ID === productID)

  const img = require(`../../assets/images/collection/women/${productID}.jpg`); 
  return (
    <div className="pt-[8vh]">
      <div className="ml-8 my-7 flex text-xl gap-5">
          <div>Men</div>
          <div>Women</div>
          <div>Accessories</div>
      </div>
      <div className="flex gap-11 mx-8">
        <div className='w-[48%] h-[90vh]'><img src = {img} alt="" className='w-[100%] h-[100%] object-cover'/></div>

        <div className='flex-auto'>
          <div className='flex gap-2 text-sm text-[#656565] font-medium'>
            <div className='underline underline-offset-4'>{g}</div>
            <div>{'>'}</div>
            <div className='underline underline-offset-4'>{c}</div>
            <div>{'>'}</div>
            <div>{product.name}</div>
          </div>

          <div className='flex font-bold justify-between text-2xl'>
            <p className=''>{product.name}</p>
            <p>{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product