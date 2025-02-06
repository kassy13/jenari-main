import PropTypes from "prop-types";
import { RiArrowDownSLine, RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { formatAmount } from "../utils";

const SuperMarketCard = ({
  id,
  image,
  text,
  subtext,
  inSeason,
  options,
  optionNum,
  price,
  onOptionClick, // This is the handler function to trigger off-canvas
}) => {
  const handleOptionSelection = (selectedOption) => {
    // If options is a single object, wrap it in an array, otherwise use it as it is
    const optionsToPass = Array.isArray(selectedOption)
      ? selectedOption
      : [selectedOption];
    onOptionClick(optionsToPass); // Pass the options array to the parent
  };

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg p-2 overflow-hidden relative transition transform  hover:shadow-xl">
      <div className="image-container ">
        <Link to={`/product-details/${id}`} className="w-full rounded-lg">
          <img
            src={image}
            alt={text}
            className="w-full lg:h-[250px] h-[150px] object-cover rounded-lg hover:scale-105 transition"
          />
        </Link>
      </div>

      <div className="flex flex-col  xs:flex-col lg:justify-start lg:flex-row lg:justify-between lg:items-center mt-2  ">
        <Link
          to={`/product-details/${id}`}
          className="text-left text-sm font-bold text-text-header cursor-pointer"
        >
          {text}
        </Link>
        {options?.length >= 0 && (
          <div className="relative group self-start">
            <div className="flex  items-center mt-2 text-sm font-bold gap-1 bg-[#E7F3E6] text-primary-bg p-1 rounded px-4">
              <div className="flex  items-center gap-1 text-sm font-medium cursor-pointer bg-[#E7F3E6] text-primary-bg p-1 rounded px-4">
                <span className="text-xs">{optionNum}</span>
                <p onClick={() => onOptionClick(options)}>Options</p>
                <RiArrowDownSLine size={16} />
              </div>

              <ul className="absolute left-0 top-10 z-[99999999] h-20 overflow-scroll hidden w-full bg-white border rounded-lg shadow-lg mt-1 group-hover:block">
                {options.length > 0 ? (
                  options.map((option, index) => (
                    <li
                      key={index}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 h-20 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionSelection(option)}
                    >
                      <img src={option.image} alt="" className="w-8 h-8" />{" "}
                      {option.name || "Unnamed Option"}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-sm text-gray-500">
                    No options available
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="mt-2">
        <p className="text-text-light text-xs">{subtext}</p>
        {options?.length > 1 ? (
          <span className="font-extrabold text-text-header text-xs">
            £{formatAmount(options?.[0]?.price)} -{" "}
            {formatAmount(options?.[options?.length - 1]?.price)}
          </span>
        ) : (
          <span className="font-extrabold text-text-header text-xs">
            £{formatAmount(price)}
          </span>
        )}
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-2  justify-between my-2 text-xs ">
        <div
          className="flex items-center p-1 gap-1 px-3 rounded-lg bg-gray-300 cursor-pointer "
          onClick={() => onOptionClick(options)}
        >
          <RiShoppingCart2Line size={12} />
          <p className="pt-1">Add to Cart</p>
        </div>
        <p
          className={`text-white  p-1 px-3 text-center flex items-center justify-center rounded-lg w-20 lg-w-full text-nowrap ${
            inSeason === "In Season" || inSeason === "Available"
              ? "bg-primary-bg"
              : "bg-secondary-bg"
          }`}
        >
          {inSeason}
        </p>
      </div>

      {/* Off-Canvas to Select Product Options
      {isOffCanvasOpen && <Offcanvas />} */}
    </div>
  );
};
SuperMarketCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  inSeason: PropTypes.string,
  options: PropTypes.array.isRequired,
  optionNum: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  onOptionClick: PropTypes.func.isRequired,
};

export default SuperMarketCard;
