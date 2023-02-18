import React from "react";
import "../Styles/Header.css"
import Logo from "../assets/img/logo-booking.svg"
import Menu from "../assets/img/menú.svg"
import { Link } from "react-router-dom";




const Header = () => {
    let user = JSON.parse(localStorage.getItem('user') ?? '{}');
    console.log('user,', user);


    function handleClick () {
        localStorage.removeItem('user', user);
    }

    const actions = user.token
        ? <div className="usuario botones">
            <p> Bienvenido: {user.usuarioDTO.nombre} </p>
            <button onClick={handleClick} className="crear"> Cerrar sesion </button>
            
            </div>
        : <div className="botones" id="botones-inicio">
            <Link to={"/registro"}><button className="crear">Crear cuenta</button></Link>
            <Link to={`/login`}><button className="crear">Iniciar sesión</button></Link>
        </div>;






    return (
    
        <div className="header headerFijo">
            <div className="navBar-brand">
               <Link to={"/home"}> <img className="logo" src={Logo} alt='Logo Booking'></img></Link>
                <img className="menu" src={Menu} alt='Menu'></img>
                
                {actions}

            </div>

        </div>
    );
}

export default Header;
