import { useEffect, useState } from "react";
import { workListRequest } from "../../ApiRequest/apiRequest";
import Loader from "../Shared/Loader";
import {BsArrowRight} from "react-icons/bs"

const WorkList = () => {
  const [lists, setLists] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setLoader(true);
      let data = await workListRequest();
      setLists(data);
      setLoader(false);
    })();
  }, []);

  if (loader) {
    return <Loader />;
  }
  console.log(lists)

  return (
    <main className="bg-base-100">
      <section className="px-[105px] pt-[67px] pb-[63px]">
        <div className="w-[37%] gap-4 flex flex-col items-start">
          <h3 className="text-[20px] text-[#20B15A] uppercase">Work List</h3>
          <h2 className="text-[30px] font-semibold text-[#000]">
            We provide the Perfect Solution to your business growth
          </h2>
        </div>

        <div className="grid grid-cols-3 my-5 border-none gap-10">
          {lists.map((list, i) => (
            <div key={i} className="card px-[30px] py-[50px] gap-5 w-[320px]  items-start ">
             <div className="bg-[#D7F5DC] p-8 ">
             <figure>
                <img src={list['image']} className="w-8 h-8 bg-[" alt="car!" />
              </figure>
             </div>
              <div className="">
                <h2 className="card-title">{list.title} </h2>
                <p>{list.content} </p>
                  <button className="flex items-center mt-10 justify-start gap-1 font-[18px] normal-case
                   px-5 py-4">Learn More <BsArrowRight/></button>       
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default WorkList;
