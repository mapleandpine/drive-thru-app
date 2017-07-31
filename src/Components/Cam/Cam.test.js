import React from 'react';
import ReactDOM from 'react-dom';
import Cam from './Cam';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cam />, div);
});
