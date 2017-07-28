import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Orders.css';

class Order extends Component {

  newOrder(e) {
    console.log('new order');
    // this.setState({newOrder: new Order()}, function() {
    //   this.props.addOrder(this.state.newOrder);
    // })
    e.preventDefault();
  }

  deleteOrder(id) {
    this.props.onDeleteOrder(id);
  }

  render() {
    return (
      <li className="Order">
        <span className="OrderName">{this.props.order.date.toLocaleTimeString()}</span> <a className="OrderNew" onClick={this.newOrder.bind(this)}>New</a> <a className="OrderDelete" href="#;" onClick={this.deleteOrder.bind(this, this.props.order.id)}>&times;</a>
      </li>
    );
  }
}

Order.propTypes = {
  order: PropTypes.object,
  onDelete: PropTypes.func
}

export default Order;
