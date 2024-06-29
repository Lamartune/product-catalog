import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/HomePage";
import ProductDetail from "./components/ProductDetail";
import Layout from "./layout/Layout";
import { FavoritesProvider } from "./context/FavoritesContext";
import { CommentsProvider } from "./context/CommentsContext";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <FavoritesProvider>
      <CommentsProvider>
        <Router>
          <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
            <Routes>
              <Route path="/" element={<Home searchTerm={searchTerm} />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </Layout>
        </Router>
      </CommentsProvider>
    </FavoritesProvider>
  );
};

export default App;
