import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RiArrowDownSLine } from 'react-icons/ri';

const OptionsDropdown = ({
  options = [],
  optionNum,
  handleOptionSelection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      {options?.length > 0 && (
        <div
          className="flex items-center gap-1 text-sm font-medium bg-[#E7F3E6] text-primary-bg p-1 rounded px-4 cursor-pointer"
          aria-label="Open options menu"
        >
          <span className="text-xs">{optionNum}</span>
          <p>Options</p>
          <RiArrowDownSLine size={16} />
        </div>
      )}

      {/* Dropdown Menu */}
      <ul
        className="absolute left-0 top-full z-50 hidden w-max max-w-xs bg-white border rounded-lg shadow-lg mt-1 group-hover:block"
        role="menu"
        aria-label="Options menu"
      >
        {options.length > 0 ? (
          options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionSelection(option)}
              role="menuitem"
            >
              {option.name || 'Unnamed Option'}
            </li>
          ))
        ) : (
          <li className="px-4 py-2 text-sm text-gray-500" role="menuitem">
            No options available
          </li>
        )}
      </ul>
    </div>
  );
};

OptionsDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  optionNum: PropTypes.number,
  onOptionClick: PropTypes.func,
  handleOptionSelection: PropTypes.func.isRequired,
};

OptionsDropdown.defaultProps = {
  options: [],
  optionNum: 0,
  onOptionClick: () => {},
};

export default OptionsDropdown;
