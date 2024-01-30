import db from "../../data/women.js"
import CheckoutCard from "../../components/ui/checkoutCard.js";
function Review() {
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

  const cartlist = getRandomItems(db, 4)
  const sum = Number(cartlist.reduce((acc, obj) => acc + obj.price, 0)).toFixed(2);
  const tax = Number(cartlist.reduce((acc, obj) => acc + obj.price, 0)*(9.25/100)).toFixed(2);
  const total = Number(cartlist.reduce((acc, obj) => acc + obj.price, 0)*1.0925).toFixed(2);
  return (
    <div className="">
      
      <div className="text-[30px] mb-xl font-semibold">Review</div> 

      
        <div className="">

          <div className="">
            {cartlist.map(item => <CheckoutCard name={item.name} price={item.price} src={item.ID}/>)}
          </div>
          
          <button className="bg-black text-white font-medium py-2 text-[15px] w-[100%] my-[24px]">Pay</button>

            <div className="text-[15px] flex gap- font-semibold pb-[70px]">
                <div>{'<'}</div>
                <div>continue shopping</div>
            </div>

        </div>

   

    </div>
  )
}

export default Review