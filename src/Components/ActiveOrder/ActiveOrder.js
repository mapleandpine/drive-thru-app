import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import OrderItem from "./OrderItem";

class ActiveOrder extends Component {

  addItem(id) {
    this.props.onAddItem(id);
  }

  deleteItem(id) {
    this.props.onDeleteItem(id);
  }

  render() {

    let menuItems;
    if(this.props.menu) {
      menuItems = this.props.menu.map(menuitem => {
        return (
          <MenuItem onAddItem={this.addItem.bind(this)} key={menuitem.id} menuitem={menuitem}/>
        )
      });
    }

    let orderItems;
    if(this.props.activeOrder) {
      orderItems = this.props.activeOrder.map(orderItem => {
        return (
          <OrderItem onDeleteItem={this.deleteItem.bind(this)} key={orderItem.id} orderItem={orderItem} />
        )
      });
    }

    return (
      <div className="ActiveOrder">
        <div className="Menu">
          {menuItems}
        </div>
        <div className="Items">
          {orderItems}
        </div>
      </div>
    );
  }
}

ActiveOrder.propTypes = {
  addItem: PropTypes.func,
  deleteItem: PropTypes.func
}

export default ActiveOrder;

