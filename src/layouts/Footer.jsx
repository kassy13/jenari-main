import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-header-bg py-10 px-6 text-white flex flex-col-reverse  row gap-5 lg:grid lg:grid-cols-3 ">
      {/* Social Media Section */}
      <div className="flex flex-col items-center text-center mb-8 md:mb-0 lg:col-span-1">
        <p className="text-sm mb-4">Connect with us on social media:</p>
        <div className="flex space-x-4">
          <Link
            to="https://facebook.com"
            target="_blank"
            className="hover:text-secondary transition"
          >
            <RiFacebookCircleLine size={24} />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            className="hover:text-secondary transition"
          >
            <RiInstagramLine size={24} />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            className="hover:text-secondary transition"
          >
            <RiTwitterLine size={24} />
          </Link>
          <Link
            to="https://youtube.com"
            target="_blank"
            className="hover:text-secondary transition"
          >
            <RiYoutubeLine size={24} />
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:col-span-2">
        {/* Categories Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/categories/fresh-produce"
                className="hover:text-secondary transition"
              >
                Fresh Produce
              </Link>
            </li>
            <li>
              <Link
                to="/categories/swallow-tubers-grains"
                className="hover:text-secondary transition"
              >
                Swallow, Tubers & Grains
              </Link>
            </li>
            <li>
              <Link
                to="/categories/fruits"
                className="hover:text-secondary transition"
              >
                Fruits
              </Link>
            </li>
            <li>
              <Link
                to="/categories/protein-sources"
                className="hover:text-secondary transition"
              >
                Protein Sources
              </Link>
            </li>
            <li>
              <Link
                to="/categories/food-bundles"
                className="hover:text-secondary transition"
              >
                Food Bundles
              </Link>
            </li>
            <li>
              <Link
                to="/categories/soup-ingredients"
                className="hover:text-secondary transition"
              >
                Soup Ingredients & Cooking Essentials
              </Link>
            </li>
            <li>
              <Link
                to="/categories/health-organic-foods"
                className="hover:text-secondary transition"
              >
                Health & Organic Foods
              </Link>
            </li>
            <li>
              <Link
                to="/categories/household-essentials"
                className="hover:text-secondary transition"
              >
                Household Essentials
              </Link>
            </li>
            <li>
              <Link
                to="/categories/baking-dairy-eggs"
                className="hover:text-secondary transition"
              >
                Baking Essentials, Dairy & Eggs
              </Link>
            </li>
            <li>
              <Link
                to="/categories/packaged-foods"
                className="hover:text-secondary transition"
              >
                Packaged Foods, Beverages & Drinks
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about-us" className="hover:text-secondary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:text-secondary transition"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-secondary transition">
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
                className="hover:text-secondary transition"
              >
                Return Policy
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-secondary transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className="hover:text-secondary transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/cookie-policy"
                className="hover:text-secondary transition"
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
