// components /HomePage/HomePage.test.js
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserSignup from './UserSignup';

configure({ adapter: new Adapter() });
describe('<UserSignup /> test suite', () => {
  it('<UserSignup /> renders', () => {
    shallow(<UserSignup />);
  });
});
