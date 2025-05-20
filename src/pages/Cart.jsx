import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } =useContext(CartContext);
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Your Cart is Empty
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Looks like you haven't added anything yet. Start shopping now!
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Your Cart
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Cart Items */}
        <div className="lg:col-span-8 bg-white shadow-lg rounded-lg p-6">
          <div className="grid grid-cols-5 gap-6 text-sm font-semibold bg-gray-100 py-3 px-6 border-b">
            <span>Product</span>
            <span className="text-center">Price</span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Total</span>
            <span className="text-center">Actions</span>
          </div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-5 items-center gap-6 py-6 px-6 border-b hover:bg-gray-50"
            >
              {/* Product Details */}
              <div className="flex items-center space-x-4 col-span-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  {item.color && (
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                  )}
                  {item.size && (
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                  )}
                </div>
              </div>

              {/* Price */}
              <div className="text-center font-medium text-gray-800">
                ${item.price.toFixed(2)}
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  className="px-4 py-2 bg-gray-200 rounded-lg text-lg font-bold hover:bg-gray-300 disabled:opacity-50"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span className="w-12 text-center text-lg font-semibold">
                  {item.quantity}
                </span>
                <button
                  className="px-4 py-2 bg-gray-200 rounded-lg text-lg font-bold hover:bg-gray-300"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* Total for this Item */}
              <div className="text-center font-medium text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              {/* Remove Item Button */}
              <div className="text-center">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Checkout Summary */}
        <div className="lg:col-span-4 bg-white shadow-lg rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Cart Summary
            </h2>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between mb-4 text-lg font-medium text-gray-800">
            <span>Subtotal:</span>
            <span className="font-semibold text-indigo-600">
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between mb-4 text-sm text-gray-600">
            <span>Shipping:</span>
            <span>Calculated at checkout</span>
          </div>

          {/* Total */}
          <div className="flex justify-between text-xl font-bold border-t pt-4 mt-6">
            <span>Total:</span>
            <span className="text-indigo-600">
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col space-y-4">
            <Link
              to="/"
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition duration-300 text-sm text-center"
            >
              Continue Shopping
            </Link>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 text-sm">
              <NavLink to="/payment"> Proceed to Checkout</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
