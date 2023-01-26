import React from "react";
import Styles from "./Header.css"
import Logo from "../assets/img/logo-booking.svg"
import Menu from "../assets/img/menú.svg"
import Ubicacion from "../assets/img/localizador.svg"
import Calendar from "../assets/img/calendar.svg"


const Header = () => {
    return (
        <div className= "header">
        <div className="navBar-brand">
        <a href="/"><img className="logo" src= {Logo}  alt= 'Logo Booking'></img></a>
        <img className="menu" src= {Menu}  alt= 'Menu'></img>
        <div className="botones">
        <button className="crear">Crear cuenta</button>
        <button className="crear">Iniciar sesión</button>
        </div>
        
        </div>
        

        <div className="busqueda">
            <h2 className="bienvenida">Busca oferta en hoteles, casas y mucho mas</h2>
            <div className="botones2">
            <input className="go" type= 'text' value= '¿A donde vamos?'></input>
            <span className="ubicacion"> <img className="ubication" src= {Ubicacion} alt= 'Ubicacion'></img> </span>
            <input className="go" type= 'text' value= 'Check in - Check out'></input>
            <span className="calendario"> <img className="calendar" src= {Calendar} alt= 'Calendario'></img> </span>
            <button className="search">Buscar</button>
            </div>
        </div>


        </div>
    );
}

export default Header;
