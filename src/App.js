import React, { Component } from 'react';
import uuid from 'uuid';
import Cam from './Components/Cam/Cam';
import Orders from './Components/Orders/Orders';
import ActiveOrder from './Components/ActiveOrder/ActiveOrder';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    // ~store
    this.state = {
      orders: [
        {
          id: uuid.v4(),
          date: new Date(),
          items: [
            {
              id: uuid.v4(),
              class: 'cheeseburger',
              title: 'Cheeseburger',
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
              class: 'soda',
              title: 'Soda',
              price: '1.99'
            }
          ]
        },
        {
          id: uuid.v4(),
          date: new Date(),
          items: [
            {
              id: uuid.v4(),
              class: 'hotdog',
              title: 'Hot Dog',
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
              class: 'soda',
              title: 'Soda',
              price: '1.99'
            }
          ]
        }
      ],
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
          class: 'icecream',
          title: 'Ice Cream',
          price: '1.99'
        }
      ]
    }
  }

  getActiveOrder() {
    this.setState({activeOrder:
      {
        id: uuid.v4(),
        date: new Date(),
        items: [
          {
            id: uuid.v4(),
            class: 'cheeseburger',
            title: 'Cheeseburger',
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
            class: 'soda',
            title: 'Soda',
            price: '1.99'
          }
        ]
      }
    })
  }

  handleActiveOrder(id){
    console.log(id);
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
    this.countOrders();
  }

  handleDeleteOrder(id){
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

  handleAddItem(newItems) {
    // debugger;
    let activeOrder = this.state.activeOrder;
    let activeOrderItems = this.state.activeOrder.items;
    // need to figure out how to push to activeOrder.items
    // could this work: https://github.com/kolodny/immutability-helper
    activeOrderItems.push(newItems);
    console.log(this.state.activeOrder);

    this.setState({activeOrder:activeOrder});
  }

  handleDeleteItem(id){
    let activeOrder = this.state.activeOrder;
    let index = activeOrder.findIndex(x => x.id === id);
    activeOrder.splice(index, 1);
    this.setState({activeOrder:activeOrder});
  }

  countOrders() {
    let orderLength = (this.state.orders).length;
    if (orderLength > 3) {
      alert('get the manager!');
    }
  }

  componentWillMount() {
    this.getActiveOrder();
  }

  render() {
    return (
      <div className="App">
        <h1 className="AppHeading">OrderTRON 9000</h1>
        <Cam />
        <Orders orders={this.state.orders} onAddOrder={this.handleAddOrder.bind(this)} onActiveOrder={this.handleActiveOrder.bind(this)} onDeleteOrder={this.handleDeleteOrder.bind(this)} />
        <ActiveOrder menu={this.state.menu} activeOrder={this.state.activeOrder} onAddItem={this.handleAddItem.bind(this)} onDeleteItem={this.handleDeleteItem.bind(this)}/>
      </div>
    );
  }

  componentDidMount() {
    this.countOrders();
  }
}

export default App;
