import { useEffect, useState } from "react";
import { membersListRequest } from "../../ApiRequest/apiRequest";
import Loader from "../Shared/Loader";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa"

const Members = () => {
 
    const [members,setMembers] = useState([]);
    const [loader,setLoader] = useState(true);

    useEffect(() =>{
        (async()=>{
            let data = await membersListRequest();
            setLoader(false);
            setMembers(data);
        })()
    },[])

    if(loader){
        return <Loader />
    }

    


    return (
        <main className="bg-base-100 lg:px-20 px-6 py-10 lg:py-16 flex flex-col gap-10">
            <section className="lg:w-[40%] w-[70%]">
             <h2 className="text-[#20B15A] lg:text-[20px] text-[16px] font-medium ">Our Team Member</h2>
             <h1 className="lg:text-[30px] font-bold text-[20px] text-[#000] ">Check our awesome team members</h1>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3  gap-8">
                {
                 members.map((member,index) =>
                    <div key={index} className="border  border-1 rounded-lg" >
                     <div className="relative">
                     <img src={member['image']} className="lg:w-full rounded-lg lg:h-[300px]" alt={member['name']} />
                       <h2 className="text-gray-900 lg:text-[30px] text-[20px] font-bold text-center py-3 ">{member['name']}</h2>
                       <div className="bg-base-100 absolute bottom-24 left-24 px-4 py-4 rounded-3xl flex 
                       items-start justify-evenly gap-3">
                        <div className="border-e px-2 ">
                            <FaFacebookF />
                            
                        </div>
                        <div className="border-e px-2">
                            <FaTwitter />
                        </div>
                        <div>
                            <FaInstagram />
                        </div>
                       </div>
                     </div>
                    </div>
                 )
                }
            </section>
            
        </main>
    );
};

export default Members;