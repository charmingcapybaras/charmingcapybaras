// components /HomePage/HomePage.test.js
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserSignup from './UserSignup';
import Input from './../../ui/Input/Input';
import registration from './registration';

configure({ adapter: new Adapter() });
describe('<UserSignup /> test suite', () => {
  it('<UserSignup /> renders', () => {
    shallow(<UserSignup />);
  });
});

describe('<Input /> test suite', () => {
  it('Should render form elements', () => {
    shallow(<Input />);
  });
});
