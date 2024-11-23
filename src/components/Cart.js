import React from 'react';
import CartItem from './CartItem'; // Import CartItem component

const Cart = ({ cart, setCart }) => {
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
    <div>
      <h1>StreamList Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div>
            {cart.map(item => (
              <CartItem key={item.id} item={item} removeItem={removeItem} />
            ))}
          </div>
          <h2>Total: ${total.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;