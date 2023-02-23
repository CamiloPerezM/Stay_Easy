import React, { useEffect, useState } from "react";
import "../Styles/CardProductReserve.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Icons from "./utils/Icons";
import { Link, useParams } from "react-router-dom";

const CardProductReserve = ({fechaInicial,fechaFinal}) => {
    console.log(fechaInicial);
    console.log(fechaFinal);

    const datos = useParams();
    console.log(datos)

    const [productoCiudad, setProductoCiudad] = useState([]);
    useEffect(() => {

        async function getProducts() {

            try {
                const response = await fetch(`http://localhost:8080/producto/${datos.id}`);
                const data = await response.json();
                setProductoCiudad(data);
            } catch (error) {
                console.log(error);
            }
        }


       

        
        getProducts();
    }, [datos.id])

    console.log(productoCiudad);

    productoCiudad?.imagenes?.sort((a,b)=> a.id-b.id);



    return (

        <div className="containerProductReserve">
            <div>
                <h3 className="tituloProductReserve">Detalles de la reserva</h3>
                <img  className="imgProductReserve" src={(productoCiudad.imagenes && productoCiudad.imagenes[0].urlImagen)??"https://i.pinimg.com/originals/61/ea/94/61ea94b38db7f292dcf6dda1513b8253.jpg"} />
            </div>
            <div className="divInfo">
                <h5 className="categoryProductReserve">{productoCiudad?.categoria?.titulo.toUpperCase() ?? "Cargando"}</h5>
                <h4 className="nameProductReserve">{productoCiudad?.tituloDescripcion??"Cargando"}</h4>
                <span className="iconStarReserve">{Array.from({ length: productoCiudad.puntaje }, (_, index) => <Icons key={index} size="xs" />)}</span>
                <p className="locationReserve"><FontAwesomeIcon icon={faLocationDot}/> {`${productoCiudad?.ciudad?.nombre ?? "Cargando"}, ${productoCiudad?.ciudad?.pais??"Cargando"} `}</p>
                <hr />
                <p className="datesSeparate"><span className="checks">Check-In: </span><span className="dates">{fechaInicial?.toLocaleDateString()??"22/02/2023"}</span></p>
                <hr />
                <p className="datesSeparate"><span className="checks">Check-Out:</span><span className="dates">{fechaFinal?.toLocaleDateString()??"22/03/2023"}</span></p>
                <hr />
                <Link to={"/reserve"}><button className="buttonReserve">Confirmar Reserva</button></Link>
            </div>
        </div>




    )
};


export default CardProductReserve;