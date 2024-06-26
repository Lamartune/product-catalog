import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

const FavoritesList: React.FC = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </Link>
            <button onClick={() => removeFromFavorites(product.id)}>
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
