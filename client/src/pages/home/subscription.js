import Button from '../../components/ui/button.js'
import subscribeImg from '../../assets/images/home/subscribe.jpg'

function Subscription() {
  return (
    <div className='subscribe flex justify-center min-h-[100vh] gap-12 md:flex-col md:items-center'>
        <div className='my-auto'>
            <img src={subscribeImg} alt="" className="h-[75vh] object-cover"/>
        </div>
        <div className="my-auto md:w-[85vw]">
            <p className="font-bold text-primary-200 text-4xl md:text-3xl sm:text-2xl">DONT MISS ANYTHING</p>

            <p>Sign up for promotions, tailored new arrivals, stock updates <br/>
            and more - straight to your inbox</p>

            <div><p className="w-[100%] my-xl text-[#707070]">Email Address</p></div>

            <hr className="h-[2px] bg-[#707070]" />

            <div className="my-xl"><Button>SUBSCRIBE NOW</Button></div>
        </div>
    </div>
  )
}

export default Subscription