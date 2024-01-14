import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Nav/Navbar';
import Home from './views/Home/Home';
import About from './views/About/About';
import ContactUs from './views/Contact/ContactUs';
import AdminLogin from './components/AdminLogin/AdminLogin';
import Categories from './views/Categories/Categories';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

