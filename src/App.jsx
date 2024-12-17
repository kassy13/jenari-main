import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Index from "./pages/Index";
import Charity from "./pages/Charity";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Supermarket from "./pages/Supermarket";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="charity" element={<Charity />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="supermarket" element={<Supermarket />} />
        </Route>
        <Route path="signUp" element={<SignUp />} />
        <Route path="signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
