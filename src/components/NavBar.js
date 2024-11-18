import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

const NavBar = () => (
  <nav>
      <ul>
          <li><Link to="/"><i className="fas fa-list"></i> StreamList</Link></li>
          <li><Link to="/movies"><i className="fas fa-film"></i> Movies</Link></li>
          <li><Link to="/cart"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
          <li><Link to="/about"><i className="fas fa-info-circle"></i> About</Link></li>
      </ul>
  </nav>
);

export default NavBar;