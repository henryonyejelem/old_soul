function Information() {
  return (
    <div className="flex flex-col gap-6 mr-[100px]">
        <div className="font-semibold text-xl">
            Shipping Information
        </div>

        <div className="flex gap-3 text-[13px]">
            <input placeholder="First Name" className="border pl-2 py-1 border-[#707070] flex-grow"/>
            <input placeholder="Last Name" className="border pl-2 py-1 border-[#707070] flex-grow" />
        </div>
       
        <input placeholder="Street Address" className="text-[13px] border pl-2 py-1 border-[#707070] w-[100%]" />

        <input placeholder="Company" className="text-[13px] border pl-2 py-1 border-[#707070] w-[100%]" />

        <input placeholder="Apartment, suite, etc (optional)" className="text-[13px] border pl-2 py-1 border-[#707070] w-[100%]" />

        <div className="flex gap-3 text-[13px]">
            <input placeholder="City" className="border pl-2 py-1 border-[#707070] flex-grow"/>
            <input placeholder="Postcode" className="border pl-2 py-1 border-[#707070] flex-grow" />
        </div>

        <input placeholder="Phone (optional)" className="text-[13px] border pl-2 py-1 border-[#707070] w-[100%]" />

        <div className="flex items-center gap-1">
            <input type="checkbox" id="checkbox" name="checkbox"></input>  
            <div className="text-[13px]">Use as billing address</div>                  
        </div>
        
        <button className="bg-black text-white font-medium py-2 text-[13px]">Next</button>

        <div className="text-[13px] flex gap-1 font-semibold">
            <div>{'<'}</div>
            <div>continue shopping</div>
        </div>
    </div>
  )
}

export default Information