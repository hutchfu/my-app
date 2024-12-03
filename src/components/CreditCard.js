import React, { useState } from "react";

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedValue = value
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""; // Format as 1234 5678 9012 3456
    setCardNumber(formattedValue);
  };

  const handleSave = () => {
    if (cardNumber.length === 19) {
      alert("Card saved successfully!");
      localStorage.setItem("creditCard", cardNumber);
    } else {
      alert("Please enter a valid credit card number.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Enter Credit Card Information</h1>
      <input
        type="text"
        value={cardNumber}
        onChange={handleInputChange}
        placeholder="1234 5678 9012 3456"
        maxLength={19}
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default CreditCard;