
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Sponser from './Sponser';
const App=()=>{
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/'element={<Home/>}        />
          <Route path='/home'element={<Home/>}   />
         <Route path='/Sponser'element={<Sponser/>} /> 
          <Route path='/About'element={<About/>}       />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
