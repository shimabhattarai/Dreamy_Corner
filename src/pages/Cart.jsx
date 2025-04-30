import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      
      <div className="cart-items">
        <div className="cart-headers">
          <span className="header-item">Product</span>
          <span className="header-price">Price</span>
          <span className="header-quantity">Quantity</span>
          <span className="header-total">Total</span>
          <span className="header-actions">Actions</span>
        </div>
        
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                {item.color && <p>Color: {item.color}</p>}
                {item.size && <p>Size: {item.size}</p>}
              </div>
            </div>
            
            <div className="item-price">${item.price.toFixed(2)}</div>
            
            <div className="item-quantity">
              <button 
                className="quantity-btn" 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                className="quantity-btn" 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            
            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            
            <div className="item-actions">
              <button 
                className="remove-btn" 
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="subtotal">
          <span>Subtotal:</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
        <div className="shipping">
          <span>Shipping:</span>
          <span>Calculated at checkout</span>
        </div>
        <div className="total">
          <span>Total:</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
        
        <div className="cart-actions">
          <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;