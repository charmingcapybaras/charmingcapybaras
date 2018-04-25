import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from './Sidebar';

configure({ adapter: new Adapter() });
describe('<Sidebar /> test suite', () => {
  it('<Sidebar /> renders', () => {
    shallow(<Sidebar />);
  });
});