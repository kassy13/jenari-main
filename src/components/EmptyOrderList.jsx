import { useNavigate } from 'react-router-dom';
import emptyCart from '../assets/empty-cart.svg';

const EmptyOrderList = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center my-16 flex flex-col items-center justify-center">
      <img
        src={emptyCart}
        alt="Empty Order List Pattern"
        className="w-32 h-32 object-contain"
      />
      <p className="text-2xl font-bold text-[#6D6D6D]">
        Oops! No Orders Here Yet
      </p>
      <p className="text-lg text-[#525252]">
        You haven&apos;t placed any orders yet. Start shopping now to fill this
        space with your purchases!
      </p>

      <button
        onClick={() => navigate('/supermarket')}
        className="w-1/2 mt-8 py-2 px-4 text-white bg-primary-bg font-semibold flex items-center self-center justify-center rounded-full"
      >
        Start shopping
      </button>
    </div>
  );
};

export default EmptyOrderList;
