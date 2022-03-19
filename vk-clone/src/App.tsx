import React from 'react';

import './App.css';
import Header from './components/layout/Header/Header';
import { SideBar } from './components/layout/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SideBar />
    </div>
  );
}

export default App;
