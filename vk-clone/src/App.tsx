import React from 'react';

import './App.css';
import Header from './components/layout/Header/Header';
import { SideBar } from './components/layout/SideBar/SideBar';
import Routes from './components/routes/Routes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SideBar />
      <Routes />
    </div>
  );
}

export default App;
