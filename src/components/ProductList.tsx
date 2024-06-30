import React from "react";
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
  },
  {
    id: 4,
    image: "../../src/assets/ProductImages/TOMANDJERRY.jpg",
    brand: "ICONIC",
    title: "Product 4",
    description: "Description 4"
  },
  {
    id: 5,
    image: "../../src/assets/ProductImages/COTTON.jpg",
    brand: "ICONIC",
    title: "Product 5",
    description: "Description 5"
  }
];

interface ProductListProps {
  searchTerm: string;
}

const ProductList: React.FC<ProductListProps> = ({ searchTerm }) => {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-24">
        {filteredProducts.map((product) => (
          <div key={product.id} className="w-full max-w-[340px] max-h-[610px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
