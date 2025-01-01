import React, { useState } from "react";

const PaginationFooter = ({ currentPage, totalPages, onPageChange }) => {
  const [expandDots, setExpandDots] = useState(false); // State to control dots expansion

  // Function to generate the pagination numbers
  const getPaginationNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      // If total pages are 5 or less, show all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Handle cases with more than 5 pages
      if (expandDots) {
        // If dots are expanded, show a range of pages
        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, currentPage + 2);
        for (let i = start; i <= end; i++) {
          pageNumbers.push(i);
        }
        if (end < totalPages) {
          pageNumbers.push("...");
          pageNumbers.push(totalPages);
        }
      } else {
        // Default view with dots
        pageNumbers.push(1);
        if (currentPage > 3) {
          pageNumbers.push("...");
        }

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
        for (let i = start; i <= end; i++) {
          pageNumbers.push(i);
        }

        if (currentPage < totalPages - 2) {
          pageNumbers.push("...");
        }
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  // Render pagination buttons
  const renderPagination = () => {
    return getPaginationNumbers().map((page, index) => {
      if (page === "...") {
        return (
          <span
            key={index}
            className="cursor-pointer px-3 py-1 text-gray-500"
            onClick={() => setExpandDots(true)}
          >
            {page}
          </span>
        );
      }

      return (
        <span
          key={index}
          className={`cursor-pointer px-3 py-1 rounded-md ${
            page === currentPage
              ? "bg-primary-bg text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => {
            onPageChange(page);
            setExpandDots(false); // Reset dots expansion
          }}
        >
          {page}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center py-4 border-t text-sm text-gray-600 space-y-4 sm:space-y-0">
      {/* Left Section */}
      <div className="flex items-center justify-center sm:justify-start space-x-2">
        <span>Page</span>
        <span className="px-2 py-1 bg-primary-bg text-white rounded-md">
          {currentPage}
        </span>
        <span>of {totalPages}</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 overflow-x-auto sm:overflow-visible">
        {renderPagination()}
      </div>
    </div>
  );
};

export default PaginationFooter;
