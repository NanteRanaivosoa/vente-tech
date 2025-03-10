import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import productsData from "../data/products.json";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { toggleFavorite, favorites } = useContext(FavoritesContext);
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Produit introuvable</h2>;
  }

  const isFavorite = favorites.some((fav) => fav.id === product.id);

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p className="price">{product.price} Ar</p>
      <button className="fav-btn" onClick={() => toggleFavorite(product)}>
        {isFavorite ? "Retirer des Favoris" : "Ajouter aux Favoris"}
      </button>
    </div>
  );
};

export default ProductDetail;
