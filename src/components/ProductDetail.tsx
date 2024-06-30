import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/product";
import Comments from "./Comments";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toggleCart, isInCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!id) {
    return <h2>Product not found</h2>;
  }

  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 flex justify-center items-center max-h-[900px]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full rounded-lg object-contain h-full"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div>
              <button
                onClick={() => toggleCart(product)}
                className={`px-10 py-2 rounded  text-white hover:scale-105 ${
                  isInCart(product.id) ? "bg-red-500" : "bg-[#EE964B]"
                }`}
              >
                {isInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
              </button>

              <span className=" mb-2 mr-2 px-4 py-2 rounded  text-white">
                <FontAwesomeIcon
                  onClick={() => toggleFavorite(product)}
                  icon={isFavorite(product.id) ? solidHeart : regularHeart}
                  className={`text-2xl hover:cursor-pointer ${
                    isFavorite(product.id) ? "text-red-500" : "text-black"
                  } hover:scale-125`}
                />
              </span>
            </div>
            <Comments productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
