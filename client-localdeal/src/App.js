import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Nav/Navbar';
import Home from './views/Home/Home';
import About from './views/About/About';
import Location from './views/Location/Location';
import Categories from './views/Categories/Categories';
import Promotion from './views/Promotions/Promotion';
import ContactUs from './views/Contact/ContactUs';
import AdminLogin from './components/AdminLogin/AdminLogin';
import Food from './views/Categories/Food/Food';
import Accommodation from './views/Categories/Accommodation/Accommodation';
import Homestore from './views/Categories/Homestore/Homestore';
import Beauty from './views/Categories/Beauty/Beauty';
import Activities from './views/Categories/Activities/Activities';
import Entertainment from './views/Categories/Entertainment/Entertainment';
import Services from './views/Categories/Services/Services';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/location' element={<Location />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/promotions' element={<Promotion />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/categories/food' element={<Food />} />
          <Route path='/categories/accommodation' element={<Accommodation />} />
          <Route path='/categories/homestore' element={<Homestore />} />
          <Route path='/categories/beauty' element={<Beauty/>} />
          <Route path='/categories/activities' element={<Activities/>} />
          <Route path='/categories/entertainment' element={<Entertainment />} />
          <Route path='/categories/services' element={<Services />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
export default App;