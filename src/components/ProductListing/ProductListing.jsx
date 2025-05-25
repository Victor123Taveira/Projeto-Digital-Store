import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductListing.css';

const ProductListing = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
