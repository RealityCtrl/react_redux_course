import React from 'react';
//import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is react?',
    content: 'A front end javascript framework'
  },
  {
    title: 'Title 2',
    content: 'Some more content as I can\'t be bothered'
  },
  {
    title: 'Who need a title?',
    content: 'Where we are going we don\'t need no titles'
  },
];

const App = () => {
  return <div>
    
    <Search />
  
  </div>
}

export default App;