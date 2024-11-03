import React, { Component } from 'react';
import '../styles/profile.css';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [],
      totalPrice: 0
    };
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('groceryCart')) || [];
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0); // Calculate total price
    this.setState({ groceries: cart, totalPrice });
  }

  clearCart = () => {
    localStorage.removeItem('groceryCart');
    this.setState({ groceries: [], totalPrice: 0 });
  };

  render() {
    return (
      <div className="profile">
        <h2>Your Grocery Cart</h2>
        {this.state.groceries.length > 0 ? (
          <div>
            <ul>
              {this.state.groceries.map((grocery, index) => (
                <li key={index}>
                  {grocery.name} - ${grocery.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <p>Total Items: {this.state.groceries.length}</p>
              <p>Total Price: ${this.state.totalPrice.toFixed(2)}</p>
            </div>
            <button onClick={this.clearCart} className="clear-cart-button">Clear Cart</button>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    );
  }
}