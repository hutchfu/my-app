import React, { useState } from "react";
import productData from "../Data/data"; // Import the product data

const Cart = ({ cart, setCart }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.amount, 0);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      // If the product already exists, just increase the quantity
      updateQuantity(product.id, 1);
      return;
    }

    // Check if another plan is already in the cart
    if (cart.length > 0) {
      setModalMessage("You can only purchase one plan at a time.");
      setModalVisible(true);
      return;
    }

    setCart([...cart, { ...product, amount: 1 }]);
  };

  const updateQuantity = (id, amount) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? { ...item, amount: Math.max(1, item.amount + amount) }
            : item
        )
      );
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <h1>Welcome to Your Cart</h1>
      <p>Your one-stop solution for managing subscriptions.</p>

      <h2>Available Subscriptions</h2>
      {productData.map((product) => (
        <div key={product.id}>
          <h3>{product.service}</h3>
          <p>{product.serviceInfo}</p>
          <p>Price: ${product.price}</p>
          <img src={product.img} alt={product.service} style={{ width: '50px', height: '50px' }} />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>Your Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.service}</h3>
            <p>{item.serviceInfo}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.amount}</p>
            <img src={item.img} alt={item.service} style={{ width: '50px', height: '50px' }} />
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h2>Total: ${total.toFixed(2)}</h2>

      {/* Modal Rendering */}
      {modalVisible && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2>{`Unable to Purchase`}</h2>
            <p>{modalMessage}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
};

export default Cart;