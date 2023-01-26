import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Registro from './pages/Register'
import Home from './pages/Home'


function App() {


  return (

    // ""

    <>
    
    
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route index path="/home" element={<Home/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer></Footer>

    </>
  
  )
}


export default App;