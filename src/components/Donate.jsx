import donate from '../assets/donate.svg';

const Donate = () => {
  return (
    <div>
      <img
        src={donate}
        alt=""
        loading="lazy"
        className="w-full h-[120%] object-contain"
      />
    </div>
  );
};

export default Donate;
