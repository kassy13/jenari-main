import img from '../assets/features 1.svg';

const WhyJenari = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:px-16 px-6 lg:py-16 lg:gap-12 gap-6 mt-10 lg:mt-36">
      <div className="w-full">
        <h1 className="lg:text-4xl text-gray-600 font-bold text-[30px] py-2">
          Why we’re different
        </h1>
        <ol className="text-text-light py-4 list-decimal">
          <li className="pb-4">
            <span className="font-medium text-base pr-1 text-black">
              One-Stop Shopping:
            </span>{' '}
            Compare prices, explore varieties, and discover rare products from
            multiple sellers—all in one place.
          </li>
          <li className="pb-4">
            <span className="font-medium text-base pr-1 text-black">
              No Hidden Costs:
            </span>{' '}
            We charge only a minimal delivery fee, ensuring you save money
            without sacrificing quality. Empowering farmers and reducing waste.
          </li>
          <li className="pb-4">
            <span className="font-medium text-base pr-1 text-black">
              Fast and Reliable Delivery:
            </span>{' '}
            Your order arrives within 24 hours (Monday to Saturday), tailored
            for your busy lifestyle.
          </li>
          <li className="pb-4">
            <span className="font-medium text-base pr-1 text-black">
              Cultural Connection:
            </span>{' '}
            Whether it’s a staple ingredient or a cherished treat, we deliver
            with care, celebrating the essence of African culture.
          </li>
          <li className="pb-4">
            <span className="font-medium text-base pr-1 text-black">
              Sustainability and Community:
            </span>{' '}
            Every purchase supports a better food system, empowering farmers and
            reducing waste.
          </li>
        </ol>
      </div>
      <div className="w-full">
        <img
          src={img}
          loading="lazy"
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default WhyJenari;
