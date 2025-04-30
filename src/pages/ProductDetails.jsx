import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { dummyProducts } from "../data/product";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Simulate fetching product from an API
    setTimeout(() => {
      const foundProduct = dummyProducts.find((p) => p.id === parseInt(id, 10));
      setProduct(foundProduct || null);
      setLoading(false);
    }, 300);
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      alert(
        `${quantity} ${product.name}${quantity > 1 ? "s" : ""} added to cart!`
      );
    }
  };

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (!product) {
    return <div className="not-found">Product not found.</div>;
  }

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        {/* Product Images */}
        <div className="product-images">
          <div className="main-image">
            <img
              src={
                product.images && product.images.length > 0
                  ? product.images[selectedImage]
                  : product.image
              }
              alt={product.name}
            />
          </div>

          {product.images && product.images.length > 1 && (
            <div className="image-thumbnails">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className={selectedImage === index ? "selected" : ""}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="price">${product.price}</div>

          {/* Quantity Controls */}
          <div className="quantity-controls">
            <button onClick={decrementQuantity}>-</button>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
            <button onClick={incrementQuantity}>+</button>
          </div>

          {/* Add to Cart */}
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
