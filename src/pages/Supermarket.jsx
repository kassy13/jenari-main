import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Offcanvas from "../components/Offcanvas";
import SuperMarkertCard from "../ui/SuperMarkertCard";
import PaginationFooter from "../ui/PaginationFooter";
import AuthContext from "../components/context/AuthContex";

const Supermarket = () => {
  // const [supermarketItems, setSupermarketItems] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null); // current product state
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false); // Control modal visibility
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 28; // Number of items per page
  const location = useLocation();
  const navigate = useNavigate();
  const { getCategoryFromParams, supermarketItems, fetchProducts, isLoading } =
    useContext(AuthContext);

  const handleOptionClick = (options) => {
    // Always pass options as an array (even if it contains just one option)
    setCurrentProduct(options);
    setIsOffCanvasOpen(true);
  };

  // Calculate total pages

  useEffect(() => {
    // Extract 'category' from the URL instead of 'category_id'
    const params = new URLSearchParams(location.search);
    const categoryId = params.get("category"); // Use 'category'

    // Fetch products based on the extracted category
    fetchProducts(categoryId);
  }, [location]);
  const totalPages = Math.ceil(supermarketItems.length / itemsPerPage);

  // Get items for the current page
  const displayedItems = supermarketItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  console.log("displayed", displayedItems);

  return (
    <div className="px-6 mt-28 lg:mt-40 lg:px-16 py-16">
      <h1 className="text-[#1F3D4F] text-3xl tracking-tighter font-semibold">
        {getCategoryFromParams() ? "Filtered Products" : "All Products"}
      </h1>

      {isLoading ? (
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
              // subtext={item.description || "Subtext"}
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
          navigate={navigate}
        />
      )}
    </div>
  );
};

export default Supermarket;
