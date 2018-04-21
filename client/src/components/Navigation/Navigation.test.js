// components /HomePage/HomePage.test.js
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from './Navigation';

configure({ adapter: new Adapter() });
describe('<Navigation /> test suite', () => {
  const navigationItems = {
    id: 1,
    name: 'About',
    url: '/about',
    attr: 'nav-link '
  };
  it.skip('<Navigation /> renders', () => {
    shallow(<Navigation navigation={navigationItems} />);
  });
});
