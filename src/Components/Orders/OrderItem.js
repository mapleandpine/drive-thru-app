import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OrderItem extends Component {

  deleteOrder() {
    this.props.onDelete(this.props.order);
  }

  render() {
    return (
      <li className="OrderItem">
        <strong>{this.props.order.title}:</strong> {this.props.order.category} <a href="#;" onClick={this.deleteOrder.bind(this)}>X</a>
      </li>
    );
  }
}

OrderItem.propTypes = {
  order: PropTypes.object,
  onDelete: PropTypes.func
}

export default OrderItem;
