const Cart = ({ cart }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;
