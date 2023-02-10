import React from "react";
import "../Styles/Header.css"
import Logo from "../assets/img/logo-booking.svg"
import Menu from "../assets/img/menú.svg"
import Buscador from "../components/Buscador"
import Ubicacion from "../assets/img/localizador.svg"
import Calendar from "../assets/img/calendar.svg"
import { Link } from "react-router-dom";




const Header = () => {
    let user = localStorage.getItem('account');
    console.log('user,', user);

    return (
    
        <div className="header headerFijo">
            <div className="navBar-brand">
               <Link to={"/home"}> <img className="logo" src={Logo} alt='Logo Booking'></img></Link>
                <img className="menu" src={Menu} alt='Menu'></img>
                
                <div className="botones" id="botones-inicio">
                    <Link to={"/registro"}><button className="crear">Crear cuenta</button></Link>
                    <Link to={`/login`}><button className="crear">Iniciar sesión</button></Link>
                </div>

            </div>


            <div className="busqueda">
                <h2 className="bienvenida">Busca oferta en hoteles, casas y mucho mas</h2>
                <div className="botones2">
                    <Buscador />
                </div>
            </div>

            

        </div>
    );
}

export default Header;
