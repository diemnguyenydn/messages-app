import React from 'react';
import './App.css'
import ListUsers from './components/ListUsers';
import { dataMsg } from './data'

const App = () => {
  return (
    <div className="home"> 
      <ListUsers data={dataMsg} />
    </div>
  );
}

export default App;
