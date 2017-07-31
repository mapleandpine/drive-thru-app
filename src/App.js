import React, { Component } from 'react';
import uuid from 'uuid';
import Cam from './Components/Cam/Cam';
import Orders from './Components/Orders/Orders';
import Menu from './Components/Menu/Menu';
import Ticket from './Components/Ticket/Ticket';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    // ~store
    this.state = {
      orders: [],
      activeOrder: null,
      hasItems: false,
      menu: [
        {
          id: '1',
          class: 'cheeseburger',
          title: 'Cheeseburger',
          price: '4.99'
        },
        {
          id: '2',
          class: 'hotdog',
          title: 'Hot Dog',
          price: '4.99'
        },
        {
          id: '3',
          class: 'chicken',
          title: 'Chicken',
          price: '4.99'
        },
        {
          id: '4',
          class: 'fries',
          title: 'Fries',
          price: '1.99'
        },
        {
          id: '5',
          class: 'coffee',
          title: 'Coffee',
          price: '1.99'
        },
        {
          id: '6',
          class: 'soda',
          title: 'Soda',
          price: '1.99'
        },
        {
          id: '7',
          class: 'beer',
          title: 'Beer',
          price: '1.99'
        },
        {
          id: '8',
          class: 'icecream',
          title: 'Ice Cream',
          price: '1.99'
        }
      ]
    }
  }

  // Handle the Orders

  countOrders() {
    // alert the manager when over four orders
    let orderLength = (this.state.orders).length;
    if (orderLength > 3) {
      alert('get the manager!');
    }
  }

  handleAddOrder(id) {
    // move ticket to orders
    let activeOrder = this.state.activeOrder;
    this.setState((prevState, props) => {
      let orders = prevState.orders.slice();
      // save current order
      orders.push(activeOrder);
      return {
        orders: orders
      }
    });
    // reset ticket
    this.newActiveOrder();
    this.setState({hasItems: false});
    this.countOrders();
  }

  handleCompleteOrder(id) {
    // find order to complete
    this.setState((prevState, props) => {
      id.closed = true;
      let orders = this.state.orders;
      return {
        orders: orders
      }
    });
  }

  handleDeleteOrder(id) {
    // delete the order
    let orders = this.state.orders;
    // identify the order to remove
    let index = orders.findIndex(x => x.id === id);
    let orderToRemove = orders.splice(index, 1);
    this.setState(function(prevState, props) {
      // create new array without the order
      let reducedOrders = prevState.orders.filter(id => id !== orderToRemove);
      return {
        orders: reducedOrders
      }
    });
  }

  handleActiveOrder(id) {
    // review order ticket
    this.setState((prevState, props) => {
      function isSelected(order) {
        return order.id === id;
      }
      let orders = prevState.orders.slice();
      var target = orders.filter(isSelected).pop();
      return {
        activeOrder: target
      }
    });
  }


  // Handle the Active Order

  newActiveOrder() {
    // new blank ticket
    this.setState({
      activeOrder: {
        closed: false,
        date: new Date(),
        id: uuid.v4(),
        items: []
      }
    });
  }

  countTicketItems() {
    // count ticket items
    let ticketItems = this.state.activeOrder.items;
    if ( ticketItems.length > 0 ) {
      this.setState({hasItems: true});
    } else {
      this.setState({hasItems: false});
    }
  }

  handleAddItem(newItems) {
    // add menu items to ticket
    let activeOrder = this.state.activeOrder;
    let activeOrderItems = this.state.activeOrder.items;
    activeOrderItems.push(newItems);
    this.setState({
      activeOrder:activeOrder
    }, this.countTicketItems());
  }

  handleDeleteItem(id) {
    // delete ticket items
    let activeOrder = this.state.activeOrder;
    let activeOrderItems = this.state.activeOrder.items;
    let index = activeOrderItems.findIndex(x => x.id === id);
    activeOrderItems.splice(index, 1);
    this.setState({
      activeOrder:activeOrder
    }, this.countTicketItems());
  }

  componentWillMount() {
    this.newActiveOrder();
  }

  render() {
    return (
      <div className="App">
        <h1 className="AppHeading">OrderTRON 9000</h1>
        <Cam />
        <Orders orders={this.state.orders} onActiveOrder={this.handleActiveOrder.bind(this)} onCompleteOrder={this.handleCompleteOrder.bind(this)} onDeleteOrder={this.handleDeleteOrder.bind(this)} />
        <div className="ActiveOrder">
          <Menu menu={this.state.menu} onAddItem={this.handleAddItem.bind(this)} />
          <Ticket activeOrder={this.state.activeOrder} hasItems={this.state.hasItems} onDeleteItem={this.handleDeleteItem.bind(this)} onAddOrder={this.handleAddOrder.bind(this)} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.countOrders();
    this.countTicketItems();
  }
}

export default App;
