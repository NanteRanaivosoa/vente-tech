import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites">
      <h2>Mes Favoris</h2>
      {favorites.length === 0 ? (
        <p>Aucun produit en favori.</p>
      ) : (
        <div className="favorite-list">
          {favorites.map((product) => (
            <div key={product.id} className="favorite-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price} Ar</p>
              <Link to={`/product/${product.id}`} className="details-btn">
                Voir Détails
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
