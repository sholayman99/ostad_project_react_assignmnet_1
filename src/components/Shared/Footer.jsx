import { Link } from "react-router-dom";
import fb from "../../assets/image/fb.svg";
import insta from "../../assets/image/insta.svg";
import twitter from "../../assets/image/twitter.svg";
import linkedin from "../../assets/image/linkedin.svg";

const Footer = () => {
    const today = new Date().getFullYear();
  return (
    <footer className="bg-[#000] text-base-100  flex flex-col gap-10">
      <section className=" grid lg:grid-cols-3 grid-cols-1 lg:px-20 lg:py-12 px-5 py-10 gap-10">
        <div className="flex flex-col  items-start w-[70%] gap-3">
          <h1 className="lg:text-[40px] text-[24px] font-bold">WEB LOGO</h1>
          <p >
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </p>
          <div className="flex items-center gap-2">
           <Link> <img src={fb} /></Link>
           <Link> <img src={twitter} /></Link>
           <Link> <img src={linkedin} /></Link>
            <Link className="bg-[#20B15A] flex items-center justify-center rounded-full h-10 w-10 p-1">
              <img src={insta} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-3">
          <h2 className="text-[20px] font-[500]">Quick Links</h2>
          <Link to={"/"}>Services</Link>
          <Link to={"/"}>Portfolio</Link>
          <Link to={"/"}>About Us </Link>
          <Link to={"/"}>Contact Us</Link>
        </div>

        <div className=" flex w-[60%] flex-col gap-3">
          <h2 className="text-[20px] font-[500]">Address</h2>
          <p>Design Agency Head Office.Airport Road United Arab Emirate</p>
        </div>
      </section>
      <div className="lg:px-20 lg:py-6 px-5 py-5">
        <p>Copyright Design Agency {today}</p>
      </div>
    </footer>
  );
};

export default Footer;
