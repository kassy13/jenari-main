import { createContext, useState, useEffect } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css'; // Add this for styles
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAppStore from '../../store';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [supermarketItems, setSupermarketItems] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);

  const { saveDeliveryAddress } = useAppStore();

  console.log(token);
  // Save cart items for checkout
  const saveCartForCheckout = (items, navigate) => {
    setCheckoutItems(items);
    Toastify({
      text: 'Cart items saved for checkout!',
      backgroundColor: 'green',
      duration: 3000,
    }).showToast();
    setTimeout(() => {
      navigate('/checkout'); // Redirect to home or dashboard
    }, 3000);
  };

  console.log('checked our', checkoutItems);
  // Fetch user and token from localStorage once on app load

  // Derived property for authentication status
  const isAuthenticated = token;
  //   console.log("auttt", isAuthenticated);
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = JSON.parse(localStorage.getItem('authUser'));

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }
    console.log(token, 'from useeffect');
  }, []);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://api.jenari.co.uk/api/list-categories'
        );
        const data = await response.json();
        setCategories(data.categories || []); // Ensure categories exist
      } catch (error) {
        console.error('Error fetching categories:', error);
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
      const response = await fetch('https://api.jenari.co.uk/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred');
      }

      const data = await response.json();

      // Save token and user in localStorage
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('authUser', JSON.stringify(data.user));

      // Set the token and user state
      setUser(data.user);
      setToken(data.token);

      // Success Toastify
      Toastify({
        text: data.message || 'Login successful!',
        duration: 3000,
        close: true,
        gravity: 'top',
        position: 'center',
        backgroundColor: '#4caf50',
      }).showToast();

      // Redirect after success
      setTimeout(() => {
        navigate('/'); // Redirect to home or dashboard
      }, 3000);

      return { success: true, message: data.message || 'Login successful!' };
    } catch (error) {
      // Error Toastify
      Toastify({
        text: error.message || 'Login failed. Please try again.',
        duration: 3000,
        close: true,
        gravity: 'top',
        position: 'center',
        backgroundColor: '#f44336',
      }).showToast();
      return { success: false, message: error.message || 'Login failed.' };
    } finally {
      setIsLoading(false); // Set loading to false after request
    }
  };

  // Logout function
  const logout = (navigate) => {
    setUser(null);
    setToken(null);

    // Remove from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');

    // Redirect to login page after logout
    navigate('/login');
  };

  const handleAddToCart = async (option, quantity, navigate) => {
    if (!isAuthenticated) {
      toast.error('Please log in to add items to the cart.');
      navigate('/signIn'); // Redirect to the login page
      return;
    }

    try {
      const formdata = {
        product_id: option.product_id,
        product_code: option.product_code,
        quantity,
      };
      console.log('form data', formdata);

      const response = await fetch('https://api.jenari.co.uk/api/add/to/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Add token to headers
        },
        body: JSON.stringify(formdata),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Failed to add item to cart.');
      }

      const data = await response.json();
      toast.success(`${option.name} added to cart successfully!`);

      // Optional: Redirect to payment page
      setTimeout(() => {
        navigate('/cart');
      }, 3000);

      return data; // Return data for additional handling if needed
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Could not add item to cart. Please try again.');
    }
  };

  // Fetch products
  const getCategoryFromParams = () => {
    const params = new URLSearchParams(location.search);
    const categoryId = params.get('category_id');
    return categoryId;
  };

  const fetchProducts = async (categoryId = null) => {
    const endpoint = categoryId
      ? `https://api.jenari.co.uk/api/list-product?category_id=${categoryId}`
      : 'https://api.jenari.co.uk/api/list-product';

    try {
      setIsLoading(true);
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
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
      console.log('Token:', token); // ✅ Check if token exists
      if (!token) {
        throw new Error('Token is missing. Please log in.');
      }

      const response = await fetch('https://api.jenari.co.uk/api/cart/list', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cart items.');
      }

      const data = await response.json();
      return data.cartItems;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  // remove produc from cart
  const handleCartItemsDelete = async (product) => {
    const formdata = {
      cart_id: product.id,
    };
    console.log('form data', formdata);

    try {
      const response = await fetch('https://api.jenari.co.uk/api/cart/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Add token to headers
        },
        body: JSON.stringify(formdata),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Failed to add item to cart.');
      }

      const data = await response.json();
      console.log('deleted', data);
      // Display a success message
      toast.success(`Cart item "${product.product}" removed successfully!`);
    } catch (err) {
      console.log(err);
    }
  };

  // gett address
  const getAddress = async () => {
    console.log(token, 'address token');
    try {
      const response = await fetch(
        'https://api.jenari.co.uk/api/list/delivery/address',
        {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure token is passed
          },
        }
      );
      console.log('getted address', response);
      if (!response.ok) {
        throw new Error('Failed to fetch delivery Address.');
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
    console.log(addressData);
    try {
      const response = await fetch(
        'https://api.jenari.co.uk/api/add/delivery/address',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(addressData),
        }
      );
      console.log('addres new info', response);
      if (!response.ok) {
        throw new Error('Failed to add address');
      }

      const data = await response.json();
      console.log('addredsd', data);
      setIsLoading(false); // Set loading to true to disable login button while requesting
      return data;
    } catch (error) {
      console.error('Error adding delivery address:', error);
      setIsLoading(false); // Set loading to true to disable login button while requesting
      throw error;
    }
  };

  const handleCheckout = async (checkoutData) => {
    setIsLoading(true);
    console.log(checkoutData);
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
        'https://api.jenari.co.uk/api/cart/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(cleanedCheckoutData), // Pass the cleaned data here
        }
      );

      const data = await response.json();
      console.log('data payment', data);
      setIsLoading(false);
      return data;
    } catch (error) {
      console.error('Checkout error:', error);
      setIsLoading(false);
    }
  };

  const fetchOrderList = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://api.jenari.co.uk/api/list/orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log('data payment', data);
      setIsLoading(false);
      return data;
    } catch (error) {
      console.error('Checkout error:', error);
      setIsLoading(false);
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
        handleCartItemsDelete,
        fetchProducts,
        supermarketItems,
        getCategoryFromParams,
        setIsLoading,
        saveCartForCheckout,
        getAddress,
        createNewAddress,
        checkoutItems,
        handleCheckout,
        fetchOrderList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
