import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderClass from '../Orders/OrderClass';
import TicketItem from "./TicketItem";
import TicketItemClosed from "./TicketItemClosed";
import "./Ticket.css";

class Ticket extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newOrder:{}
    }
  }

  deleteItem(id) {
    this.props.onDeleteItem(id);
  }

  newOrder(e) {
    this.setState({newOrder: new OrderClass()}, function() {
      this.props.onAddOrder(this.state.newOrder);
    })
    e.preventDefault();
  }

  render() {
    let hasItems = this.props.hasItems;
    let closed = this.props.activeOrder.closed;
    let ticketButton = null;
    let ticketMessage = null;
    let ticketClosedMessage = null;
    if (hasItems) {
      ticketButton = <TicketButton className="TicketSave" onClick={this.newOrder.bind(this)} />;
    } else if (closed) {
      ticketClosedMessage = <TicketClosedMessage  className="TicketClosedMessage" />;
    } else {
      ticketMessage = <TicketMessage  className="TicketMessage" />;
    }
    let ticketItems;
    if (closed) {
      if(this.props.activeOrder.items) {
        ticketItems = this.props.activeOrder.items.map(ticketItem => {
          return (
            <TicketItemClosed ticketItem={ticketItem} />
          )
        });
      }
    } else {
      if(this.props.activeOrder.items) {
        ticketItems = this.props.activeOrder.items.map(ticketItem => {
          return (
            <TicketItem onDeleteItem={this.deleteItem.bind(this)} ticketItem={ticketItem} />
          )
        });
      }
    }

    return (
      <div className="Ticket">
        <h2 className="heading">Ticket</h2>
        <div className="TicketList">
          {ticketItems}
          {ticketButton}
          {ticketMessage}
          {ticketClosedMessage}
        </div>
      </div>
    );
  }
}

function TicketButton(props) {
  return (
    <button className="TicketSave" onClick={props.onClick}>Send to the cooks</button>
  );
}

function TicketMessage(props) {
  return (
    <div className="TicketMessage">
      <p>Make a selection from the menu.</p>
    </div>
  );
}

function TicketClosedMessage(props) {
  return (
    <div className="TicketClosedMessage">
      <p>This ticket is closed.</p>
    </div>
  );
}

Ticket.propTypes = {
  hasItems: PropTypes.object,
  activeOrder: PropTypes.object,
  addItem: PropTypes.func,
  onAddOrder: PropTypes.func,
  onDeleteItem: PropTypes.func
}

export default Ticket;

