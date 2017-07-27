import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OrderListItem extends Component {

  deleteOrderList(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="OrderListItem">
        <strong>{this.props.menuItem.title}:</strong> {this.props.menuItem.price} <a href="#;" onClick={this.deleteOrderList.bind(this, this.props.menuItem.id)}>X</a>
      </li>
    );
  }
}

OrderListItem.propTypes = {
  orderList: PropTypes.object,
  onDelete: PropTypes.func
}

export default OrderListItem;
