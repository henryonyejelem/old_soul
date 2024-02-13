import {Link} from 'react-router-dom'


function Categories() {
    return (
    <div className='gender-categories min-h-[65vh] flex text-xl overflow-clip md:flex-col'>
    
        <Link to={`/collection/men`}>
            <div className='men w-[50vw] relative md:w-[100vw] h-[60vh]'>
                <p className='w-[80%] absolute top-[70%] left-[50%] translate-x-[-50%] bg-white z-40 text-center py-1 hover:bg-black hover:text-white md:top-[80%]'>MEN</p>
            </div>
        </Link>
        <Link to={`/collection/women`}>
            <div className='women w-[50vw] relative md:w-[100vw] h-[60vh]'>
            <p className='w-[80%] absolute top-[70%] left-[50%] translate-x-[-50%] bg-white z-40 text-center py-1 hover:bg-black hover:text-white md:top-[80%]'>WOMEN</p>
            </div>  
        </Link>
             
    </div>
    )
}

export default Categories