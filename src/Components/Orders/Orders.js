import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Order from "./Order";
import OrderClosed from "./OrderClosed";
import './Orders.css';

class Orders extends Component {

  componentWillUpdate(nextProps, nextState) {
    // console.log(nextProps, nextState);
  }

  activeOrder(id) {
    this.props.onActiveOrder(id);
  }

  completeOrder(id) {
    this.props.onCompleteOrder(id);
  }

  deleteOrder(id) {
    this.props.onDeleteOrder(id);
  }

  render() {

    let orderItem;
    orderItem = this.props.orders.map(order => {
      const closed = order.closed;
      if (closed) {
        return (
          <OrderClosed onActiveOrder={this.activeOrder.bind(this)} onDeleteOrder={this.deleteOrder.bind(this)} key={order.id} order={order} />
        )
      } else {
        return (
          <Order onActiveOrder={this.activeOrder.bind(this)} onCompleteOrder={this.completeOrder.bind(this)} onDeleteOrder={this.deleteOrder.bind(this)} key={order.id} order={order} />
        )
      }
    });

    return (
      <div className="Orders">
        <h2 className="heading">Orders</h2>
        {orderItem}
      </div>
    );
  }
}

Orders.propTypes = {
  orders: PropTypes.array,
  onDelete: PropTypes.func
}

export default Orders;
