import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TicketItemClosed extends Component {

  render() {
    return (
      <div className="TicketItem">
        <span className="TicketItemName">{this.props.ticketItem.title}</span>
        <span className="TicketItemPrice">{this.props.ticketItem.price}</span>
      </div>
    );
  }
}

TicketItemClosed.propTypes = {
  ticketItem: PropTypes.object
}

export default TicketItemClosed;
