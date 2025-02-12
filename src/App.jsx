import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Index from "./pages/Index";
import Charity from "./pages/Charity";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Supermarket from "./pages/Supermarket";
import SignUp from "./pages/Signup";
import LogIn from "./pages/LogIn";
import Faq from "./pages/Faq";
import ProductDetails from "./pages/ProductDetails";
import { AuthProvider } from "./components/context/AuthContex";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReturnPolicy from "./pages/ReturnPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import OrderSummary from "./pages/OrderSummary";
import ErrorPage from "./pages/ErrorPage";
import PasswordReset from "./pages/PasswordReset";
import SignupOtp from "./pages/SignupOtp";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="charity" element={<Charity />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="supermarket" element={<Supermarket />} />
            <Route path="faq" element={<Faq />} />
            <Route path="return-policy" element={<ReturnPolicy />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-conditions" element={<TermsCondition />} />
            <Route path="product-details/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="payment" element={<Payment />} />
            <Route path="orders" element={<Orders />} />
            <Route path="order-summary" element={<OrderSummary />} />
          </Route>
          <Route path="signUp" element={<SignUp />} />
          <Route path="signup/otp" element={<SignupOtp />} />

          <Route path="signIn" element={<LogIn />} />
          <Route path="reset/password" element={<PasswordReset />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
