import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderListItem from "./OrderListItem";

class OrderList extends Component {

  deleteOrderList(id) {
    this.props.onDelete(id);
  }

  render() {
    let orderListItems;
    if(this.props.orderList) {
      orderListItems = this.props.orderList.map(menuItem => {
        return (
          <OrderListItem onDelete={this.deleteOrderList.bind(this)} key={menuItem.id} menuItem={menuItem} />
        )
      });
    }
    return (
      <div className="OrderList">
        {orderListItems}
      </div>
    );
  }
}

OrderList.propTypes = {
  orders: PropTypes.array,
  onDelete: PropTypes.func
}

export default OrderList;
