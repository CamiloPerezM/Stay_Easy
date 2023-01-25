import React from "react";
import Styles from "./Header.css"
import Logo from "../assets/img/logo-booking.svg"


const Header = () => {
    return (
        <div className={Styles.Header}>
        <div className="navBar-brand">
        <a href="/" className="navBar-item"></a>
        <img src="logo-booking.svg" alt="Logo-Booking"/>
        <button className="crear">Crear cuenta</button>
        <button className="crear">Iniciar sesión</button>
        </div>

        <div className="busqueda">
            <h2>Busca oferta en hoteles, casas y mucho mas</h2>
            <input className="go" type= 'text' value= '¿A donde vamos?'></input>
            <input className="go" type= 'text' value= 'Check in - Check out'></input>
            <button className="search">Buscar</button>
        </div>


        </div>
    );
}

export default Header;
