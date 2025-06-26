import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "../Redux/Auth/authActions";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl font-bold">My E-Commerce</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        {isLoggedIn ? (
          <button onClick={handleLogout}> Logout </button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
        <Link to="/cart">Cart {cart.length}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
