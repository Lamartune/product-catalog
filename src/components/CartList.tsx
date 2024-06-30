import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const FavoritesList: React.FC = () => {
  const { cart, toggleCart } = useCart();

  return (
    <div className="block">
      <h3 className="text-2xl font-bold mb-4">Cart</h3>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is currently empty.</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="mb-4">
                <Link to={`/product/${product.id}`} className="block mb-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-cover mb-2"
                  />
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  <p className="text-gray-600">{product.description}</p>
                </Link>
                <button
                  onClick={() => toggleCart(product)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FavoritesList;
