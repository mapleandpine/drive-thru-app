import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OrderItem extends Component {

  deleteOrderItem(id) {
    this.props.onDeleteItem(id);
  }

  render() {
    return (
      <li className="OrderItem">
        <span className="OrderItemName"><span>{this.props.orderItem.title}</span><span>{this.props.orderItem.price}</span></span> <a className="OrderItemDelete" href="#;" onClick={this.deleteOrderItem.bind(this, this.props.orderItem.id)}>&times;</a>
      </li>
    );
  }
}

OrderItem.propTypes = {
  orderItem: PropTypes.object,
  onDelete: PropTypes.func
}

export default OrderItem;
