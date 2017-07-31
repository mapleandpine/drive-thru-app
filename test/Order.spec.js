// http://blog.ricardofilipe.com/post/react-enzyme-tdd-tutorial
// "test": "mocha --compilers js:babel-core/register --require ./test/helpers.js --require ./test/dom.js --recursive",
import React from 'react';
import ReactDOM from 'react-dom';
import Weather from '../src/Weather';
import App from '../src/Components/Orders/Orders';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Orders />, div);
});

// describe('<Weather />', () => {
//   it('has initial temp value of 25', () => {
//     const wrapper = shallow(<Weather />);
//     expect(wrapper.find('.temp').text()).to.equal('25');
//   });

//   it('increments temp value after clicking button', () => {
//     const wrapper = shallow(<Weather />);
//     wrapper.find('.hotter-button').simulate('click');
//     expect(wrapper.find('.temp').text()).to.equal('26');
//   })
// });