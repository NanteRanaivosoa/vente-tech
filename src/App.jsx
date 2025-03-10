import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/productDetail";
import { FavoritesProvider } from "./context/FavoritesContext";
import Favorites from "./pages/Favorites";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";

const App = () => {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>


  )

}

export default App;
