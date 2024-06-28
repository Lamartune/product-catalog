import React from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types/Product";
import Comments from "./Comments";

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

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <h2>Product not found</h2>;
  }

  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <Comments productId={product.id} />
    </div>
  );
};

export default ProductDetail;
