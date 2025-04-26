import React from 'react';
import './App.css';

import data from './data/data.json';

import Header from './components/Header';
import Content from './components/Content';

const App = () => {
  return (
    <main>
      <Header content={data.header} />
      {Object.keys(data.body).map((key) => (
        <Content key={key} title={key} content={data.body[key]} />
      ))}
    </main>
  );
};

export default App;
