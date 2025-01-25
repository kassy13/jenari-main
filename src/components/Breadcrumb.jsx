import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="flex mt-2 items-center space-x-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 text-gray-500" />}
          {item.href ? (
            <a
              href={item.href}
              className="text-blue-600 text-medium hover:underline text-sm font-medium"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-gray-500 text-sm font-medium">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};
Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Breadcrumb;
