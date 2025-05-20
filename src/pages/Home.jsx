import React, { useState, useEffect } from "react";
import ProductCard from "../Component/ProductCard";
import dummyProducts from "../data/product";
import logo from "../assets/logo.jpg"; // renamed import from `image` to `logo`

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(dummyProducts);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="home-page bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to DreamyCorner</h1>
          <p className="text-lg mb-6">Your one-stop destination for quality products</p>
          <img src={logo} alt="DreamyCorner Logo" className="mx-auto w-32 h-32 rounded-full mb-6 shadow-md" />
          <button className="bg-white text-indigo-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Featured Products</h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
