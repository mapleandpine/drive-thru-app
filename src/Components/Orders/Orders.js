import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderItem from "./OrderItem";
import './Orders.css';

class Orders extends Component {

  deleteOrder(id) {
    this.props.onDelete(id);
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
        <h2>Latest Orders</h2>
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
