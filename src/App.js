import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Container from './components/Container';

function App() {
  return (
    <div className='container mt-5 container-gral'>     
      <Router>     
      <Navbar />
      <br />
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/nosotros" element={<Nosotros/>}/>
          <Route exact path="/contacto" element={<Contacto/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
   
    </Router>  
    </div>
    
  );
}

export default App;
