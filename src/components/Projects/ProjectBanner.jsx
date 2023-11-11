import {BiChevronRight} from "react-icons/bi"

const ProjectBanner = () => {
    return (
        <div className="lg:px-24 py-32 px-8">
            <h1 className="text-gray-900 font-bold lg:mb-4 mb-2 text-xl lg:text-3xl">All Project</h1>
           <div className="flex items-center font-medium gap-1">
           <h3>Home</h3>
           <BiChevronRight size={20} />
            <h3 className="text-[#20B15A]  ">All Project</h3>
           </div>
        </div>
    );
};

export default ProjectBanner;