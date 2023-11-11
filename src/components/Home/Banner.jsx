import Rectangle1 from "../../assets/image/Rectangle1.png";
import Rectangle2 from "../../assets/image/Rectangle2.png";
import Rectangle3 from "../../assets/image/Rectangle3.png";
import Rectangle4 from "../../assets/image/Rectangle4.png";


const Banner = () => {
  return (
    <main
    >
      <section className=" flex flex-col gap-10 lg:flex-row items-center pt-20 lg:pt-32
       lg:pb-20 pv-14 justify-around">
        {/* text----section */}
        <section className="flex text-[#000] p-4  flex-col items-start lg:gap-[50px] gap-5 lg:w-[550px]">
          <h1 className="lg:text-[50px] text-[30px] font-bold lg:leading-[65px]">
            Increase Your Customers Loyalty and Satisfaction
          </h1>
          <p>
            We help businesses like yours earn more customers, standout from
            competitors, make more money
          </p>
          <button className="bg-[#20B15A] text-white rounded-2xl px-7 py-5 ">
            Get Started
          </button>
        </section>
        {/* image---section */}
        <section className="flex flex-col p-4 gap-5">
          <div className="flex items-center flex-col  w-full justify-center gap-5">
            <img className="w-full" src={Rectangle1} />
            <img className="w-full" src={Rectangle2} />
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <img className="w-full" src={Rectangle3} />
            <img className="w-full" src={Rectangle4} />
          </div>
        </section>
      </section>
      {/* partners----section */}
     
    </main>
  );
};

export default Banner;
