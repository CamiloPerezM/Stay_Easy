import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Styles from "../Styles/Template.css"



const TemplateContenedor = () => {

    return (



        <div className="contenedor">

            <div className="envolvent">
            <div className="categoryProduct">
                <p>  Tipo alojamiento </p>
                <h3> Nombre alojamiento </h3> 
            </div>
            <div className="arrowLeft">
                 <FontAwesomeIcon icon={faArrowLeft}/> 
            </div>
            </div>

            <div className="ubication">
                <h4> Datos de ubicacion alojamiento  </h4>
                <p> Calificacion </p>
            </div>
    

            <body>
                <div className="grilla-imagenes">
                    <p> Grilla Imagenes </p>
                </div>

                <div className="descripcion">
                    <h3> Lorem Ipsum </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </p>
                </div>

                <div className="servicios">
                    <h3> ¿Qué ofrece este lugar? </h3>
                    <div className="logos">

                    </div>
                </div>

                <div className="politica-producto">
                    <h3> Qué tienes que saber </h3>
                    <span className="normas de la casa">
                        <h5> Normas de la casa </h5>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </span>
                    <span className="seguridad-salud">
                        <h5> Seguridad y salud</h5>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </span>
                    <span>
                        <h5> Politica de cancelación </h5>
                    </span>


                </div>
            </body>
        </div>

    );
}


export default TemplateContenedor;



