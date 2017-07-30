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
        <span className="TicketItemPrice">{this.props.ticketItem.price}</span>
        <button className="TicketItemDelete" onClick={this.deleteTicketItem.bind(this, this.props.ticketItem.class)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></button>
      </div>
    );
  }
}

TicketItem.propTypes = {
  ticketItem: PropTypes.object,
  onDelete: PropTypes.func
}

export default TicketItem;
