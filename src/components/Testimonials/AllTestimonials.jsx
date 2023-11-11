import { useEffect, useState } from "react";
import { testimonialsListRequest } from "../../ApiRequest/apiRequest";
import Loader from "../../components/Shared/Loader";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      let data = await testimonialsListRequest();
      setLoader(false);
      setTestimonials(data);
    })();
  }, []);

  if (loader) {
    return <Loader />;
  }
  return (
    <main className="bg-base-100 lg:px-20 px-6 py-10 lg:py-16 flex flex-col gap-10">
      <section className="lg:w-[40%] w-[70%]">
        <h2 className="text-[#20B15A] lg:text-[20px] text-[16px] font-medium ">
          Testimonial List
        </h2>
        <h1 className="lg:text-[30px] text-[20px] font-bold  text-[#000] ">
          Better Agency/SEO Solution At Your Fingertips
        </h1>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-10">
        {testimonials.map((testi, index) => (
          <div key={index} className="card px-8  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-xl">
                  <img src={testi['image']} />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
            <p className="text-[#9D9D9D] text-sm ">{testi['content']} </p>
              <h2 className="card-title text-[#000] font-bold">{testi['name']} </h2>
              
              <div className="card-actions">
               <h4>{testi['designation']} </h4>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Testimonials;
