import React, {useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import routes from './Routes';

function App() {

  useEffect(() => {
    axios.get('/ping')
    .then((ping) => console.log(ping.data))
  })

  return (
    <div className='App'>
      <Router>
        {routes}
      </Router>
    </div>
  );
}

export default App;
