// components /HomePage/HomePage.test.js
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from './Navigation';

configure({ adapter: new Adapter() });
describe('<Navigation /> test suite', () => {
  it('<Navigation /> renders', () => {
    shallow(<Navigation />);
  });
});
