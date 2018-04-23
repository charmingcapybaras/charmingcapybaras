import React from 'react';
import ReactDom from 'react-dom';
import UserSignup from './UserSignup';

test('UserSignup mounts', () => {
  const div = document.createElement('div');
  ReactDom.render(<UserSignup />, div);
});
