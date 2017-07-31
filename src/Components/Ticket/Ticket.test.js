import React from 'react';
import ReactDOM from 'react-dom';
import Ticket from './Ticket';
import TicketItem from './TicketItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ticket />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TicketItem />, div);
});
