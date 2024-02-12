import { Link } from 'react-router-dom'
function Card(props) {
  const src = props.src;
  const image = require(`../../assets/images/collection/${props.gender}/${src}.jpg`);  

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    })
  }
  
  return (
      <Link to={`/collection/${props.gender}/${props.category}/${props.name}/${props.src}`} onClick={handleClick} >
        <div className="relative">
            <img src={image} alt=""/>          
            <p className="w-[100%] text-center mt-2">{props.name}</p>
            <p className="w-[100%] text-center">${Number(props.price).toFixed(2)}</p>
        </div>
      </Link>
    )
}

export default Card