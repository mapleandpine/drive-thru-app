import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TicketItem extends Component {

  deleteTicketItem(id) {
    this.props.onDeleteItem(id);
  }

  render() {
    return (
      <div className="TicketItem">
        <span className="TicketItemName">{this.props.ticketItem.title}</span>
        <a className="TicketItemMinus" href="#;" onClick={this.deleteTicketItem.bind(this, this.props.ticketItem.class)}>&minus;</a>
        <span className="TicketItemQty">1</span>
        <a className="TicketItemPlus" href="#;" onClick={this.deleteTicketItem.bind(this, this.props.ticketItem.class)}>&#43;</a>
        <span className="TicketItemPrice">{this.props.ticketItem.price}</span>
        <a className="TicketItemDelete" href="#;" onClick={this.deleteTicketItem.bind(this, this.props.ticketItem.class)}>&times;</a>
      </div>
    );
  }
}

TicketItem.propTypes = {
  ticketItem: PropTypes.object,
  onDelete: PropTypes.func
}

export default TicketItem;
