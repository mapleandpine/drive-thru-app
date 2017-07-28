import React, { Component } from 'react';
import uuid from 'uuid';
import Cam from './Components/Cam/Cam';
import Orders from './Components/Orders/Orders';
import ActiveOrder from './Components/ActiveOrder/ActiveOrder';
import './App.css';

// use this Order definition via `let myOrder = new Order()`
// maybe put this `Order` definition in its own file and import it
// data definition and state should live top-level
class OrderClass {
  constructor(title, category) {
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
          class: 'cheeseburger',
          title: 'Cheeseburger',
          price: '4.99'
        },
        {
          id: uuid.v4(),
          class: 'hotdog',
          title: 'Hot Dog',
          price: '4.99'
        },
        {
          id: uuid.v4(),
          class: 'chicken',
          title: 'Chicken',
          price: '4.99'
        },
        {
          id: uuid.v4(),
          class: 'fries',
          title: 'Fries',
          price: '1.99'
        },
        {
          id: uuid.v4(),
          class: 'coffee',
          title: 'Coffee',
          price: '1.99'
        },
        {
          id: uuid.v4(),
          class: 'soda',
          title: 'Soda',
          price: '1.99'
        },
        {
          id: uuid.v4(),
          class: 'beer',
          title: 'Beer',
          price: '1.99'
        },
        {
          id: uuid.v4(),
          class: 'cake',
          title: 'Cake',
          price: '1.99'
        },
        {
          id: uuid.v4(),
          class: 'icecream',
          title: 'Ice Cream',
          price: '1.99'
        }
      ]
    }
  }

  firstOrder() {
    this.setState({orders: [
      {
        items: [],
        id: uuid.v4(),
        date: new Date()
      }
    ]})
  }

  handleAddOrder(id) {
    this.setState((prevState, props) => {
      // copy the array
      let orders = prevState.orders.slice();
      orders.push(id);
      return {
        orders: orders
      }
    });
  }

  handleOnDeleteOrder(id){
    let orders = this.state.orders;
    let index = orders.findIndex(x => x.id === id);
    orders.splice(index, 1);
    this.setState({orders:orders});
    // this.setState(function(prevState, props){
    //   let reducedOrders = prevState.orders.filter(id => id !== orderToRemove);
    //   return {
    //     orders: reducedOrders
    //   }
    // });
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

  componentWillMount() {
    this.firstOrder();
  }

  render() {
    return (
      <div className="App">
        <h1 className="heading">OrderTRON 9000</h1>
        <Orders orders={this.state.orders} onDeleteOrder={this.handleOnDeleteOrder.bind(this)} />
        <Cam />
        <ActiveOrder menu={this.state.menu} activeOrder={this.state.activeOrder} onAddItem={this.handleAddItem.bind(this)} onDeleteItem={this.handleDeleteItem.bind(this)}/>
      </div>
    );
  }
}

export default App;
