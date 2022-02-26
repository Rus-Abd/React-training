import React from 'react';

import './App.css';
import UserList from './Components/UserList/UserList';

function App() {
  return (
    <div className="App">
    <div className="sorting-container"><h2>Sorting</h2></div>
    <div className="users-container"><h2>User List</h2>
    <UserList></UserList>
    </div>
    </div>
  );
}

export default App;
