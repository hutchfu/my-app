import React from "react";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const taxRate = 0.08; // Example tax rate (8%)

  // Calculate the subtotal, tax, and total for the specific item
  const itemSubtotal = item.price * item.amount;
  const itemTax = itemSubtotal * taxRate;
  const itemTotal = itemSubtotal + itemTax;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{item.service}</h3>
      <p>{item.serviceInfo}</p>
      <img
        src={item.img}
        alt={item.service}
        style={{ width: "50px", height: "50px", marginBottom: "10px" }}
      />
      <p>Price per item: ${item.price.toFixed(2)}</p>
      <p>Quantity: {item.amount}</p>

      {/* Quantity Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>

      {/* Per-item Subtotal, Tax, and Total */}
      <div style={{ marginTop: "10px", textAlign: "right" }}>
        <p><strong>Item Subtotal:</strong> ${itemSubtotal.toFixed(2)}</p>
        <p><strong>Tax (8%):</strong> ${itemTax.toFixed(2)}</p>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          <strong>Total:</strong> ${itemTotal.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;