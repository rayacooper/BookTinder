import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import routes from './Routes';

function App() {
  return (
    <div className="App">
      <Router>
        {routes}
      </Router>
    </div>
  );
}

export default App;
