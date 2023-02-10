import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Icons from "./utils/Icons";


export function Card({ datos }) {
    
    datos.imagenes.sort((a,b)=> a.id-b.id);

    return (
        <div className={Styles.container}>
            <div className={Styles.card}>
                <img  className={Styles.cardImg} src={datos.imagenes[0].urlImagen} alt="Imagen" />
                <div className={Styles.cardContainer}>
                    <h5 className={Styles.cardCategory}>{datos.categoria.titulo.toUpperCase()} <span className={Styles.iconStar}>{Array.from({ length: datos.puntaje }, (_, index) => <Icons key={index} />)}</span></h5>
                    <span className={Styles.cardCalificacion}><span className={Styles.cardPuntajeContainer}>Calificación : </span> <span className={Styles.cardPuntaje}>{datos.puntaje}</span></span> 
                    <h4 className={Styles.cardTitle}>{datos.tituloDescripcion}</h4>
                    <span className={Styles.cardLocation}><FontAwesomeIcon icon={faLocationDot} size="s" className={Styles.iconLocation}/>{`${datos.ciudad.nombre}, ${datos.ciudad.pais}`} <span > <a className={Styles.cardMostrarMapa} href={datos.ubicacionMaps} target="_blank" rel="noopener noreferrer"> - MOSTRAR EN EL MAPA </a></span></span>
                    <p className={Styles.cardDescription}>{datos.contenidoDescripcion.slice(0,94)} ... <span className={Styles.cardVerMas}>Ver más</span> </p>
                    <Link to={`/producto/${datos.id}`}> <button className={Styles.cardButton}>Ver Detalle</button></Link>
                </div>
            </div>
        </div>
    )
}

