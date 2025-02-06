import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Offcanvas from "../components/Offcanvas";
import PaginationFooter from "../ui/PaginationFooter";
import AuthContext from "../components/context/AuthContex";
import SuperMarketCard from "../ui/SuperMarketCard";
import Breadcrumb from "../components/Breadcrumb";
import ShopItemCard from "../ui/ShopItemCard";

const Supermarket = () => {
  const [error, setError] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null); // current product state
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false); // Control modal visibility
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [activeCategory, setActiveCategory] = useState({});
  const [filteredItems, setFilteredItems] = useState([]);
  const itemsPerPage = 28; // Number of items per page
  const location = useLocation();
  const navigate = useNavigate();
  const {
    getCategoryFromParams,
    supermarketItems,
    fetchProducts,
    isLoading,
    handleAddToCartOption,
  } = useContext(AuthContext);

  useEffect(() => {
    const selectedCategory = localStorage.getItem("selected_category");
    const category = JSON.parse(selectedCategory);
    setActiveCategory(category);
  }, []);

  useEffect(() => {
    if (supermarketItems.length > 0) {
      const params = new URLSearchParams(location.search);
      const categoryId = params.get("category");
      if (categoryId) {
        // Filter by category
        setFilteredItems(
          supermarketItems.filter((item) => item?.category_id === categoryId)
        );
      } else {
        // No category filtering, show all items
        setFilteredItems(supermarketItems);
      }
    }
  }, [supermarketItems, location]);

  const handleOptionClick = (options) => {
    // Always pass options as an array (even if it contains just one option)
    if (options?.product_options?.length > 0) {
      setCurrentProduct(options?.product_options);
      setIsOffCanvasOpen(true);
    } else {
      const data = {
        product_id: options.id,
        quantity: 1,
        option: "0",
        product_code: options.product_code,
      };
      handleAddToCartOption(data, navigate);
    }
  };

  // Calculate total pages

  useEffect(() => {
    // Extract 'category' from the URL instead of 'category_id'
    const params = new URLSearchParams(location.search);
    const categoryId = params.get("category"); // Use 'category'

    // Fetch products based on the extracted category
    fetchProducts(categoryId);
  }, [location]);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Get items for the current page
  const displayedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search"); // Get the 'search' query parameter

    if (searchQuery) {
      // Filter the items based on the search query
      const results = supermarketItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      // If no search query, display all items
      setFilteredItems(supermarketItems);
    }
  }, [location.search, supermarketItems]);

  // Scroll to top when search query or category changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search"); // Get the 'search' query parameter

    if (searchQuery) {
      const results = supermarketItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      setFilteredItems(supermarketItems); // Display all items if no search query
    }

    // Scroll to top when location changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.search, supermarketItems]);
  return (
    <div className="px-6 mt-28 lg:mt-40 lg:px-16 py-16">
      <h1 className="text-[#1F3D4F] text-3xl tracking-tighter font-semibold">
        {getCategoryFromParams() ? "Filtered Products" : "All Products"}
      </h1>

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: activeCategory?.category_name },
        ]}
      />

      {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-4 my-9 sm:grid-cols-2 xs:grid-cols-2">
            {displayedItems.map((item, index) => (
              <SuperMarketCard
                key={index}
                id={item.id}
                image={item.image || "default-image-url"}
                text={item.name || "Product Name"}
                inSeason={item.status || false}
                options={item.product_options || []}
                optionNum={item.product_options.length}
                price={item.price_range}
                onOptionClick={() => handleOptionClick(item)} // Pass the handler
              />
            ))}
          </div>

          {filteredItems?.length === 0 && (
            <div className="flex justify-center items-center h-96">
              <p className="text-red-500">No products found</p>
            </div>
          )}
        </>
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
