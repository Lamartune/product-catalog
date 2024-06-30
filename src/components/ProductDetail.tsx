import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/product";
import Comments from "./Comments";

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
      <table>
        <tbody>
          <tr>
            <td>
              <img src={product.image} alt={product.title} />
            </td>
            <td>
              <h1>{product.title}</h1>
            </td>
          </tr>
        </tbody>
        <p>{product.description}</p>
        <Comments productId={product.id} />
      </table>
    </div>
  );
};

export default ProductDetail;
