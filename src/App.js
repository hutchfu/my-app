import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct usage of Routes
import Cart from "./components/Cart"; // Ensure the Cart component is in this path
import StreamList from "./components/StreamList"; // Ensure the StreamList component is in this path
import NavBar from "./components/NavBar"; // Ensure the NavBar component is in this path
import Movies from "./components/Movies"; // Ensure the Movies component is in this path
import About from "./components/About"; // Ensure the About component is in this path
import productData from "./Data/data"; // Ensure the data is in this path

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  return (
    <Router>
      <div>
        <NavBar />

        <header style={styles.header}>
          <h1>StreamList</h1>
          <p>Manage your favorite subscriptions easily!</p>
        </header>

        <main style={styles.main}>
          <Routes> {/* Correct usage of Routes */}
            <Route path="/" element={<StreamList addToCart={addToCart} />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer style={styles.footer}>
          <p>© 2024 StreamList. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

const styles = {
  header: {
    textAlign: "center",
    backgroundColor: "#282c34",
    color: "white",
    padding: "1rem",
  },
  main: {
    padding: "1rem",
  },
  footer: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#282c34",
    color: "white",
  },
};

export default App;