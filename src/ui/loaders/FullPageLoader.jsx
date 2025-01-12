// FullPageLoader.jsx
// import React from "react";

const FullPageLoader = ({ customLoader }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-[99999999999999999999]">
    {/* {customLoader || <div className="loader">Loading...</div>} */}
    <span className="loader"></span>
  </div>
);

export default FullPageLoader;
