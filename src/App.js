import React, { Component } from 'react';
import uuid from 'uuid';
import Cam from './Components/Cam/Cam';
// import Orders from './Components/Orders/Orders';
import ActiveOrder from './Components/ActiveOrder/ActiveOrder';
import './App.css';

// use this Order definition via `let myOrder = new Order()`
// maybe put this `Order` definition in its own file and import it
// data definition and state should live top-level
class Order {
  constructor(title, category) {
    this.title = title;
    this.category = category;

    this.items = [];
    this.id = uuid.v4();
    this.date = new Date();
  }
}

class App extends Component {

  constructor(props) {
    super(props);

    // ~store
    this.state = {
      orders: [],
      activeOrder: [],
      menu: [
      {
        id: uuid.v4(),
        title: 'Hamburger',
        price: '4.99'
      },
      {
        id: uuid.v4(),
        title: 'Fries',
        price: '1.99'
      },
      {
        id: uuid.v4(),
        title: 'Drink',
        price: '1.99'
      }
      ]
    }
  }

  handleAddOrder(order) {
    this.setState((prevState, props) => {
      // copy the array
      let orders = prevState.orders.slice();
      orders.push(order);
      return {
        orders: orders
      }
    });
  }

  handleOnDeleteOrder(orderToRemove){
    this.setState(function(prevState, props){
      let reducedOrders = prevState.orders.filter(order => order !== orderToRemove);
      return {
        orders: reducedOrders
      }
    });
  }

  handleAddItem(newOrder) {
    let activeOrder = this.state.activeOrder;
    activeOrder.push(newOrder);
    this.setState({activeOrder:activeOrder});
  }

  handleDeleteItem(id){
    let activeOrder = this.state.activeOrder;
    let index = activeOrder.findIndex(x => x.id === id);
    activeOrder.splice(index, 1);
    this.setState({activeOrder:activeOrder});
  }

  render() {
    return (
      <div className="App">
        <Cam />
        <ActiveOrder menu={this.state.menu} activeOrder={this.state.activeOrder} onAddItem={this.handleAddItem.bind(this)} onDeleteItem={this.handleDeleteItem.bind(this)}/>
      </div>
    );
  }
}

// <Orders orders={this.state.orders} onDelete={this.handleOnDeleteOrder.bind(this)} />

export default App;
