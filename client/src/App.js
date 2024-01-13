import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/nav/Navbar';
import Home from './views/Home/Home';
import About from './views/About/About';
import Categorie from './views/Categories/Categorie';
import ContactUs from './views/Contact/ContactUs';
import AdminLogin from './components/AdminLogin/AdminLogin';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/categories' element={<Categorie />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/adminlogin' element={<AdminLogin/>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

