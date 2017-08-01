import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Orders from './Orders';

describe(Orders, () => {
  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <Orders />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
