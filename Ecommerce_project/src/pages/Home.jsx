import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../Redux/Products/productActions";

const Home = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const fetchProducts = () => {
    dispatch(fetchProductsAction());
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
