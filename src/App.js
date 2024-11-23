import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart"; // Cart component
import StreamList from "./components/StreamList"; // StreamList component
import NavBar from "./components/NavBar"; // NavBar component
import Movies from "./components/Movies"; // Movies component
import About from "./components/About"; // About component
import productData from "./Data/data"; // Product data

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
          <Routes>
            <Route
              path="/"
              element={<StreamList addToCart={addToCart} />}
            />
            <Route
              path="/movies"
              element={<Movies />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />} // Ensure you pass setCart here
            />
            <Route
              path="/about"
              element={<About />}
            />
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