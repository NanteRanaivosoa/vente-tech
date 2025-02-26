import React, { useState } from "react";
import { Link } from "react-router-dom";


const Catalog = () => {

    const [products, _] = useState();

    return (
        <div className="catalog">
            <h2>Catalogue des Produits</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src="{product.image}" alt="{product.title}" />
                        <h3>{product.title}</h3>
                        <p>{product.price} Ariary</p>
                        <Link to={`/product/${product.id}`} className="details-btn">
                            Voir details
                        </Link>
                    </div>
                ))}

            </div>
        </div>

    );
};
export default Catalog;