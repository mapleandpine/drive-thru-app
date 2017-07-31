import React from 'react';
import ReactDOM from 'react-dom';
import Orders from './Orders';
import Order from './Order';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Orders />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Order />, div);
});
