import React from "react";
import ProductList from "../../components/ProductList";
import FavoritesList from "../../components/FavoritesList";

const LandingSection: React.FC = () => {
  return (
    <div>
      <ProductList />
      <FavoritesList />
    </div>
  );
};

export default LandingSection;
