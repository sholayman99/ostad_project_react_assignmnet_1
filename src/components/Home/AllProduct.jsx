import ImagesContainer from "./ImagesContainer";
import SingleImage from "./SingleImage";


const AllProduct = () => {
    
    return (
        <main className="lg:px-20 px-6 py-10 lg:py-16 flex flex-col gap-10">
        <section className="lg:w-[40%] w-[70%]">
          <h2 className="text-[#20B15A] lg:text-[20px] text-[16px] font-medium ">
          Featured Project
          </h2>
          <h1 className="lg:text-[30px] text-[20px] font-bold  text-[#000] ">
          We provide the Perfect Solution to your business growth
          </h1>
        </section>
        <section className=" grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-5">
        
       <div className="">
        <SingleImage />
       </div>
       <div>
        <ImagesContainer />
       </div>
       
        </section>
      </main>
    );
};

export default AllProduct;