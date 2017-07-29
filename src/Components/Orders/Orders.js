import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderClass from './OrderClass';
import Order from "./Order";

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

  activeOrder(id) {
    this.props.onActiveOrder(id);
  }

  newOrder(e) {
    this.setState({newOrder: new OrderClass()}, function() {
      this.props.onAddOrder(this.state.newOrder);
    })
  }

  deleteOrder(id) {
    this.props.onDeleteOrder(id);
  }

  render() {
    let orderItems;
    if(this.props.orders) {
      orderItems = this.props.orders.map(order => {
        return (
          <Order onAddOrder={this.newOrder.bind(this)} onActiveOrder={this.activeOrder.bind(this)} onDeleteOrder={this.deleteOrder.bind(this)} key={order.id} order={order} />
        )
      });
    }
    return (
      <div className="Orders">
        <h2 className="heading">Orders</h2>
        {orderItems}
      </div>
    );
  }
}

Orders.propTypes = {
  orders: PropTypes.array,
  onDelete: PropTypes.func
}

export default Orders;
