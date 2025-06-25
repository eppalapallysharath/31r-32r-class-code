import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="p-4">
      <img src={product.image} className="w-64 h-64" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
