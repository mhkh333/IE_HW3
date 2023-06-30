import React from 'react';
import Login from './component/login';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './component/home';
function App() {
  return (
    <div className='APP'>
      <BrowserRouter>
        <Routes>
          <Route path=""  element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home"  element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
