import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../components/context/AuthContex';
import { formatAmount } from '../utils';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the route
  const {
    supermarketItems,
    fetchProducts,
    handleAddToCart,
    handleAddToCartOption,
  } = useContext(AuthContext); // Use context to access products
  const [product, setProduct] = useState(null); // State to store the current product
  const [quantity, setQuantity] = useState(1); // Default quantity set to 1
  const [selectedOption, setSelectedOption] = useState(null); // Store the selected product option
  // Fetch products on component mount (if not already loaded)
  const navigate = useNavigate();
  useEffect(() => {
    if (!supermarketItems.length) {
      fetchProducts();
    }
  }, [supermarketItems, fetchProducts]);

  // Find the product by ID once products are loaded
  useEffect(() => {
    const foundProduct = supermarketItems.find(
      (item) => item.id === parseInt(id, 10)
    );
    setProduct(foundProduct);
  }, [id, supermarketItems]);

  const handleOptionChange = (option) => {
    setSelectedOption(option); // Store the selected option
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 1)); // Ensure quantity is at least 1
  };

  const handleAddToCartClick = () => {
    if (selectedOption && quantity > 0) {
      // Pass option ID, product ID, and quantity to the addToCart function
      // handleAddToCart(selectedOption.id, selectedOption.product_id, quantity);
      handleAddToCart(selectedOption, quantity, navigate);
    }
  };

  console.log(product);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="px-6 lg:px-16 py-8 mt-40 lg:mt-56">
      <div className="flex items-center flex-col lg:flex-row gap-8">
        <div className="w-full h-80 border rounded-lg shadow-md ">
          <img
            src={product.image} // Display the product image
            alt={product.name}
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>

        <section className="p-6 bg-gray-50 rounded-lg shadow-md max-w-lg md:max-w-full w-full h-full ">
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
          {product?.product_options?.length > 1 ? (
            <span className="font-extrabold text-text-header text-lg">
              £{formatAmount(product?.product_options?.[0]?.price)} -{' '}
              {formatAmount(
                product?.product_options?.[product?.product_options?.length - 1]
                  ?.price
              )}
            </span>
          ) : (
            <span className="font-extrabold text-text-header text-lg">
              £{formatAmount(product.price_range)}
            </span>
          )}
          <p className="text-sm text-green-600 font-medium mb-4">
            {product.status}
          </p>

          {/* Pick Buy Option */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Pick buy option
            </label>
            <div className="space-y-2">
              {product.product_options.length > 0 ? (
                product.product_options.map((option) => (
                  <div key={option.id} className="flex items-center">
                    <input
                      type="radio"
                      id={`option-${option.id}`}
                      name="buy-option"
                      className="mr-3 accent-primary-bg"
                      checked={selectedOption?.id === option.id} // Check if the selected option matches the current option
                      onChange={() => handleOptionChange(option)} // Update the selected option
                    />
                    <label
                      htmlFor={`option-${option.id}`}
                      className="text-gray-700"
                    >
                      {option.name} - £{formatAmount(option.price)}
                    </label>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No buy options available</p>
              )}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center space-x-4 mb-4">
            <label className="text-gray-700 font-medium">Quantity</label>
            <button
              onClick={() => handleQuantityChange(-1)}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 focus:ring focus:ring-primary-bg"
            >
              -
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="bg-primary-bg text-white px-3 py-1 rounded-md hover:bg-opacity-85 focus:ring focus:ring-primary-bg"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCartClick} // Trigger the add-to-cart function
            className="w-full bg-primary-bg text-white py-2 rounded-full hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-primary-bg"
          >
            Add to Cart
          </button>
        </section>
      </div>

      {/* Description Section */}
      <div className="mt-6 mb-4 text-gray-700 font-bold">
        <h2 className="text-lg font-semibold mb-2 text-secondary-bg">
          Description
        </h2>
        <p className="text-sm leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
