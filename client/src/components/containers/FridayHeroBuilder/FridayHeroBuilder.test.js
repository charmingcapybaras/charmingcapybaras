// components /HomePage/HomePage.test.js
import React from 'react';
import ReactDom from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './FridayHeroBuilder';

configure({ adapter: new Adapter() });
describe('<FridayHeroBuilder /> test suite', () => {
  it('renders without a crash', () => {
    const div = document.createElement('div');
    ReactDom.render(<App />, div);
  });
});
