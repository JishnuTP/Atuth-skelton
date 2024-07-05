import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboards from './pages/dashboard/home';
import Userprofile from './pages/Userprofile';
// import UserProfile from './pages/profile';







function App() {


  return (
   

    <Router>
    

    

     <Routes>

     <Route path="/login" element={<Login />} />

     <Route path="/register" element={<Register/>}/>

     <Route path="/home" element={<Dashboards/>}/>

     <Route path="/profile" element={<Userprofile/>}/>

     </Routes>
   
        
      
        
      
    
    </Router>
   

  );
}

export default App;
