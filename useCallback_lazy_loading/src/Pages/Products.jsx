import React, { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/beauty")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <div className="container">
      <h1>Beauty Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div className="card-body">
              <h2>{product.title}</h2>
              <p className="price">${product.price.toFixed(2)}</p>
              <p className="rating">⭐ {product.rating}</p>
              <p className="desc">{product.description.slice(0, 60)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
