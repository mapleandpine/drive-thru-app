import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderClass from './OrderClass';
import './Orders.css';

class Order extends Component {

  activeOrder(id) {
    this.props.onActiveOrder(id);
  }

  newOrder(e) {
    this.setState({newOrder: new OrderClass()}, function() {
      this.props.onAddOrder(this.state.newOrder);
    })
    e.preventDefault();
  }

  deleteOrder(id) {
    this.props.onDeleteOrder(id);
  }

  render() {
    return (
      <li className="Order">
        <span className="OrderName" onClick={this.activeOrder.bind(this)}>{this.props.order.date.toLocaleTimeString()}</span> <a className="OrderNew" onClick={this.newOrder.bind(this)}>&#43;</a> <a className="OrderDelete" href="#;" onClick={this.deleteOrder.bind(this, this.props.order.id)}>&times;</a>
      </li>
    );
  }
}

Order.propTypes = {
  order: PropTypes.object,
  onDelete: PropTypes.func
}

export default Order;
