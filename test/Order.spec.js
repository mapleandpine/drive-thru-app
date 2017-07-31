// http://blog.ricardofilipe.com/post/react-enzyme-tdd-tutorial
// "test": "mocha --compilers js:babel-core/register --require ./test/helpers.js --require ./test/dom.js --recursive",
import React from 'react';
import ReactDOM from 'react-dom';
import Orders from '../src/Components/Orders/Orders';

describe('<Orders />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Order />, div);
  });
});