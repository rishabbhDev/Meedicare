import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetail from "../pages/Doctors/DoctorDetails";

import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route paths="/" element={<Home/>} />
      <Route paths="/home" element={<Home/>} />
      <Route paths="/doctors" element={<Doctors/>} />
      <Route paths="/doctors/:id" element={<DoctorDetail/>} />
      <Route paths="/login" element={<Login/>} />
      <Route paths="/register" element={<Signup/>} />
      <Route paths="/contact" element={<Contact/>} />
      <Route paths="/Services" element={<Services/>} />
    </Routes>
  );
};

export default Router;
