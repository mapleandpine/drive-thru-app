import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TicketItem extends Component {

  deleteTicketItem(id) {
    this.props.onDeleteItem(id);
  }

  render() {
    return (
      <li className="TicketItem">
        <span className="TicketItemName"><span>{this.props.ticketItem.title}</span><span>{this.props.ticketItem.price}</span></span> <a className="TicketItemDelete" href="#;" onClick={this.deleteTicketItem.bind(this, this.props.ticketItem.id)}>&times;</a>
      </li>
    );
  }
}

TicketItem.propTypes = {
  ticketItem: PropTypes.object,
  onDelete: PropTypes.func
}

export default TicketItem;
