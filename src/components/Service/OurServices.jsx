import { useEffect, useState } from "react";
import Loader from "../Shared/Loader";
import { serviceListRequest } from "../../ApiRequest/apiRequest";

const OurServices = () => {
  const [services, setServices] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      let data = await serviceListRequest();
      setLoader(false);
      setServices(data);
    })();
  }, []);

  if (loader) {
    return <Loader />;
  }
  return (
    <main className="bg-base-100 lg:px-20 px-6 py-10 lg:py-16 flex flex-col gap-10">
      <section className="lg:w-[40%] w-[70%]">
        <h2 className="text-[#20B15A] lg:text-[20px] text-[16px] font-medium ">
          Our All Services
        </h2>
        <h1 className="lg:text-[30px] text-[20px] font-bold  text-[#000] ">
          We Provide BestWeb design services
        </h1>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2  gap-10">
        {services.map((service, index) => 
          <div key={index} className=" shadow-xl lg:w-[480px] w-[360px] rounded-lg p-3 h-[530]">
           <div className="py-5">
           <h2 className="lg:text-[26px] text-[20px] font-semibold text-black">{service["title"]} </h2>
            <p className="text-[#9D9D9D] ">{service["content"]}</p>
           </div>
            <div className=" flex flex-col gap-1 ">
              <div className="flex items-start gap-2  ">
                <img
                  className=" lg:w-[300px] w-[200px] h-[100px]  lg:h-[156px] "
                  src={service["image"]["url1"]}
                  alt={service["title"]}
                />
                <img
                  className="lg:w-[156px] w-[120px] h-[100px] lg:h-[150px]  "
                  src={service["image"]["url2"]}
                  alt={service["title"]}
                />
              </div>
              <div className="flex gap-2 items-center">
                <img
                  className="lg:w-[225px] w-[160px] h-[150px]  lg:h-[200px] "
                  src={service["image"]["url3"]}
                  alt={service["title"]}
                />
                <img
                  className="lg:w-[225px] w-[160px] h-[150px]  lg:h-[200px] "
                  src={service["image"]["url4"]}
                  alt={service["title"]}
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default OurServices;
