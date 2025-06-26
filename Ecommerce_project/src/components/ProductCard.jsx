import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCartAction } from "../Redux/Products/productActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addToCartAction(product));
  };
  return (
    <div className="border p-4 rounded shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-2"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>₹{product.price}</p>
      {/* <Link to={`/product/${product.id}`} className="text-blue-600 underline">
      View Details
    </Link> */}
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
