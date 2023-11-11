import { useEffect, useState } from "react";
import { workListRequest } from "../../ApiRequest/apiRequest";
import Loader from "../Shared/Loader";
import {BsArrowRight} from "react-icons/bs"

const WorkList = () => {
  const [lists, setLists] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
     
      let data = await workListRequest();
      setLists(data);
      setLoader(false);
    })();
  }, []);

  if (loader) {
    return <Loader />;
  }
 

  return (
    <main className="bg-base-100">
      <section className="lg:px-[105px] px-6 lg:pt-[67px] lg:pb-[63px] py-16">
        <div className="lg:w-[37%] gap-4 flex flex-col items-start">
          <h3 className="lg:text-[20px] text-[18px] text-[#20B15A] uppercase">Work List</h3>
          <h2 className="lg:text-[30px] text-[24px] font-semibold text-[#000]">
            We provide the Perfect Solution to your business growth
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 my-5 border-none gap-14">
          {lists.map((list, index) => 
            <div key={index} className="card text-[#000] px-[30px] py-[50px] gap-5 w-[320px]  items-start ">
             <div className="bg-[#D7F5DC] p-10 rounded-xl ">
             <figure>
                <img src={list['image']} className=""  alt="car!" />
              </figure>
             </div>
              <div className="">
                <h2 className="card-title my-4">{list['title']} </h2>
                <p>{list['content']} </p>
                  <button className="flex items-center mt-8 justify-start gap-1 font-[18px] normal-case
                   px-5 py-4">Learn More <BsArrowRight/></button>       
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default WorkList;
