import { useParams, Link, useLocation } from 'react-router-dom'
import {useState ,useEffect} from 'react'
import axios from "axios"

import { useContext } from 'react'
import {CartContext} from "../../context/cartContext.js"
import { useWishlist } from '../../context/wishlistContext.js'
import Heart from '../../components/ui/heart.js'
import CategoryNav from "../../components/ui/categoryNav.js"
import rating from "../../assets/icons/5Stars.svg"; 
import getSizeString from '../../components/functionality/getSizeString.js'
import colorToHex from '../../components/functionality/colorToHex.js'
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'
import Card from '../../components/ui/card.js';



function Product() {
  const { productID } = useParams()
  const { category } = useParams()
  const { gender } = useParams()

  const [product, setProduct] = useState({
    name : "",
    ID : "",
    colors : [""],
    tags : "",
});
  const [continueShopping, setContinue] = useState([]);

  let url1 = `http://localhost:8000/${gender}/${productID}`;
  let url2 = `http://localhost:8000/${gender}/continueshopping/${productID}`;

  useEffect(() => {              
      axios.get(url1)
      .then(result => {
          setProduct(result.data);
      })
  }, [url1])

  useEffect(() => {              
    axios.get(url2)
    .then(result => {
        setContinue(result.data);
    })
  }, [url2])

  const { dispatch } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const img = require(`../../assets/images/collection/${gender}/${productID}.jpg`); 

  const g = gender.charAt(0).toUpperCase() + gender.slice(1)
  const c = category.charAt(0).toUpperCase() + category.slice(1) 
  
  const [color, setColor] = useState(0)
  const [size, setSize] = useState('M')
  const [expanded, setExpanded] = useState('Description')

  const outline = 'outline outline-2 outline-offset-2 outline-primary-400 font-bold'

  function handleColorClick(num){
    setColor(num)
  }

  function handleSizeClick(size){
    setSize(size)
  }

  const handleAddToCart = () => {
    const item = {name : product.name, price : product.price, ID : productID, size : getSizeString(size), color : product.colors[color], gender : gender}
    console.log(`${item.name} has been added to cart`)
    dispatch({ type: 'ADD_TO_CART', payload: item })
  };

  function handleButtonClick(section){
    if(section === expanded) setExpanded('')
    else setExpanded(section)
  }

  const location = useLocation();
  const [isFilled, setIsFilled] = useState(false);
  
  useEffect(() => {
    setIsFilled(isInWishlist(productID)); // eslint-disable-next-line
  }, [location])

  const item = {name : product.name, price : product.price, ID : product.ID, category : product.tags, gender : gender}
  const handleHeartClick = () => {    
    if(!isFilled){      
      console.log(`${item.name} has been added to wishlist`)
      addToWishlist(item);  
    }
    else{
      console.log(`${item.name} has been removed from wishlist`)  
      removeFromWishlist(item.ID);      
    }
    setIsFilled(!isFilled)  
      
  };
  
  return (
    <div className="pt-[8vh]">
      <CategoryNav/>
      <div className="flex gap-11 mx-8">
        <div className='w-[50%] h-[90vh] relative'>
          <img src = {img} alt="" className='w-[100%] h-[100%] object-cover'/>
          <Heart filled={isFilled} onClick={handleHeartClick} />
        </div>

        <div className='w-[48%] text-base leading-9'>
          <div className='flex gap-2 text-sm text-[#656565] font-medium'>
            <div className='underline underline-offset-4'><Link to={`/collection/${gender}`}>{g}</Link></div>
            <div>{'>'}</div>
            <div className='underline underline-offset-4'>{c}</div>
            <div>{'>'}</div>
            <div>{product.name}</div>
          </div>

          <div className='flex font-bold justify-between text-[30px]'>
            <p className=' w-[70%]'>{product.name}</p>
            <p>${Number(product.price).toFixed(2)}</p>
          </div>

          <div className='flex gap-2 items-center'>
            <img src={rating} alt=""/>
            <p>5.0</p>
            <div className='flex'>(<p className='underline underline-offset-4'>30</p>)</div>
          </div>

          {<div className='mb-[3px]'>{product.colors[color]}</div>}

          <div className='flex gap-4'>
            {product.colors.map((item, pos) => 
              <button className={`h-[35px] w-[35px] rounded-full ${color===pos ? outline : null}`} onClick={() => handleColorClick(pos)} style={{backgroundColor : colorToHex(item)}}></button>
            )}            
          </div>

          <div className='flex gap-5 my-[15px]'>
            <button className={`rounded-[5px] border-black w-[65px] text-center py-[1px] ${size==='XS' ? `${outline} border-[0.125rem]` : 'border-[0.0915rem]'}`
            } onClick={ () => handleSizeClick('XS')}>XS</button>
            <button className={`rounded-[5px] border-black w-[65px] text-center py-[1px] ${size==='S' ? `${outline} border-[0.125rem]` : 'border-[0.0915rem]'}`
            } onClick={ () => handleSizeClick('S')}>S</button>
            <button className={`rounded-[5px] border-black w-[65px] text-center py-[1px] ${size==='M' ? `${outline} border-[0.125rem]` : 'border-[0.0915rem]'}`
            } onClick={ () => handleSizeClick('M')}>M</button>
            <button className={`rounded-[5px] border-black w-[65px] text-center py-[1px] ${size==='L' ? `${outline} border-[0.125rem]` : 'border-[0.0915rem]'}`
            } onClick={ () => handleSizeClick('L')}>L</button>
            <button className={`rounded-[5px] border-black w-[65px] text-center py-[1px] ${size==='XL' ? `${outline} border-[0.125rem]` : 'border-[0.0915rem]'}`
            } onClick={ () => handleSizeClick('XL')}>XL</button>
            <button className={`rounded-[5px] border-black w-[65px] text-center py-[1px] ${size==='XXL' ? `${outline} border-[0.125rem]` : 'border-[0.0915rem]'}`
            } onClick={ () => handleSizeClick('XXL')}>XXL</button>
            <button className={`rounded-[5px] border-black w-[65px] text-center py-[1px] ${size==='XXXL' ? `${outline} border-[0.125rem]` : 'border-[0.0915rem]'}`
            } onClick={ () => handleSizeClick('XXXL')}>XXXL</button>        
          </div>

          <button className='w-[100%] bg-black text-white text-center my-xl py-2 font-semibold text-sm' onClick={handleAddToCart}>ADD TO BAG</button>

          <div>4 interest-free payments of ${Number(product.price/4).toFixed(2)} with Klarna.</div>

          <hr className='border-black border-[0.035rem] my-xl'/>


          <div>
            <div className='flex justify-between items-center' onClick={()=>handleButtonClick('Description')}>
              <div className='text-xl mb'>Description & Fit</div>
              {expanded === 'Description' ?  <img src={minus} alt=""/> : <img src={plus} alt=""/>}
            </div>
            {expanded === 'Description' && <p className='w-[95%] mt-xl'>
              A perfect blend of elegance and contemporary style. This chic dress is designed to make a statement with 
              its sophisticated silhouette and feminine details. 
              The ruffled sleeves add a touch of romance, creating a graceful and eye-catching look.
            </p>}
          </div>

          <hr className='border-black border-[0.035rem] my-xl transition-all'/>

          <div>
            <div className='flex justify-between items-center' onClick={()=>handleButtonClick('Materials')}>
              <div className='text-xl mb'>Materials</div>
              {expanded === 'Materials' ? <img src={minus} alt=""/> : <img src={plus} alt=""/>}
            </div>
            {expanded === 'Materials' && <p className='w-[95%] mt-xl'>
            Meticulously crafted from high-grade, durable cotton, 
            the exterior shell offers unparalleled protection against everyday wear 
            and tear while exuding sophistication and style.
            </p>}
          </div>

          <hr className='border-black border-[0.035rem] my-xl'/>

          <div>
            <div className='flex justify-between items-center' onClick={()=>handleButtonClick('Shipping')}>
              <div className='text-xl mb'>Shipping & Returns</div>
              {expanded === 'Shipping' ?  <img src={minus} alt=""/> : <img src={plus} alt=""/>}
            </div>
            {expanded === 'Shipping' && <p className='w-[95%] mt-xl' >
            We offer a range of delivery options to suit your needs, including standard and expedited shipping. 
            Please refer to our shipping policy for detailed information 
            on delivery times and charges.
            </p>}
          </div>

        </div>
      </div>
      
      <div className='ml-8 mt-[50px] text-[30px]'>Continue Shopping</div>

      <div className="mx-8 grid grid-cols-4 gap-6 my-xl">
        {continueShopping.map(item => <Card name={item.name} price={item.price} src={item.ID} gender={gender} category={item.tags}/>)}
      </div>
      


    </div>
  )
}

export default Product