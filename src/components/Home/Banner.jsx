import Rectangle1 from "../../assets/image/Rectangle1.png";
import Rectangle2 from "../../assets/image/Rectangle2.png";
import Rectangle3 from "../../assets/image/Rectangle3.png";
import Rectangle4 from "../../assets/image/Rectangle4.png";
import Partners from "./Partners";

const Banner = () => {
  return (
    <main
      style={{
        background: "linear-gradient(180deg, #D7F5DC 0%, #D7F5DC 100%)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "auto",
      }}
    >
      <section className=" flex items-center pt-32 pb-20 justify-around">
        {/* text----section */}
        <section className="flex text-[#000]  flex-col items-start gap-[50px] w-[550px]">
          <h1 className="text-[50px] font-bold leading-[65px]">
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
        <section className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-5">
            <img src={Rectangle1} />
            <img src={Rectangle2} />
          </div>
          <div className="flex items-center justify-center gap-5">
            <img src={Rectangle3} />
            <img src={Rectangle4} />
          </div>
        </section>
      </section>
      {/* partners----section */}
      <Partners />
    </main>
  );
};

export default Banner;
