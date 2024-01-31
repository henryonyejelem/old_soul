import BG from "../../assets/images/signin/background.jpg"
import google from "../../assets/icons/google.svg"
function SignIn() {
  return (
    <div className="min-h-[100vh] flex">
      <div className="w-[60%] flex flex-col items-center">
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
          <div className="border-b-[0.11rem] pb-2 font-semibold text-[20px] border-b-[#707070] text-[#707070]">
            Email
          </div>
          <div className="border-b-[0.11rem] pb-2 font-semibold text-[20px] border-b-[#707070] text-[#707070] my-[30px]">
            Password
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1 font-semibold  text-[#707070]">
                <input type="checkbox" id="checkbox" name="checkbox"></input>  
                <div className="font-semibold text-[#707070]">remember me</div>                  
            </div>
            <div className="font-semibold  text-[#707070] border-b-[#707070] border-b-[0.11rem] max-w-max">dont have an account?</div>
          </div>

          <div className="text-white bg-black text-center py-2 text-[20px] my-[30px]">Sign in</div>

          <div className="text-[#707070] flex gap-2 font-semibold">
            <p>forgot password?</p> 
            <p className="text-black">reset password?</p></div>
          
        </div>
      </div>   

      <div className="flex-grow ">
        <img src={BG} className="h-[100vh] object-cover" alt=""/>
      </div>      
    </div>
  )
}

export default SignIn