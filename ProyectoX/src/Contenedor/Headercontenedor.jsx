import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";



const HeaderContenedor = ({datos}) => {
    return (
        <div>
            <div>
                <p> {datos.nombre.toUpperCase()} </p>
                <title> {datos.titulo.toUpperCase()} </title>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </div>

            <div>

            </div>


        </div>
    )
}