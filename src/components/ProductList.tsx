import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import { useFavorites } from "../context/FavoritesContext";

const products: Product[] = [
  {
    id: 1,
    image: "image1.jpg",
    title: "Product 1",
    description: "Description 1"
  },
  {
    id: 2,
    image: "image2.jpg",
    title: "Product 2",
    description: "Description 2"
  },
  {
    id: 3,
    image: "image3.jpg",
    title: "Product 3",
    description: "Description 3"
  }
];

const ProductList: React.FC = () => {
  const { addToFavorites } = useFavorites();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </Link>
            <button onClick={() => addToFavorites(product)}>
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
