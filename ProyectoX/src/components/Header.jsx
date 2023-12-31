import React from "react";
import "../Styles/Header.css"
import Logo from "../assets/img/Logotipo.png"
import Menu from "../assets/img/menú.svg"
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear} from '@fortawesome/free-solid-svg-icons';




const Header = () => {
    let user = JSON.parse(localStorage.getItem('user') ?? '{}');
    console.log('user,', user);

    let Navigate = useNavigate();


    function handleClick () {
        localStorage.removeItem('user', user);
        return Navigate ('/') 
    }

    const actions = user?.token
        ? <div className="usuario botones">
            <div>
           <p> 
                <span>{
                    user.usuarioDTO.rol.nombre==="ADMIN"?
                    <FontAwesomeIcon icon={faGear}/>:""}
                </span> 
                    Bienvenido/a: {user.usuarioDTO.nombre} 
            </p>
                {
                    user.usuarioDTO.rol.authority === 'ADMIN' &&
                    <Link to={"/administracion"}>Administración</Link>
                }
            </div>
            <button onClick={handleClick} className="crear"> Cerrar sesión </button>
            
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
