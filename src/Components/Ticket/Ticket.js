import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderClass from '../Orders/OrderClass';
import TicketItem from "./TicketItem";
import TicketItemClosed from "./TicketItemClosed";
import "./Ticket.css";

class ActiveOrder extends Component {

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
    const hasItems = this.props.hasItems;
    let ticketButton = null;
    let ticketMessage = null;
    if (hasItems) {
      ticketButton = <TicketButton className="TicketSave" onClick={this.newOrder.bind(this)} />;
    } else {
      ticketMessage = <TicketMessage  className="TicketMessage" />;
    }

    let ticketItems;
    const closed = this.props.activeOrder.closed;
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
      <p>Make a selection from the menu</p>
    </div>
  );
}

ActiveOrder.propTypes = {
  addItem: PropTypes.func,
  deleteItem: PropTypes.func
}

export default ActiveOrder;

