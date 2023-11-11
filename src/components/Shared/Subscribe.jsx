const Subscribe = () => {
  return (
    <section className="bg-base-100 flex items-center justify-center">
      <div className=" flex-col flex items-center justify-center w-[596px] pt-24 pb-40 px-10">
        <h2 className="text-[20px] mb-5 text-[#20B15A]">SUBSCRIBE</h2>
       
          <h1 className="text-[30px] text-[#000] font-semibold text-center">
            Subscribe to get the latest news about us
          </h1>
          <p className="text-center">
            Please drop your email below to get daily update about what we do
          </p>
        
        <div className="w-full mt-10 border border-1 border-black rounded-lg p-0.5">
             <div className="relative">
             <input type="text" placeholder="Enter Your Email Address" className="bg-white h-12 w-full px-4 pr-20 rounded-md 
             focus:outline-none hover:cursor-pointer" name="" />
             <button className="h-10 rounded-lg bg-[#F55F1D] absolute top-1 text-sm right-0.5 px-3
              text-white hover:bg-[#f23607] ">Subscribe</button> </div>
            </div>
      </div>
    </section>
  );
};

export default Subscribe;
