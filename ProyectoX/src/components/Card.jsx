import React from "react";
import Styles from "../Styles/Card.module.css"

export function Card({ datos }) {
    
    datos.imagenes.sort((a,b)=> a.id-b.id);

    return (
        <div className={Styles.container}>
            <div className={Styles.card}>
                <img  className={Styles.cardImg} src={datos.imagenes[0].urlImagen} alt="Imagen" />
                <div className={Styles.cardContainer}>
                    <h5 className={Styles.cardCategory}>{datos.categoria.titulo.toUpperCase()} <span ><img className={Styles.cardImgStar} src="src\assets\img\star-solid.svg" alt="StarIcon" /><img className={Styles.cardImgStar} src="src\assets\img\star-solid.svg" alt="StarIcon" /><img className={Styles.cardImgStar} src="src\assets\img\star-solid.svg" alt="StarIcon" /><img className={Styles.cardImgStar} src="src\assets\img\star-solid.svg" alt="StarIcon" /><img className={Styles.cardImgStar} src="src\assets\img\star-solid.svg" alt="StarIcon" /></span> </h5>
                    <span className={Styles.cardCalificacion}><span className={Styles.cardPuntajeContainer}>Calificación : </span> <span className={Styles.cardPuntaje}>{datos.puntaje}</span></span> 
                    <h4 className={Styles.cardTitle}>{datos.tituloDescripcion}</h4>
                    <span className={Styles.cardLocation}><img className={Styles.cardImgLocation} src="src\assets\img\location-dot-solid.svg" alt="locationIcon" />{`${datos.ciudad.nombre}, ${datos.ciudad.pais}`} <span > <a className={Styles.cardMostrarMapa} href={datos.ubicacionMaps} target="_blank" rel="noopener noreferrer"> - MOSTRAR EN EL MAPA </a></span></span>
                    <p className={Styles.cardDescription}>{datos.contenidoDescripcion.slice(0,94)} ... <span className={Styles.cardVerMas}>Ver más</span> </p>
                    <button className={Styles.cardButton}>Ver Detalle</button>
                </div>
            </div>
        </div>
    )
}
