import React from 'react';
import './App.css';

import {Sky} from './components/Sky';
import {Earth} from './components/Earth';
 
function App() {
  return (
      <div className="container">
         <Sky />
         <Earth />
      </div>
  );
}
export default App;
