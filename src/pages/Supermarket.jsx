// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Offcanvas from "../components/Offcanvas";
// import SuperMarkertCard from "../ui/SuperMarkertCard";

// import PaginationFooter from "../ui/PaginationFooter";
// const Supermarket = () => {
//   const [supermarketItems, setSupermarketItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentProduct, setCurrentProduct] = useState(null); // current product state
//   const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false); // Control modal visibility
//   const location = useLocation();

//   // Helper function to extract category ID from URL params
//   const getCategoryFromParams = () => {
//     const params = new URLSearchParams(location.search);
//     const category = params.get("category");
//     return category;
//   };

//   // Handle click on product options
//   const handleOptionClick = (options) => {
//     if (options.length > 0) {
//       console.log("clicked");
//       setCurrentProduct(options); // Save the options or product info
//       setIsOffCanvasOpen(true); // Open the off-canvas modal
//     }
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const categoryId = getCategoryFromParams();
//       const endpoint = categoryId
//         ? `https://api.jenari.co.uk/api/list-product?category_id=${categoryId}`
//         : "https://api.jenari.co.uk/api/list-product";

//       try {
//         setLoading(true);
//         const response = await fetch(endpoint);
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         const data = await response.json();
//         setSupermarketItems(data.products || []);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [location.search]);

//   return (
//     <div className="px-6 mt-28 lg:mt-40 lg:px-16 py-16">
//       <h1 className="text-[#1F3D4F] text-3xl tracking-tighter font-semibold">
//         {getCategoryFromParams() ? "Filtered Products" : "All Products"}
//       </h1>

//       {loading ? (
//         <p>Loading products...</p>
//       ) : error ? (
//         <p className="text-red-500">Error: {error}</p>
//       ) : (
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-9 mb-6">
//           {supermarketItems.map((item, index) => (
//             <SuperMarkertCard
//               key={index}
//               id={item.id}
//               image={item.image || "default-image-url"}
//               text={item.name || "Product Name"}
//               subtext={item.subtext || "Subtext"}
//               inSeason={item.status || false}
//               options={item.product_options || []}
//               optionNum={item.product_options.length}
//               price={item.price_range}
//               onOptionClick={handleOptionClick} // Pass the handler
//             />
//           ))}
//         </div>
//       )}

//       <PaginationFooter />

//       {/* Render Offcanvas modal when isOffCanvasOpen is true */}
//       {isOffCanvasOpen && (
//         <Offcanvas
//           options={currentProduct}
//           onClose={() => setIsOffCanvasOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Supermarket;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Offcanvas from "../components/Offcanvas";
import SuperMarkertCard from "../ui/SuperMarkertCard";
import PaginationFooter from "../ui/PaginationFooter";

const Supermarket = () => {
  const [supermarketItems, setSupermarketItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null); // current product state
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false); // Control modal visibility
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 8; // Number of items per page
  const location = useLocation();

  // Helper function to extract category ID from URL params
  const getCategoryFromParams = () => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    return category;
  };

  // Handle click on product options
  const handleOptionClick = (options) => {
    if (options.length > 0) {
      console.log("clicked");
      setCurrentProduct(options); // Save the options or product info
      setIsOffCanvasOpen(true); // Open the off-canvas modal
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const categoryId = getCategoryFromParams();
      const endpoint = categoryId
        ? `https://api.jenari.co.uk/api/list-product?category_id=${categoryId}`
        : "https://api.jenari.co.uk/api/list-product";

      try {
        setLoading(true);
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setSupermarketItems(data.products || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.search]);

  // Calculate total pages
  const totalPages = Math.ceil(supermarketItems.length / itemsPerPage);

  // Get items for the current page
  const displayedItems = supermarketItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="px-6 mt-28 lg:mt-40 lg:px-16 py-16">
      <h1 className="text-[#1F3D4F] text-3xl tracking-tighter font-semibold">
        {getCategoryFromParams() ? "Filtered Products" : "All Products"}
      </h1>

      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-9 mb-6">
          {displayedItems.map((item, index) => (
            <SuperMarkertCard
              key={index}
              id={item.id}
              image={item.image || "default-image-url"}
              text={item.name || "Product Name"}
              subtext={item.subtext || "Subtext"}
              inSeason={item.status || false}
              options={item.product_options || []}
              optionNum={item.product_options.length}
              price={item.price_range}
              onOptionClick={handleOptionClick} // Pass the handler
            />
          ))}
        </div>
      )}

      <PaginationFooter
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />

      {/* Render Offcanvas modal when isOffCanvasOpen is true */}
      {isOffCanvasOpen && (
        <Offcanvas
          options={currentProduct}
          onClose={() => setIsOffCanvasOpen(false)}
        />
      )}
    </div>
  );
};

export default Supermarket;
