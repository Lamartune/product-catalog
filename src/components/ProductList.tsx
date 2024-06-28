import React, { useState } from "react";
import { Product } from "../types/Product";
import ProductCard from "./ProductCard";

const products: Product[] = [
  {
    id: 1,
    image: "../../src/assets/ProductImages/ROCKSTAR.jpg",
    brand: "ICONIC",
    title: "ROCKSTAR JEAN",
    description: "Straight, Normal Bel"
  },
  {
    id: 2,
    image: "../../src/assets/ProductImages/COTTON.jpg",
    brand: "ICONIC",
    title: "Product 2",
    description: "Description 2"
  },
  {
    id: 3,
    image: "../../src/assets/ProductImages/TOMANDJERRY.jpg",
    brand: "ICONIC",
    title: "Product 3",
    description: "Description 3"
  }
];

const ProductList: React.FC = () => {
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

      <div className="flex flex-wrap gap-4 mb-24">
        {filteredProducts.map((product) => (
          <div key={product.id} className="w-full max-w-[340px] max-h-[482px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
