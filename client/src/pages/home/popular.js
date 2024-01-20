import img1 from "../../assets/images/home/popular1.jpg"
import img2 from "../../assets/images/home/popular2.jpg"
import img3 from "../../assets/images/home/popular3.jpg"
import img4 from "../../assets/images/home/popular4.jpg"

import Button from "../../components/ui/button"

function Popular() {
  return (
    <div>
        <ul className="flex gap-10 px-[40px]">
            <li><img src={img1} alt="" /></li>
            <li><img src={img2} alt="" /></li>
            <li><img src={img3}alt="" /></li>
            <li><img src={img4} alt="" /></li>
        </ul>

        <div className="px-[40px] my-xl">
            <Button>BROWSE COLLECTION</Button>
        </div>
    </div>
    
  )
}

export default Popular