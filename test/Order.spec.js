// http://blog.ricardofilipe.com/post/react-enzyme-tdd-tutorial
// "test": "mocha --compilers js:babel-core/register --require ./test/helpers.js --require ./test/dom.js --recursive",
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Orders from '../src/Components/Orders/Orders';

describe(Orders, () => {
  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <Orders />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});