import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests
// https://facebook.github.io/jest/docs/snapshot-testing.html

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
