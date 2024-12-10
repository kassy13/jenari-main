import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Index from "./pages/Index";
import Charity from "./pages/Charity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="charity" element={<Charity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
