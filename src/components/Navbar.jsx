import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import "./Navbar.css";

const Navbar = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <nav className="navbar">
      <h1>Vente Tech</h1>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/catalog">Catalogue</Link></li>
        <li><Link to="/favorites">Favoris ({favorites.length})</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
