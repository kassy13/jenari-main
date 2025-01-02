// import React, { createContext, useState, useEffect } from "react";
// import Toastify from "toastify-js";
// import "toastify-js/src/toastify.css"; // Add this for styles

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [categories, setCategories] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("authToken");
//     const storedUser = JSON.parse(localStorage.getItem("user"));

//     if (storedToken && storedUser) {
//       setToken(storedToken);
//       setUser(storedUser);
//     }
//   }, []);
//   // Fetch categories
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(
//           "https://api.jenari.co.uk/api/list-categories"
//         );
//         const data = await response.json();
//         setCategories(data.categories || []); // Ensure categories exist
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Check for token and user in localStorage on app load
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     const storedUser = localStorage.getItem("authUser");
//     if (token && storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   // Login function
//   const login = async (formData, navigate) => {
//     try {
//       const response = await fetch("https://api.jenari.co.uk/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "An error occurred");
//       }

//       const data = await response.json();

//       // Save token and user in localStorage
//       localStorage.setItem("authToken", data.token);
//       localStorage.setItem("authUser", JSON.stringify(data.user));

//       // Update user state
//       setUser(data.user);

//       //   // Update user state
//       //   setUser(data.user || null);

//       // Success Toastify
//       Toastify({
//         text: data.message || "Login successful!",
//         duration: 3000,
//         close: true,
//         gravity: "top",
//         position: "center",
//         backgroundColor: "#4caf50",
//       }).showToast();
//       // Redirect to another page (if needed)
//       // window.location.href = "/dashboard"; // Example route
//       setTimeout(() => {
//         navigate("/");
//       }, 3000);
//       return { success: true, message: data.message || "Login successful!" };
//     } catch (error) {
//       // Error Toastify
//       Toastify({
//         text: error.message || "Login failed. Please try again.",
//         duration: 3000,
//         close: true,
//         gravity: "top",
//         position: "center",
//         backgroundColor: "#f44336",
//       }).showToast();

//       return { success: false, message: error.message || "Login failed." };
//     }
//   };
//   //   // Logout function
//   //   const logout = () => {
//   //     setUser(null);
//   //     navigate("/login"); // Redirect to login after logout
//   //   };

//   // Forgot password function
//   //   const forgotPassword = (email) => {
//   //     // Add logic for password reset (API call, etc.)
//   //     console.log(`Password reset requested for: ${email}`);
//   //   };

//   //   const handleCategoryClick = (id) => {
//   //     navigate(`/supermarket?category=${id}`);
//   //   };

//   return (
//     <AuthContext.Provider
//       value={{
//         categories,
//         isLoading,
//         login,
//         user,
//         // login,
//         // logout,
//         // forgotPassword,
//         // handleCategoryClick,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;

import React, { createContext, useState, useEffect } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css"; // Add this for styles
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [supermarketItems, setSupermarketItems] = useState([]);

  // Fetch user and token from localStorage once on app load

  // Derived property for authentication status
  const isAuthenticated = token;
  //   console.log("auttt", isAuthenticated);
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUser = JSON.parse(localStorage.getItem("authUser"));

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }
  }, []);

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

      // Save token and user in localStorage
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("authUser", JSON.stringify(data.user));

      // Set the token and user state
      setUser(data.user);
      setToken(data.token);

      // Success Toastify
      Toastify({
        text: data.message || "Login successful!",
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
    setUser(null);
    setToken(null);

    // Remove from localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");

    // Redirect to login page after logout
    navigate("/login");
  };

  const handleAddToCart = async (option, quantity) => {
    if (!isAuthenticated) {
      toast.error("Please log in to add items to the cart.");
      navigate("/signIn"); // Redirect to the login page
      return;
    }

    try {
      // const formdata = {
      //   product_id: option.id, // Assuming `id` is the product ID
      //   product_option_id: option.product_id, // Assuming `option_id` exists
      //   quantity,
      // };
      const formdata = {
        product_id: option.product_id, // This is the product_id of the product (e.g., 14)
        product_option_id: option.id, // This is the product_option_id (e.g., 3)
        quantity,
      };
      console.log("form data", formdata);

      const response = await fetch("https://api.jenari.co.uk/api/add/to/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Add token to headers
        },
        body: JSON.stringify(formdata),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to add item to cart.");
      }

      const data = await response.json();
      toast.success(`${option.name} added to cart successfully!`);

      // Optional: Redirect to payment page
      setTimeout(() => {
        navigate("/payment");
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

  // Product details

  const handleGetCartItems = async () => {
    try {
      const response = await fetch("https://api.jenari.co.uk/api/cart/list", {
        headers: {
          Authorization: `Bearer ${token}`, // Ensure token is passed
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch cart items.");
      }

      const data = await response.json();
      return data.cartItems; // Assuming cart items are in 'cartItems'
    } catch (err) {
      console.error(err);
      return []; // Return an empty array in case of error
    }
  };

  return (
    <AuthContext.Provider
      value={{
        categories,
        isLoading,
        user,
        token,
        login,
        logout,
        isAuthenticated,
        handleAddToCart,
        handleGetCartItems,
        fetchProducts,
        supermarketItems,
        getCategoryFromParams,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
