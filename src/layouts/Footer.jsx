import { RiInstagramLine, RiTwitterLine, RiYoutubeLine } from 'react-icons/ri';
import { LuFacebook } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../components/context/AuthContex';

const Footer = () => {
  const navigate = useNavigate();
  const { categories } = useContext(AuthContext);

  const handleCategoryClick = (category) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    localStorage.setItem('selected_category', JSON.stringify(category));
    navigate(`/supermarket?category=${category?.id}`); // Use the id instead of slug
  };
  return (
    <footer className="bg-header-bg py-10 px-6 text-white flex flex-col-reverse  row gap-5 lg:grid lg:grid-cols-3 ">
      {/* Social Media Section */}
      <div className="flex flex-col items-center mb-8 md:mb-0 lg:col-span-1">
        <p className="text-sm mb-4">Connect with us on social media:</p>
        <div className="flex space-x-4">
          <Link
            to="https://facebook.com"
            target="_blank"
            className="hover:text-secondary transition"
          >
            <LuFacebook size={45} />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            className="hover:text-secondary transition"
          >
            <RiInstagramLine size={45} />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            className="hover:text-secondary transition"
          >
            <RiTwitterLine size={45} />
          </Link>
          <Link
            to="https://youtube.com"
            target="_blank"
            className="hover:text-secondary transition"
          >
            <RiYoutubeLine size={45} />
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:col-span-2">
        {/* Categories Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          {categories.map((item, index) => (
            <ul className="space-y-2" key={index}>
              <li
                className="hover:text-secondary-bg text-sm transition py-2 cursor-pointer"
                onClick={() => handleCategoryClick(item)}
              >
                {item.category_name}
              </li>
            </ul>
          ))}
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-secondary text-sm transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-secondary text-sm transition"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-secondary text-sm transition"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Policy Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Policy</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/return-policy"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-secondary text-sm transition"
              >
                Return Policy
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-secondary text-sm transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-secondary text-sm transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/cookie-policy"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-secondary text-sm transition"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
