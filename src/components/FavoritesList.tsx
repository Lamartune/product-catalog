import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

const FavoritesList: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="block">
      <h3>Favorites</h3>
      <div>
        <ul>
          {favorites.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </Link>
              <button onClick={() => toggleFavorite(product)}>
                Remove from Favorites
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FavoritesList;
