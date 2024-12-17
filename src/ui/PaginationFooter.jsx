import React from "react";

const PaginationFooter = () => {
  const totalPages = 24;
  const currentPage = 1;

  return (
    <div className="flex justify-between items-center py-4  border-t text-sm text-gray-600 ">
      {/* Left Section */}
      <div className="flex items-center">
        <span>Showing</span>
        <span className="mx-1 px-2 py-1 bg-primary-bg text-white rounded-md">
          1 to 20
        </span>
        <span>of 400 results</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Pagination Numbers */}
        {[1, 2, "...", totalPages - 1, totalPages].map((page, index) => (
          <span
            key={index}
            className={`cursor-pointer px-3 py-1 rounded-md ${
              page === currentPage ? "bg-primary-bg text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PaginationFooter;
