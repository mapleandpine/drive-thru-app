import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Cam from './Cam';

describe(Cam, () => {
  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <Cam />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
