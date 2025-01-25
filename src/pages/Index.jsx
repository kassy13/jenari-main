// Index.jsx
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import NewStock from '../components/NewStock';
import ShopHome from '../components/ShopHome';
import Features from '../components/Features';
import Choose from '../components/Choose';
import Donate from '../components/Donate';
import AvailableLocations from '../components/AvailableLocations';
import SwiperCards from '../components/SwiperCards';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false); // Set loading to false when the page is fully loaded
    };

    // Listen to the 'load' event
    window.addEventListener('load', handleLoad);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <Hero />
      <Categories />
      {/* <BestSelling /> */}
      <NewStock />
      {/* <Clearance /> */}
      <ShopHome />
      <Features />
      <Choose />
      <SwiperCards />
      <Donate />
      <AvailableLocations />
      <ScrollToTop />
    </>
  );
};

export default Index;
