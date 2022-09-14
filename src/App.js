import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes,NavLink } from 'react-router-dom'

import Home from './components/Home';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className='container mt-5'>
      
      <Router>     
      <Navbar />
      <br />
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/nosotros" element={<Nosotros/>}/>
          <Route exact path="/contacto" element={<Contacto/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
   
    </Router>  
    </div>
    
  );
}

export default App;
