// Layout.jsx
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import FullPageLoader from '../ui/loaders/FullPageLoader';

const Layout = ({ customLoader }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // To detect route change

  useEffect(() => {
    // Whenever the route changes, reset isLoading to true (show loader)
    setIsLoading(true);
  }, [location]);

  // Simulate loading completion after 2 seconds (you can modify this based on actual data fetching)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set to false after simulated delay or actual content load
    }, 2000); // Adjust time based on your actual loading logic (e.g., fetching data)

    return () => clearTimeout(timer); // Cleanup timer on component unmount or effect change
  }, [location]); // Run the timer every time the route changes

  return (
    <>
      {isLoading && <FullPageLoader customLoader={customLoader} />}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
Layout.propTypes = {
  customLoader: PropTypes.element,
};

export default Layout;
