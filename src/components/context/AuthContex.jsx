import { createContext, useState, useEffect } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css"; // Add this for styles
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAppStore from "../../store";
import PropTypes from "prop-types";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [supermarketItems, setSupermarketItems] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);

  const {
    saveDeliveryAddress,
    setAuthToken,
    setUserData,
    authToken,
    setCartProducts,
  } = useAppStore();

  // Save cart items for checkout
  const saveCartForCheckout = (items, navigate) => {
    setCheckoutItems(items);
    Toastify({
      text: "Cart items saved for checkout!",
      backgroundColor: "green",
      duration: 3000,
    }).showToast();
    setTimeout(() => {
      navigate("/checkout"); // Redirect to home or dashboard
    }, 3000);
  };

  // Derived property for authentication status
  const isAuthenticated = authToken;
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUser = JSON.parse(localStorage.getItem("authUser"));

    if (storedToken && storedUser) {
      setAuthToken(storedToken);
      setUserData(storedUser);
    }
  }, [setAuthToken, setUserData]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.jenari.co.uk/api/list-categories"
        );
        const data = await response.json();
        setCategories(data.categories || []); // Ensure categories exist
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Login function
  const login = async (formData, navigate) => {
    setIsLoading(true); // Set loading to true to disable login button while requesting
    try {
      const response = await fetch("https://api.jenari.co.uk/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "An error occurred");
      }

      const data = await response.json();

      if (data) {
        setUserData(data?.user);
        setAuthToken(data?.token);
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("authUser", JSON.stringify(data.user));
        // Set the token and user state
        // Success Toastify
        Toastify({
          text: data?.message || "Login successful!",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "center",
          backgroundColor: "#4caf50",
        }).showToast();
        // Redirect after success
        setTimeout(() => {
          navigate("/"); // Redirect to home or dashboard
        }, 3000);
        return { success: true, message: data.message || "Login successful!" };
      }
    } catch (error) {
      // Error Toastify
      Toastify({
        text: error.message || "Login failed. Please try again.",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        backgroundColor: "#f44336",
      }).showToast();
      return { success: false, message: error.message || "Login failed." };
    } finally {
      setIsLoading(false); // Set loading to false after request
    }
  };

  // Logout function
  const logout = (navigate) => {
    // Remove from localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");

    setAuthToken(null);
    setUserData(null);

    // Redirect to login page after logout
    navigate("/login");
  };

  // Adding to cart
  const handleAddToCart = async (option, quantity, navigate) => {
    if (!isAuthenticated) {
      toast.error("Please log in to add items to the cart.");
      navigate("/signIn"); // Redirect to the login page
      return;
    }

    try {
      const formdata = {
        product_id: option.product_id,
        product_code: option.product_code,
        quantity,
        options: "1",
      };
      console.log("form data", formdata);

      const response = await fetch("https://api.jenari.co.uk/api/add/to/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, // Add token to headers
        },
        body: JSON.stringify(formdata),
      });
      if (!response.ok) {
        throw new Error("Failed to add item to cart.");
      }

      const data = await response.json();
      console.log("data", data);
      toast.success(`${option.name} added to cart successfully!`);

      // Optional: Redirect to payment page
      setTimeout(() => {
        navigate("/cart");
      }, 3000);

      return data; // Return data for additional handling if needed
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Could not add item to cart. Please try again.");
    }
  };

  const handleAddToCartOption = async (option, navigate) => {
    if (!isAuthenticated) {
      toast.error("Please log in to add items to the cart.");
      navigate("/signIn"); // Redirect to the login page
      return;
    }

    try {
      const formdata = {
        product_id: option.product_id,
        product_code: option.product_code,
        quantity: option.quantity,
        options: "0",
      };

      const response = await fetch("https://api.jenari.co.uk/api/add/to/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, // Add token to headers
        },
        body: JSON.stringify(formdata),
      });
      if (!response.ok) {
        throw new Error("Failed to add item to cart.");
      }

      const data = await response.json();
      toast.success(`${option.name} added to cart successfully!`);

      // Optional: Redirect to payment page
      setTimeout(() => {
        navigate("/cart");
      }, 3000);

      return data; // Return data for additional handling if needed
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Could not add item to cart. Please try again.");
    }
  };

  // Fetch products
  const getCategoryFromParams = () => {
    const params = new URLSearchParams(location.search);
    const categoryId = params.get("category_id");
    return categoryId;
  };

  // fetching products
  const fetchProducts = async (categoryId = null) => {
    const endpoint = categoryId
      ? `https://api.jenari.co.uk/api/list-product?category_id=${categoryId}`
      : "https://api.jenari.co.uk/api/list-product";

    try {
      setIsLoading(true);
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setSupermarketItems(data.products || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // fetching products
  const fetchLatestProducts = async (categoryId = null) => {
    const endpoint = categoryId
      ? `https://api.jenari.co.uk/api/list-product?category_id=${categoryId}`
      : "https://api.jenari.co.uk/api/list-product";

    try {
      setIsLoading(true);
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setSupermarketItems(data.products?.reverse()?.slice(0, 60) || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Product details

  const handleGetCartItems = async () => {
    try {
      if (!authToken) {
        throw new Error("Token is missing. Please log in.");
      }

      const response = await fetch("https://api.jenari.co.uk/api/cart/list", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch cart items.");
      }

      const data = await response.json();
      setCartProducts(data?.cartItems);
      return data?.cartItems;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  // remove product from cart
  const handleCartItemsDelete = async (product) => {
    const formdata = {
      cart_id: product.id,
      remove_all: 0,
    };

    try {
      const response = await fetch("https://api.jenari.co.uk/api/cart/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, // Add token to headers
        },
        body: JSON.stringify(formdata),
      });
      if (!response.ok) {
        throw new Error("Failed to add item to cart.");
      }

      const data = await response.json();
      if (data) {
        toast.success(`Cart item "${product.product}" removed successfully!`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCartItemsDeleteAll = async () => {
    const formdata = {
      remove_all: 1,
    };

    try {
      const response = await fetch("https://api.jenari.co.uk/api/cart/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, // Add token to headers
        },
        body: JSON.stringify(formdata),
      });
      if (!response.ok) {
        throw new Error("Failed to add item to cart.");
      }

      const data = await response.json();
      if (data) {
        toast.success(`All cart item removed successfully!`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // gett address
  const getAddress = async () => {
    try {
      const response = await fetch(
        "https://api.jenari.co.uk/api/list/delivery/address",
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // Ensure token is passed
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch delivery Address.");
      }

      const data = await response.json();
      saveDeliveryAddress(data?.addresses);
      return data; // Assuming cart items are in 'cartItems'
    } catch (err) {
      console.error(err);
      return []; // Return an empty array in case of error
    }
  };
  // create new Address
  const createNewAddress = async (addressData) => {
    setIsLoading(true); // Set loading to true to disable login button while requesting
    try {
      const response = await fetch(
        "https://api.jenari.co.uk/api/add/delivery/address",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(addressData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add address");
      }

      const data = await response.json();
      setIsLoading(false); // Set loading to true to disable login button while requesting
      return data;
    } catch (error) {
      setIsLoading(false); // Set loading to true to disable login button while requesting
      throw error;
    }
  };

  const handleCheckout = async (checkoutData) => {
    setIsLoading(true);
    // Ensure the product_codes is an array of strings
    const productCodes = Array.isArray(checkoutData.product_codes)
      ? checkoutData.product_codes
      : []; // Default to an empty array if the product_codes isn't an array

    const cleanedCheckoutData = {
      ...checkoutData, // Spread the existing data
      product_codes: productCodes, // Ensure product_codes is in the correct format
      // You can also ensure other fields are cleaned up if necessary
    };

    try {
      const response = await fetch(
        "https://api.jenari.co.uk/api/cart/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(cleanedCheckoutData), // Pass the cleaned data here
        }
      );

      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      console.error("Checkout error:", error);
      setIsLoading(false);
    }
  };

  const fetchOrderList = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://api.jenari.co.uk/api/list/orders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      console.error("Checkout error:", error);
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        categories,
        isLoading,
        login,
        logout,
        isAuthenticated,
        handleAddToCart,
        handleGetCartItems,
        handleCartItemsDelete,
        fetchProducts,
        supermarketItems,
        setSupermarketItems,
        fetchLatestProducts,
        handleCartItemsDeleteAll,
        getCategoryFromParams,
        setIsLoading,
        saveCartForCheckout,
        getAddress,
        createNewAddress,
        checkoutItems,
        handleCheckout,
        fetchOrderList,
        handleAddToCartOption,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
