// components /HomePage/HomePage.test.js
import React from 'react';
import ReactDom from 'react-dom';
import Navigation from './Navigation';

test('renders top navigation', () => {
  const container = document.createElement('div');
  const navItems = [
    { id: 1, name: 'About', url: '/about', attr: 'nav-link ' },
    { id: 2, name: 'Contact', url: '/contact', attr: 'nav-link ' },
    { id: 3, name: 'Advertise', url: '/advertise', attr: 'nav-link ' },
    { id: 4, name: 'Login', url: '/login', attr: 'nav-link login' }
  ];
  ReactDom.render(<Navigation topNav={navItems} />, container);
  expect(container.textContent).toMatch('Friday');
});
