import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
    <>
     
     
<BrowserRouter>
<Navbar/>

      <Routes>
     
      <Route path='/'  />
          
       
    
      </Routes>
    </BrowserRouter>
  </>
    
  );
}

export default App;
  