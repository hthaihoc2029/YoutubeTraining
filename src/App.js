import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import YoutubeList from 'components/YoutubeList/YoutubeList';
import youtobeList from 'data';

function App() {
  return (
    <div className="App">
      <Header />
      <YoutubeList youtobeList={youtobeList} />
    </div>
  );
}

export default App;
