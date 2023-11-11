import { useEffect, useState } from "react";
import { counterListRequest } from "../../ApiRequest/apiRequest";
import Loader from "../Shared/Loader";

const Counter = () => {
  const [counterLists, setCounterLists] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
     
      let data = await counterListRequest();
      setLoader(false);
      setCounterLists(data);
      
    })();
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <section className=" grid grid-cols-1 lg:grid-cols-4 lg:px-20 px-6 lg:py-15 py-10
     text-[#000]  gap-10  bg-base-100">
      {counterLists.map((counter, index) => 
        <div className=" flex shadow-xl p-3 flex-col items-center  w-60" key={index}>
          <div className="bg-[#D7F5DC] rounded-lg p-10">
            <img src={counter['image']} />
          </div>

          <h2 className="mt-6 text-[30px] font-semibold">
            {counter['number']}
          </h2>
          <p>{counter['content']} </p>
        </div>
      )}
    </section>
  );
};

export default Counter;
