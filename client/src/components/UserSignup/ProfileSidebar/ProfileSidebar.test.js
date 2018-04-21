import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProfileSidebar from './ProfileSidebar';

configure({ adapter: new Adapter() });
describe('<ProfileSidebar /> test suite', () => {
  it('<ProfileSidebar /> renders', () => {
    shallow(<ProfileSidebar />);
  });
});