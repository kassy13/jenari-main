import 'swiper/css';
import availableLocations from '../assets/available-location.svg';

const AvailableLocations = () => {
  return (
    <div className="mx-14 py-12 pt-16">
      <h2 className="text-center font-extrabold text-2xl lg:text-3xl text-secondary-bg pb-4">
        We are available in these locations
      </h2>

      <div className="flex justify-center items-center">
        <img src={availableLocations} alt="Available Locations" />
      </div>
    </div>
  );
};

export default AvailableLocations;
