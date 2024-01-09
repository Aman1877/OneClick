import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutuPage from "./pages/AboutuPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductDetailPage />} />
      <Route path="/aboutus" element={<AboutuPage />} />
    </Routes>
  );
}

export default App;
