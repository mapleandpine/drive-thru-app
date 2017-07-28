import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import TicketItem from "./TicketItem";
import "./ActiveOrder.css";

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

    let ticketItems;
    if(this.props.activeOrder) {
      ticketItems = this.props.activeOrder.map(ticketItem => {
        return (
          <TicketItem onDeleteItem={this.deleteItem.bind(this)} key={ticketItem.id} ticketItem={ticketItem} />
        )
      });
    }

    return (
      <div className="ActiveOrder">
        <div className="Menu">
          <h2 className="heading">Menu</h2>
          <div className="MenuList">
            {menuItems}
          </div>
        </div>
        <div className="Ticket">
          <h2 className="heading">Ticket</h2>
          <div className="TicketList">
            {ticketItems}
          </div>
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

