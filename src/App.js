import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import routes from './Routes';

function App() {

  let navStyle = {
    display: window.location.href === ' /' ? 'none' : 'block'
  }


  return (
    <div className="App">
      <Navbar style={navStyle}/>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
