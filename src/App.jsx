import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './layout/Navbar.jsx';
import './App.css'
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Forms/Login.jsx';
import Signin from './Forms/Signin.jsx';
import Dashboard from './Dashboard/TDashboard.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from './layout/Footer.jsx';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import Main from './Dashboard/Dashboard.jsx'
import Complete from './Dashboard/Complete.jsx'
import Pending from './Dashboard/Pending.jsx'
import Progress from './Dashboard/Progress.jsx'
import Deployed from './Dashboard/Deployed.jsx'
import Deferred from './Dashboard/Deferred.jsx'
import NewTask from './Dashboard/New_Task.jsx'
import Taskstats from './Dashboard/Task_stats.jsx'
function App() {
let location  =useLocation();
  AOS.init();
  return (
    <div>
      {/* {!location.pathname.includes("Dashboard") && <Navbar/> } */}
      {!location.pathname.includes("Dashboard") && <Navbar/>}

      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        
        <Route path='/About' element={<About/>}></Route>
        
        <Route path='/Contact' element={<Contact/>}></Route>
        
        <Route path='/Dashboard' element={<Dashboard/>}>
    <Route path='Main' element={<Main />} ></Route>             
          <Route path='CompleteTask' element={<Complete />}> </Route>
          <Route path='PendingTask' element={<Pending />}> </Route>
          <Route path='ProgressTask' element={<Progress />}> </Route>
          <Route path='DeployedTask' element={<Deployed />}> </Route>
          <Route path='DeferredTask' element={<Deferred />}> </Route>
          <Route path='NewTask' element={<NewTask />}> </Route>
          <Route path='TaskStats' element={<Taskstats />}> </Route>
        </Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
      </Routes>
      {/* <Footer/> */}
      {!location.pathname.includes("Dashboard") && <Footer/>}
    </div>
  )
}

export default App
