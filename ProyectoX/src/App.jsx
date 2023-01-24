import React from 'react';
import Login from './Pages/Login.jsx';
import Register from"./Pages/Register.jsx"
import { Routes, Route } from 'react-router-dom'




const App = () =>{
    return(
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    );
}


export default App;