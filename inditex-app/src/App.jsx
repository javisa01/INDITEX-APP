/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import {  BrowserRouter, Routes,  Route} from "react-router-dom";
import Login from './Login';
import Home from './Home'
//import Navbar from './components/Navbar/Navbar';

function App() {
  const styles = {
    //backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
  };
////  basename='/frolic-front/' 
  return (
    <BrowserRouter> 
    <div style = {styles}>
      <section>
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/home' element={
                <Home/> } /> */}
          </Routes>
      </section>
      </div>
    </BrowserRouter>
  );
}

export default App;