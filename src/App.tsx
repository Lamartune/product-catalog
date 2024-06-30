import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/HomePage";
import ProductDetail from "./components/ProductDetail";
import Layout from "./layout/Layout";
import { FavoritesProvider } from "./context/FavoritesContext";
import { CommentsProvider } from "./context/CommentsContext";
import FavoritesPage from "./pages/FavoritesPage";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CartProvider>
      <FavoritesProvider>
        <CommentsProvider>
          <Router>
            <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <Routes>
                <Route path="/" element={<Home searchTerm={searchTerm} />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </Layout>
          </Router>
        </CommentsProvider>
      </FavoritesProvider>
    </CartProvider>
  );
};

export default App;
