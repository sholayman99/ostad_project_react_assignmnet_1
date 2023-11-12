const SingleImage = () => {
  const singleData = {
    title: "App Redesign",
    image: "https://i.ibb.co/Y0X0GZf/Mask-1.png",
    content: "App Design - June 20, 2022",
  };

  return (
    <div className="flex flex-col gap-2 lg:gap-3">
      <img src={singleData.image} />
     <p className="text-[#2E3E5C] text-[14px]" >{singleData['content']} </p>
      <h2 className="text-[#1E1F4B] font-bold text-xl lg:text-2xl" >{singleData['title']} </h2>
    </div>
  );
};

export default SingleImage;
