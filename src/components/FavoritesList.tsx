import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import ProductCard from "./ProductCard";

const FavoritesList: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <h3 className="text-2xl font-bold mb-4">Favorites</h3>
      <div>
        {favorites.length === 0 ? (
          <p>You currently have no favorite products.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-24">
            {favorites.map((product) => (
              <div
                key={product.id}
                className="w-full max-w-[340px] max-h-[610px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FavoritesList;
