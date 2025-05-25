import React from "react";

const BuyBox = ({ name, price, priceDiscount, options }) => {
  return (
    <div className="buy-box">
      <h1>{name}</h1>
      <p>
        {priceDiscount ? (
          <>
            <span style={{ textDecoration: 'line-through', color: 'gray' }}>R$ {price.toFixed(2)}</span>
            <span style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>R$ {priceDiscount.toFixed(2)}</span>
          </>
        ) : (
          <span>R$ {price.toFixed(2)}</span>
        )}
      </p>

      {}
      {options && (
        <div>
          <label htmlFor="size">Tamanho:</label>
          <select id="size">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      )}

      <button style={{ marginTop: '1rem' }}>Comprar</button>
    </div>
  );
};

export default BuyBox;
