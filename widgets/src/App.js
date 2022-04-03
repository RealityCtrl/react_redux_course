import React from 'react';
//import Accordion from './components/Accordion';
//import Search from './components/Search';
import Dropdown from './components/Dropdown'

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

const options = [
  {
    label: 'The Colour Red',
    value: 'red'
  },
  {
    label: 'The Colour Green',
    value: 'green'
  },
  {
    label: 'The Colour Blue',
    value: 'blue'
  }
]

const App = () => {
  return <div>
    
    <Dropdown options={options}/>
  
  </div>
}

export default App;