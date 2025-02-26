import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <BrowserRouter>

      <nav className="navbar">
        <h1>TIC Mada-Services Company</h1>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/catalog">Catalogue</Link></li>
        </ul>
      </nav>

    </BrowserRouter>




  );
};

export default Navbar;
