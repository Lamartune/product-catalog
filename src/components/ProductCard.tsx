import React from "react";
import { Product } from "../types/Product";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { toggleCart, isInCart } = useCart();

  return (
    <div className="w-full max-w-[340px] max-h-[610px] hover:scale-105 transition-transform">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative group">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </Link>
          <button
            onClick={() => toggleFavorite(product)}
            className="absolute bottom-0 right-0 mb-2 mr-2 px-4 py-2 rounded text-white"
          >
            <FontAwesomeIcon
              icon={isFavorite(product.id) ? solidHeart : regularHeart}
              className={`text-2xl ${
                isFavorite(product.id) ? "text-red-500" : "text-white"
              } hover:scale-125`}
            />
          </button>
          <div className="absolute bottom-1 left-5 mb-2 mr-2 flex space-x-2 hover:scale-105 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => toggleCart(product)}
              className={
                isInCart(product.id)
                  ? "bg-red-500" + " px-10 py-2 rounded  text-white"
                  : "bg-[#EE964B]" + " px-16 py-2 rounded  text-white"
              }
            >
              {isInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>

        <Link to={`/product/${product.id}`}>
          <div className="p-4">
            <h3 className="font-barcode text-2xl mb-1">{product.brand}</h3>
            <h2 className="text-xl mb-2">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
