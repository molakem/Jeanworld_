import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Components/Partials/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route index  element={ <Home/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
