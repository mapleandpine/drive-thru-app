import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  newOrder(e) {
    // this.setState({newOrder: new Order()}, function() {
    //   this.props.addOrder(this.state.newOrder);
    // })
    e.preventDefault();
  }

  deleteOrder(id) {
    this.props.onDeleteOrder(id);
  }

  render() {
    let orderItems;
    if(this.props.orders) {
      orderItems = this.props.orders.map(order => {
        return (
          <Order onDeleteOrder={this.deleteOrder.bind(this)} key={order.id} order={order} />
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
