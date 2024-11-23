import React from "react";

const Cart = ({ cart, setCart }) => {
  // Define removeItem function here
  const removeItem = (id) => {
    console.log("setCart: ", setCart);
    console.log("cart: ", cart);
    // Remove item from the cart by filtering out the item with the given id
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>StreamList Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.img} alt={item.service} width="50" />
              <span>{item.service}</span>
              <span>{item.price}</span>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;