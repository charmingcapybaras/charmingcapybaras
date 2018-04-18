// components /HomePage/HomePage.test.js
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from './HomePage';

configure({ adapter: new Adapter() });
describe('<Homepage /> test suite', () => {
  it('<HomePage /> renders', () => {
    shallow(<HomePage />);
  });
});
