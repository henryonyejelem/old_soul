import BG from "../../assets/images/signin/background.jpg"
import google from "../../assets/icons/google.svg"
import axios from 'axios'

import {useState} from 'react'

import { useNavigate, Link } from "react-router-dom";



function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState(true);

  const navigate = useNavigate();

  const handleSubmitSignIn = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8000/user/signin', {email, password})

      .then(result => {           
          setSuccess(result.data);  
          if(result.data){
            localStorage.setItem('isLoggedIn', 'true')
            navigate("/")
          }                                        
      })
      .catch(err => console.log(err))


  }

  return (
    <div className="min-h-[100vh] flex">
      <div className="w-[60%] lg:w-[100%] flex flex-col items-center">
        <div className="w-[70%]">
          <div className="font-NewYork text-[65px] text-center mt-5 mb-10">Old Soul</div>
          <div className="text-[43px] max-w-max font-medium">
            WHERE STYLE<br/>
            MEETS EXPRESSION
          </div>
          <div className="font-bold text-[19px] flex justify-center gap-2 border border-[#707070] w-[100%] rounded-full py-3 my-[30px]">
            <img src={google} alt=""/>
            <div>Continue with Google</div>
          </div>

          <form action="POST" onSubmit={handleSubmitSignIn}>
            {!success && <div className = "text-[15px] mb-xl font-semibold text-red-600">Incorrect Username or Password</div>} 
            <input onChange={(e) => setEmail(e.target.value)} required className="font-semibold text-[20px] placeholder-[#707070] w-[100%] border-b-[0.11rem] pb-2 border-b-[#707070] outline-none" placeholder="Email"/>
            <input onChange={(e) => setPassword(e.target.value)} required className="my-[30px] font-semibold text-[20px] placeholder-[#707070] w-[100%] border-b-[0.11rem] pb-2 border-b-[#707070] outline-none" placeholder="Password" type="password"/>
          
            <div className="flex justify-between">
              <div className="flex items-center gap-1 font-semibold  text-[#707070]">
                  <input type="checkbox" id="checkbox" name="checkbox"></input>  
                  <div className="font-semibold text-[#707070]">remember me</div>                  
              </div>
              <Link to={"/signup"}><div className="font-semibold  text-[#707070] border-b-[#707070] border-b-[0.11rem] max-w-max">dont have an account?</div></Link>
            </div>                       

            <button type="submit" className="text-white bg-black text-center py-2 text-[20px] my-[30px] w-[100%]">Sign in</button>

            <div className="text-[#707070] flex gap-2 font-semibold">
              <p>forgot password?</p> 
              <p className="text-black">reset password?</p>
            </div> 
          </form>         
        </div>
      </div>   

      <div className="flex-grow lg:hidden">
        <img src={BG} className="h-[100vh] object-cover" alt=""/>
      </div>      
    </div>
  )
}

export default SignIn