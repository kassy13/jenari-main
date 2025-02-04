import mockup from '../assets/mockup.svg';
import mockup2 from '../assets/mockup2.svg';
import { useMediaQuery } from 'react-responsive';

const ShopHome = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="w-full bg-[#881739] flex flex-col lg:flex-row items-center h-full relative gap-6 mt-8">
      <div className="w-full">
        <img
          src={isMobile ? mockup2 : mockup}
          alt=""
          className="w-full h-full lg:h-[120%] object-contain"
        />
      </div>
    </div>
  );
};

export default ShopHome;
