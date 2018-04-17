// Navigation.js
import React from 'react';

const Navigation = props => {
  // TODO: add this to state of parent application

  const elements = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'User', url: '/user' }
  ];
  const navigation = elements.map(item => {
    return (
      <li>
        <a href={item.url} key={item.id}>
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <nav>
      <ul>{navigation}</ul>
    </nav>
  );
};

export default Navigation;
