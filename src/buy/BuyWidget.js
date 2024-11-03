import React from 'react';
import '../styles/widget.css';

const GroceryBuyWidget = ({ name, price, type, image, onBuy }) => {
    return (
        <div className="grocery-buy-widget">
            <img src={image} alt={name} className="grocery-image" /> {/* Display image */}
            <h3>{name}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            <p>Type: {type}</p>
            <button onClick={() => onBuy(name, price, type)}>Add to Cart</button>
        </div>
    );
};

export default GroceryBuyWidget;