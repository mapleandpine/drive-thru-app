import React, { Component } from 'react';
import uuid from 'uuid';
import Cam from './Components/Cam/Cam';
import Orders from './Components/Orders/Orders';
import OrderList from './Components/Orders/OrderList';
import Menu from './Components/Menu/Menu';
import AddOrder from './Components/Orders/AddOrder';
// import AddMenuOrder from './Components/Menu/AddMenuOrder';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      orderList: [],
      menu: []
    }
  }

  getMenu() {
    this.setState({menu: [
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
    ]})
  }

  componentWillMount() {
    this.getMenu();
  }

  handleAddOrder(order) {
    let orders = this.state.orders;
    orders.push(order);
    this.setState({orders:orders});
  }

  handleOnDeleteOrder(id){
    let orders = this.state.orders;
    let index = orders.findIndex(x => x.id === id);
    orders.splice(index, 1);
    this.setState({orders:orders});
  }

  handleAddOrderList(menuItem) {
    let orderList = this.state.orderList;
    orderList.push(menuItem);
    this.setState({orderList:orderList});
  }

  render() {
    return (
      <div className="App">
        <Cam />
        <AddOrder addOrder={this.handleAddOrder.bind(this)} />
        <Orders orders={this.state.orders} onDelete={this.handleOnDeleteOrder.bind(this)} />
        <OrderList orderList={this.state.orderList} />
        <Menu menu={this.state.menu} onAdd={this.handleAddOrderList.bind(this)} />
      </div>
    );
  }
}

export default App;
