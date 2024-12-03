import React from "react";
import productData from "../Data/data";
import "./Cart.css"; // Importing the CSS file for styling
import { useNavigate } from "react-router-dom"; // For navigation to credit card page

const Cart = ({ cart, setCart }) => {
  const taxRate = 0.08; // Tax rate
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.amount, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const navigate = useNavigate();

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, amount: Math.max(1, item.amount + amount) }
          : item
      )
    );
  };

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      updateQuantity(product.id, 1);
      return;
    }
    setCart([...cart, { ...product, amount: 1 }]);
  };

  const handleCheckout = () => {
    console.log("Navigating to /checkout");
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h1>Welcome to Your Cart</h1>
      <p className="cart-subtitle">Your one-stop solution for managing subscriptions.</p>

      {/* Available Subscriptions */}
      <h2>Available Subscriptions</h2>
      <div className="product-list">
        {productData.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.service}</h3>
            <p>{product.serviceInfo}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <img
              src={product.img}
              alt={product.service}
              className="product-image"
            />
            <button onClick={() => addToCart(product)} className="add-button">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Items */}
      <h2>Your Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.service}</h3>
              <p>{item.serviceInfo}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.amount}</p>
              <img
                src={item.img}
                alt={item.service}
                className="cart-item-image"
              />
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Cart Summary */}
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>
          <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
        </p>
        <p>
          <strong>Tax (8%):</strong> ${tax.toFixed(2)}
        </p>
        <p className="cart-total">
          <strong>Total:</strong> ${total.toFixed(2)}
        </p>
      </div>

      {/* Checkout Button */}
      <div className="checkout-button">
        <button onClick={handleCheckout} className="checkout-button-style">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;