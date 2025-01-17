
import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Html from './Html';
import Navbar from './Navbar';
import Subject from './Subject';
import CssPage from './CssPage';
import Javascript from './Javascript';
import MongoDB from './MongoDB';
import NodeQuestion from './NodeQusetion';
import Express from './Express';
import Mongoose from './Mongoose';


const App = () => {

  return (
    <StrictMode>

      <Router>
        <Routes>


          <Route path='/' element={<Subject/>} />  
          <Route path='/html' element={<Html />} />
          <Route path='/css' element={<CssPage />} />
          <Route path='/js' element={<Javascript/>} />
          <Route path='/mongodb' element={<MongoDB/>} />
          <Route path='/node' element={<NodeQuestion/>} />
          <Route path='/express' element={<Express/>} />
          <Route path='/mongoose' element={<Mongoose/>} />
          
        </Routes>
      </Router>




    </StrictMode>
  )
}



export default App;