import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Menu from './Menu';
import MenuItem from './MenuItem';

it('shallow renders without crashing', () => {
  shallow(<Menu />);
});

it('shallow renders without crashing', () => {
  shallow(<MenuItem />);
});

describe(MenuItem, () => {
  const minProps = {
    menu: {},
    menuItem: {},
    addItem: () => {},
    onAddItem: () => {}
  }
  // it('renders and matches our snapshot', () => {
  //   const component = renderer.create(
  //     <MenuItem />
  //   );
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  it('add menu item details to props', () => {
    component.find('div.MenuItem').simulate('click');
  });
});
