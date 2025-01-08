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
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import FullPageLoader from "../ui/loaders/FullPageLoader";

const Layout = ({ customLoader }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false); // Set loading to false when the page is fully loaded
    };

    // Listen to the 'load' event
    window.addEventListener("load", handleLoad);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

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
