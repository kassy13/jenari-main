import PropTypes from 'prop-types';

const SwiperCard = ({ title, testimonial, img, name, position }) => {
  return (
    <div className="w-full  p-5 rounded-3xl  border-2 border-solid border-gray-200 ">
      <p className="lg:text-base text-apexgreen_secondary font-grotesque tracking-tight font-extrabold text-[#170F49] min-h-10">
        {title}
      </p>
      <p className="text-base text-apexlight_text font-inter py-4 text-[#6F6C90] min-h-44">
        {testimonial}
      </p>
      <div className="border-t-[0.1px] border-gray-300 flex  items-center gap-2 py-2 pt-4">
        {img && (
          <div className="w-10 h-10 lg:w-12 lg:h-12  rounded-full">
            <img
              src={img}
              loading="lazy"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-inter text-base text-apexgreen_secondary font-bold">
            {name}
          </p>
          <p className="font-inter text-base text-[#6F6C90]">{position}</p>
        </div>
      </div>
    </div>
  );
};
SwiperCard.propTypes = {
  title: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default SwiperCard;
