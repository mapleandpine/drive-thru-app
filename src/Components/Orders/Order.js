import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Order extends Component {

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
    return (
      <div className="Order">
        <span className="OrderName" onClick={this.activeOrder.bind(this, this.props.order.id)}>{this.props.order.date.toLocaleTimeString()}</span>
        <button className="OrderComplete" onClick={this.completeOrder.bind(this, this.props.order)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg></button>
        <button className="OrderDelete" onClick={this.deleteOrder.bind(this, this.props.order.id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></button>
      </div>
    );
  }
}

Order.propTypes = {
  order: PropTypes.object,
  onActiveOrder: PropTypes.func,
  onCompleteOrder: PropTypes.func,
  onDeleteOrder: PropTypes.func
}

export default Order;
