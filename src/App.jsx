import axios from "./axios";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  // NOTE: using useEffect
  useEffect(function () {
    async function getProducts() {
      try {
        setError("");
        const data = await axios.get("/products");
        setProducts(data.data.products);
      } catch (err) {
        setError(err.message);
      }
    }
    getProducts();
  }, []);
  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product, i) => (
          <li key={product.title}>
            {i} {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
