import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Location from "./views/Location/Location";
import Categories from "./views/Categories/Categories";
import Promotion from "./views/Promotions/Promotion";
import ContactUs from "./views/Contact/ContactUs";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import Food from "./views/Categories/Food/Food";
import Accommodation from "./views/Categories/Accommodation/Accommodation";
import Homestore from "./views/Categories/Homestore/Homestore";
import Beauty from "./views/Categories/Beauty/Beauty";
import Activities from "./views/Categories/Activities/Activities";
import Entertainment from "./views/Categories/Entertainment/Entertainment";
import Services from "./views/Categories/Services/Services";
import DashBoard from "../src/admin/Pages/DashBoard";
import User from "./admin/Pages/User";
import PromotionAdmin from "./admin/Pages/Promotion";
import Settings from "./admin/Pages/Settings";
import Logout from "./admin/Pages/Logout";
import { ToastContainer } from "react-toastify";
import AdminFood from "./admin/Pages/Category/Food";
import AdminCategory from "./admin/Pages/Category/Category";
import AdminAccomodation from "./admin/Pages/Category/Accomodation";
import AdminEntertaiment from "./admin/Pages/Category/Entertaiment";
import AdminActivities from "./admin/Pages/Category/Activities";
import AdminService from "./admin/Pages/Category/Service";
import AdminBeaty from "./admin/Pages/Category/Beaty";
import AdminHome from "./admin/Pages/Category/Home";
import Contact from "./admin/Pages/Contact";
import Newslatter from "./admin/Pages/Newslatter";
import Permotion from "./admin/Pages/promotion/Permotion";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/promotions" element={<Promotion />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/categories/food" element={<Food />} />
          <Route path="/categories/accommodation" element={<Accommodation />} />
          <Route path="/categories/homestore" element={<Homestore />} />
          <Route path="/categories/beauty" element={<Beauty />} />
          <Route path="/categories/activities" element={<Activities />} />
          <Route path="/categories/entertainment" element={<Entertainment />} />
          <Route path="/categories/services" element={<Services />} />
          {/* Admin panel */}
          <Route path="/admin" element={<DashBoard />}>
            <Route path="users" element={<User />} />
            <Route path="promotion" element={<PromotionAdmin />} />
            <Route path="setting" element={<Settings />} />
            <Route path="category" element={<AdminCategory />}>
              <Route path="food" element={<AdminFood />} />
              <Route path="accomodation" element={<AdminAccomodation />} />
              <Route path="entertainment" element={<AdminEntertaiment />} />
              <Route path="activities" element={<AdminActivities />} />
              <Route path="service" element={<AdminService />} />
              <Route path="beauty" element={<AdminBeaty />} />
              <Route path="home" element={<AdminHome />} />
            </Route>
            <Route path="logout" element={<Logout />} />
            <Route path="contact" element={<Contact />} />
            <Route path="subscribers" element={<Newslatter />} />
            <Route path="promotion" element={<Permotion />}>
              <Route path="premium" element={<PromotionAdmin />} />
            </Route>
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
};
export default App;
