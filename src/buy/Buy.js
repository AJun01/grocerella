import React, { Component } from 'react';
import GroceryBuyWidget from './BuyWidget'; 

export default class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [], 
      cart: [] // Store the items added to the cart
    };
  }

  componentDidMount() {
    fetch('../data/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ groceries: data });
      })
      .catch(error => console.error('Fetch error:', error));

    // Load cart from localStorage if it exists
    const cart = JSON.parse(localStorage.getItem('groceryCart')) || [];
    this.setState({ cart });
  }

  handleBuy = (name, price, type) => {
    const { cart } = this.state;

    // Add the new grocery item to the cart
    const newCartItem = { name, price, type };
    const updatedCart = [...cart, newCartItem];

    // Update the state and save to localStorage
    this.setState({ cart: updatedCart });
    localStorage.setItem('groceryCart', JSON.stringify(updatedCart));

    alert(`${name} has been added to your cart!`); // Inform the user
  };

  render() {
    return (
      <div>
        <h2>Buy Groceries</h2>
        {/* Add the container here */}
        <div className="container">
          {this.state.groceries.map((grocery, index) => (
            <GroceryBuyWidget
              key={index}
              name={grocery.name}
              price={grocery.price}
              type={grocery.type}
              image={grocery.image}
              onBuy={this.handleBuy} // Pass the buy handler
            />
          ))}
        </div>
      </div>
    );
  }
}