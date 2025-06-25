import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white flex justify-between">
    <h1 className="text-xl font-bold">My E-Commerce</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/cart">Cart</Link>
    </div>
  </nav>
);

export default Navbar;
