import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Cart from "./components/Cart";
import CreditCard from "./components/CreditCard";
import StreamList from "./components/StreamList"; // StreamList component
import NavBar from "./components/NavBar"; // NavBar component
import Movies from "./components/Movies"; // Movies component
import TMDBMovies from "./components/TMDBMovies";
import About from "./components/About"; // About component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [cart, setCart] = useState([]); // Cart state

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        {isAuthenticated && <NavBar />}

        {/* Header */}
        <header style={styles.header}>
          <h1>StreamList</h1>
          <p>Manage your favorite subscriptions easily!</p>
        </header>

        <main style={styles.main}>
          <Routes>
            {/* Public Login Route */}
            <Route
              path="/login"
              element={<Login onLoginSuccess={handleLoginSuccess} />}
            />

            {/* Protected Routes */}
            {isAuthenticated ? (
              <>
                <Route
                  path="/"
                  element={<StreamList addToCart={addToCart} />}
                />
                <Route path="/movies" element={<Movies />} />
                <Route
                  path="/cart"
                  element={<Cart cart={cart} setCart={setCart} />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/tmdb" element={<TMDBMovies />} />
                <Route path="/checkout" element={<CreditCard />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
          </Routes>
        </main>

        {/* Footer */}
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