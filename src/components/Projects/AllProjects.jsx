import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader"
import { projectsListRequest } from "../../ApiRequest/apiRequest";



const AllProjects = () => {
    const [projects,setProjects] = useState([]);
    const [loader,setLoader] = useState(true) ;

    useEffect(()=>{
    (async()=>{
           let data = await projectsListRequest()
           setLoader(false)
           setProjects(data) ;
    })()
    },[])


    if(loader){
        return <Loader />
    }
    return (
        <main className="bg-base-100 lg:px-20 px-6 py-10 lg:py-16 flex flex-col gap-10">
        <section className="lg:w-[40%] w-[70%]">
          <h2 className="text-[#20B15A] lg:text-[20px] text-[16px] font-medium ">
          All Project
          </h2>
          <h1 className="lg:text-[30px] text-[20px] font-bold  text-[#000] ">
            We Provide BestWeb design services
          </h1>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2  gap-10">
        {
         projects.map((project,index) => <div key={index} className="shadow-lg rounded-lg">
            <div className="p-3">
              <img src={project.image} alt="" />
              <h2 className="lg:text-[26px] text-[20px] font-bold text-black my-2">{project.title} </h2>
            </div>
         </div>)
        }
        </section>
      </main>
    );
};

export default AllProjects;