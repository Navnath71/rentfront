import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import PostProperty from './Pages/PostProperty';
import  { Toaster } from 'react-hot-toast';
import UserDashbord from './Pages/UserDashbord';
const App = () => {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post-property" element={<PostProperty />} />
        <Route path='/userdashboard' element={<UserDashbord/>}/>
      </Routes>
     
    </Router>
    <Toaster />
    </>
  );
};



export default App;
