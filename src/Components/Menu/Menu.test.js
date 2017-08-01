import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Menu from './Menu';

describe(Menu, () => {
  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <Menu />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
