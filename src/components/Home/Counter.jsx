import { useEffect, useState } from "react";
import { counterListRequest } from "../../ApiRequest/apiRequest";
import Loader from "../Shared/Loader";

const Counter = () => {
  const [counterLists, setCounterLists] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setLoader(true);
      let data = await counterListRequest();
      setCounterLists(data);
      setLoader(false);
    })();
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <section className="flex items-center text-[#000] justify-center gap-8  bg-base-100">
      {counterLists.map((counter, i) => (
        <div className="px-25 py-15 flex flex-col items-center  w-72" key={i}>
          <div className="bg-[#D7F5DC] rounded-lg p-10">
            <img src={counter["image"]} />
          </div>

          <h2 className="mt-6 text-[30px] font-semibold">
            {counter["number"]}
          </h2>
          <p>{counter["content"]} </p>
        </div>
      ))}
    </section>
  );
};

export default Counter;
