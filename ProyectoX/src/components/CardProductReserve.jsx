import React from "react";
import "../Styles/CardProductReserve.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Icons from "./utils/Icons";

const CardProductReserve = () => {

    return (

        <div className="containerProductReserve">
            <div>
                <h3 className="tituloProductReserve">Detalles de la reserva</h3>
                <img  className="imgProductReserve" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/e0/6f/af/villa-tipo-c.jpg?w=700&h=-1&s=1" alt="Imagen Producto" />
            </div>
            <div className="divInfo">
                <h5 className="categoryProductReserve">Hotel</h5>
                <h4 className="nameProductReserve">Producto 1</h4>
                <span className="iconStarReserve"><Icons size="xs"/><Icons size="xs"/><Icons size="xs"/></span>
                <p className="locationReserve"><FontAwesomeIcon icon={faLocationDot}/> Cartagena</p>
                <hr />
                <p className="datesSeparate"><span className="checks">Check-In: </span><span className="dates">23/11/2023</span></p>
                <hr />
                <p className="datesSeparate"><span className="checks">Check-Out:</span><span className="dates">25/11/2023</span></p>
                <hr />
                <button className="buttonReserve">Confirmar Reserva</button>
            </div>
        </div>




    )
};


export default CardProductReserve;