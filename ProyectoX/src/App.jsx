import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Registro from './pages/Register'
import Home from './pages/Home'
import FiltroCategoria from './components/FiltroCategoria'
import TemplateContenedor from './Contenedor/TemplateContenedor'
import FilterCity from './pages/FilterCity'


function App() {


  return (

    // ""

    <>
    
      <Header />
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route index path="/home" element={<Home/>} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/filtroCategoria" element={<FiltroCategoria />} />
          <Route path="/producto/:id" element={<TemplateContenedor />} />
          <Route path='/producto/ciudad/:id' element={<FilterCity/>}/>

        </Routes>
      <Footer />
    
    </>
  
  )
}


export default App;