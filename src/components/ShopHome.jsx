import about from '../assets/about.png';

const ShopHome = () => {
  return (
    <div className="w-full bg-[#881739] flex flex-col lg:flex-row items-center h-full relative gap-6 mt-8">
      <div className="w-full">
        <img
          src={about}
          alt=""
          className="w-full h-full lg:h-[120%] object-contain"
        />
      </div>
    </div>
  );
};

export default ShopHome;
