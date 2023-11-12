

const ImagesContainer = () => {
  const data = [
    {
      title: "Redesign channel website landng page",
      img: "https://i.ibb.co/xFcVgND/Mask.png",
      content: "App Design - June 20, 2022",
    },
    {
      title: "Redesign channel website landng page",
      img: "https://i.ibb.co/gMbf8Rf/Mask-2.png",
      content: "App Design - June 20, 2022",
    },
    {
      title: "Redesign channel website landng page",
      img: "https://i.ibb.co/8NJhvY2/Mask-3.png",
      content: "App Design - June 20, 2022",
    },
    {
      title: "Redesign channel website landng page",
      img: "https://i.ibb.co/47wTR36/Mask-4.png",
      content: "App Design - June 20, 2022",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 lg:gap-5">
      {data.map((product, index) => (
        <div key={index} className="flex flex-col gap-2 lg:gap-3">
          <img src={product.img} />
          <p className="text-[#2E3E5C] text-[14px]">{product.content} </p>
          <h2 className="text-[#1E1F4B] font-bold text-[18px">
            {product.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ImagesContainer;
