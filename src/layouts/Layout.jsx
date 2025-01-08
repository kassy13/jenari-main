// import React, { useEffect, useState } from "react";
// import Header from "./Header";
// import { Outlet } from "react-router-dom";
// import Footer from "./Footer";

// const Layout = ({ customLoader }) => {
//   const [pageLoading, setPageLoading] = useState(true);

//   useEffect(() => {
//     const handleLoad = () => {
//       setPageLoading(false);
//     };

//     window.addEventListener("load", handleLoad);

//     return () => {
//       window.removeEventListener("load", handleLoad);
//     };
//   }, []);
//   return (
//     <>
//       {pageLoading ? (
//         <div className="flex items-center justify-center h-screen">
//           {customLoader || <div className="loader">Loading...</div>}
//         </div>
//       ) : (
//         <div>
//           <Header />
//           <Outlet />
//           <Footer />
//         </div>
//       )}
//     </>
//   );
// };

// export default Layout;
// Layout.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import FullPageLoader from "../ui/loaders/FullPageLoader";

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

export default Layout;
