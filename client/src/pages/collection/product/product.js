import { useParams, Link } from 'react-router-dom'
import db from "../../../data/women.js"
import rating from "../../../assets/icons/5Stars.svg"; 
import ExpandButton from '../../../components/ui/expand.js';
import Card from '../card.js';

function Product() {

  const { productID } = useParams()
  const { category } = useParams()
  const { gender } = useParams()
  const g = gender.charAt(0).toUpperCase() + gender.slice(1)
  const c = category.charAt(0).toUpperCase() + category.slice(1)

  const product = db.find((e) => e.ID === productID)

  const img = require(`../../../assets/images/collection/women/${productID}.jpg`); 

  function getRandomItems(array, numItems) {
    const randomItems = [];
    const arrayLength = array.length;

    if (numItems > arrayLength) {
        console.error("Number of items requested exceeds the length of the array.");
        return;
    }

    const indices = new Set();
    while (indices.size < numItems) {
        const randomIndex = Math.floor(Math.random() * arrayLength);
        indices.add(randomIndex);
    }

    indices.forEach(index => {
        randomItems.push(array[index]);
    });

    return randomItems;
  }

  function removeItemById(list, id) {
      // Find the index of the item with the given id
      const index = list.findIndex(item => item.ID === id);

      // If the item with the given id exists, remove it from the list
      if (index !== -1) {
          list.splice(index, 1);
          return true;
      } else {
          return false;
      }
  }

  const list = getRandomItems(db, 5)

  const continueShoppingList = removeItemById(list, productID) ? list : list.splice(0, 4)
  

  
  return (
    <div className="pt-[8vh]">
      <div className="ml-8 my-7 flex text-xl gap-5">
          <div>Men</div>
          <div>Women</div>
          <div>Accessories</div>
      </div>
      <div className="flex gap-11 mx-8">
        <div className='w-[50%] h-[90vh]'><img src = {img} alt="" className='w-[100%] h-[100%] object-cover'/></div>

        <div className='w-[48%] text-base leading-9'>
          <div className='flex gap-2 text-sm text-[#656565] font-medium'>
            <div className='underline underline-offset-4'><Link to={`/collection/women`}>{g}</Link></div>
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

          <div>Grey Metal</div>

          <div className='flex gap-4'>
            <div className='h-[35px] w-[35px] rounded-full bg-[#232936] outline outline-2 outline-offset-2 outline-primary-400'></div>
            <div className='h-[35px] w-[35px] rounded-full bg-[#850A39]'></div>
            <div className='h-[35px] w-[35px] rounded-full bg-[#BB9C80]'></div>
          </div>

          <div className='flex gap-5 my-[15px]'>
            <div className='border-[0.0915rem] rounded-[5px] border-black w-[65px] text-center py-[1px]'>XS</div>
            <div className='border-[0.0915rem] rounded-[5px] border-black w-[65px] text-center py-[1px]'>S</div>
            <div className='border-[0.165rem] rounded-[5px] border-black w-[65px] font-bold text-center py-[1px] 
            outline outline-2 outline-offset-2 outline-primary-400'>M</div>
            <div className='border-[0.0915rem] rounded-[5px] border-black w-[65px] text-center py-[1px]'>L</div>
            <div className='border-[0.0915rem] rounded-[5px] border-black w-[65px] text-center py-[1px]'>XL</div>
            <div className='border-[0.0915rem] rounded-[5px] border-black w-[65px] text-center py-[1px]'>XXL</div>
            <div className='border-[0.0915rem] rounded-[5px] border-black w-[65px] text-center py-[1px]'>XXXL</div>            
          </div>

          <div className='w-[100%] bg-black text-white text-center my-xl py-2 font-semibold text-sm'>ADD TO BAG</div>

          <div>4 interest-free payments of ${Number(product.price/4).toFixed(2)} with Klarna.</div>

          <hr className='border-black border-[0.035rem] my-xl'/>

          <div>
            <div className='flex justify-between items-center'>
              <div className='text-xl mb'>Description & Fit</div>
              <ExpandButton initial = {true}/>
            </div>
            <p className='w-[95%] mt-xl'>
              A perfect blend of elegance and contemporary style. This chic dress is designed to make a statement with 
              its sophisticated silhouette and feminine details. 
              The ruffled sleeves add a touch of romance, creating a graceful and eye-catching look.
            </p>
          </div>

          <hr className='border-black border-[0.035rem] my-xl'/>

          <div>
            <div className='flex justify-between items-center'>
              <div className='text-xl'>Materials</div>
              <ExpandButton initial = {false}/>
            </div>
            <p className='w-[95%] mt-xl'>
            </p>
          </div>

          <hr className='border-black border-[0.035rem] my-xl'/>

          <div>
            <div className='flex justify-between items-center'>
              <div className='text-xl'>Shipping and Returns</div>
              <ExpandButton initial = {false}/>
            </div>
            <p className='w-[95%] mt-xl'>
            </p>
          </div>

        </div>

      </div>
      <div className='ml-8 mt-[50px] text-[30px]'>Continue Shopping</div>

      <div className="mx-8 grid grid-cols-4 gap-6 my-xl">
        {continueShoppingList.map(item => <Card name={item.name} price={item.price} src={item.ID}/>)}
      </div>


    </div>
  )
}

export default Product