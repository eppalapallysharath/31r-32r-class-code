import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Router>
      <Navbar />
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
          <Route path="/cart" element={<Cart cart={null} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      )}
      <Toaster />
    </Router>
  );
};

export default App;
