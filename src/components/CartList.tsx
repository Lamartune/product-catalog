import React from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";

const FavoritesList: React.FC = () => {
  const { cart } = useCart();

  return (
    <div className="block">
      <h3 className="text-2xl font-bold mb-4">Cart</h3>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is currently empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-24">
            {cart.map((product) => (
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
    </div>
  );
};

export default FavoritesList;
