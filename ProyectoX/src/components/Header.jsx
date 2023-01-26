import React from "react";
import Styles from "./Header.css"
import Logo from "../assets/img/logo-booking.svg"
import Menu from "../assets/img/menú.svg"
import Buscador from "../Buscador";


const Header = () => {
    return (
        <div className= "header">
        <div className="navBar-brand">
        <img className="Logo" src= {Logo}  alt= 'Logo Booking'></img>
        <img className="menu" src= {Menu}  alt= 'Menu'></img>
        <div className="botones">
        <button className="crear">Crear cuenta</button>
        <button className="crear">Iniciar sesión</button>
        </div>
        
        </div>
        

        {/* <div className="busqueda">
            <h2 className="bienvenida">Busca oferta en hoteles, casas y mucho mas</h2>
            <div className="botones2">
            <input className="go" type= 'text' value= '¿A donde vamos?'></input>
            <input className="go" type= 'text' value= 'Check in - Check out'></input>
            <button className="search">Buscar</button>
            </div>
        </div> */}
        <div className="busqueda">
                <h2 className="bienvenida">Busca oferta en hoteles, casas y mucho mas</h2>
            <div className="botones2">
                <Buscador></Buscador>
            </div>
        </div>

        </div>
    );
}

export default Header;
