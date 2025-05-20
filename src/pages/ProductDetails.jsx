import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../context/CartContext";
import dummyProducts from "../data/product";
import { Bounce, toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
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
      // alert();

      toast.success(
        `${quantity} ${product.name}${quantity > 1 ? "s" : ""} added to cart!`,
        {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-10 text-red-500">Product not found.</div>
    );
  }

  return (
    <div className="product-details-page py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Product Images */}
        <div className="product-images space-y-4">
          <div className="main-image border rounded-lg overflow-hidden">
            <img
              src={
                product.images && product.images.length > 0
                  ? product.images[selectedImage]
                  : product.image
              }
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {product.images && product.images.length > 1 && (
            <div className="image-thumbnails flex space-x-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                    selectedImage === index
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="product-info space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="text-2xl font-semibold text-blue-600">
            ${product.price}
          </div>

          {/* Quantity Controls */}
          <div className="quantity-controls flex items-center space-x-3">
            <button
              onClick={decrementQuantity}
              className="px-3 py-1 border rounded text-lg bg-gray-100 hover:bg-gray-200"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="w-16 text-center border rounded px-2 py-1"
            />
            <button
              onClick={incrementQuantity}
              className="px-3 py-1 border rounded text-lg bg-gray-100 hover:bg-gray-200"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
