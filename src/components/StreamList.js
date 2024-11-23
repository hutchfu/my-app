import React from 'react';
import list from '../Data/data'; // Import the list from data

const StreamList = ({ addToCart }) => {
  return (
    <div className="stream-list">
      <h2>Your Streaming List</h2>
      {list.map(service => (
        <div key={service.id}>
          <h3>{service.service}</h3>
          <p>{service.serviceInfo}</p>
          <p>Price: ${service.price}</p>
          <img src={service.img} alt={service.service} style={{ width: "50px", height: "50px" }} />
          <button onClick={() => addToCart(service)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default StreamList;