import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AgeFilter from './AgeFilter';

var people = [
  {name: 'Carl', age:36},
  {name: 'Ed', age:10},
  {name: 'Jack', age:20},
  {name: 'Jane', age:40},
];

ReactDOM.render(
  <AgeFilter people={people} />,
  document.getElementById('root')
);
