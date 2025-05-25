import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">
        R$ {product.price.toFixed(2).replace('.', ',')}
        {product.priceDiscount && (
          <span className="price-discount">
            R$ {product.priceDiscount.toFixed(2).replace('.', ',')}
          </span>
        )}
      </p>
    </div>
  );
};

export default ProductCard;
