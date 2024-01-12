import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/nav/Navbar';
import Home from './Pages/home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

