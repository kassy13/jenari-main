import PropTypes from 'prop-types';

const ShopItemCard = ({
  image,
  title,
  description,
  priceRange,
  options,
  isSeason,
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden border transition hover:shadow-xl hover:scale-105">
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={image}
          loading="lazy"
          alt={title}
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow text-gray-700 hover:text-red-500">
          ❤️
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title and Options */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <button className="px-2 py-1 text-sm text-green-700 bg-green-100 rounded-lg">
            {options} Options
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">{description}</p>

        {/* Price */}
        <p className="text-gray-800 font-medium">{priceRange}</p>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-4">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900">
            🛒 Add to cart
          </button>
          {isSeason && (
            <button className="px-3 py-1 text-sm text-white bg-green-500 rounded-lg">
              In Season
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
ShopItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priceRange: PropTypes.string.isRequired,
  options: PropTypes.number.isRequired,
  isSeason: PropTypes.bool.isRequired,
};

export default ShopItemCard;
