import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/HomePage";
import ProductDetail from "./components/ProductDetail";
import { FavoritesProvider } from "./context/FavoritesContext";
import { CommentsProvider } from "./context/CommentsContext";

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <CommentsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
      </CommentsProvider>
    </FavoritesProvider>
  );
};

export default App;
