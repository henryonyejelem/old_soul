import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'

import { useState } from 'react'

function ExpandButton(props) {
    const [isExpand, setExpand] = useState(props.initial)
    const handleClick = () => {
        setExpand(!isExpand)
    } 
    return (
        isExpand ? <img src={minus} onClick={handleClick} alt=""/> : <img src={plus} onClick={handleClick} alt=""/>
    )
}

export default ExpandButton