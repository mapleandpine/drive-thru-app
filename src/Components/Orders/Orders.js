import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderItem from "./OrderItem";
import './Orders.css';

class Orders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newOrder:{}
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
  }

  newOrder(e) {
    this.setState({newOrder: new Order()}, function() {
      this.props.addOrder(this.state.newOrder);
    })
    e.preventDefault();
  }

  deleteOrder(order) {
    this.props.onDelete(order);
  }

  render() {
    let orderItems;
    if(this.props.orders) {
      orderItems = this.props.orders.map(order => {
        return (
          <OrderItem onDelete={this.deleteOrder.bind(this)} key={order.title} order={order} />
        )
      });
    }
    return (
      <div className="Orders">
        <h2>Orders</h2>
        {orderItems}
        <form onSubmit={this.newOrder.bind(this)}>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

Orders.propTypes = {
  orders: PropTypes.array,
  onDelete: PropTypes.func
}

export default Orders;
