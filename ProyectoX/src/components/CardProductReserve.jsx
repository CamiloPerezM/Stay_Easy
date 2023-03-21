import React, { useEffect, useState } from "react";
import "../Styles/CardProductReserve.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Icons from "./Services/Icons";
import { Link, useNavigate, useParams } from "react-router-dom";

const CardProductReserve = ({fechaInicial, fechaFinal, hora, ciudad}) => {
    const [productoCiudad, setProductoCiudad] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch(`http://18.219.37.134:8080/producto/${id}`);
                const data = await response.json();
                setProductoCiudad(data);
            } catch (error) {
                console.log(error);
            }
        }       
        getProducts();
    }, [id]);

    const handleReserva = async () => {
        if (!fechaInicial || !fechaFinal || !hora) {
            alert("Debe seleccionar una fecha de check-in, check-out y hora de llegada.");
            return;            
        }
        try {
            const token2 = JSON.parse(localStorage.getItem('user'));
            console.log(token2.usuarioDTO, 'aqui es el token2');
            const data = {
                horaReserva: hora,
                checkIn: fechaInicial ? fechaInicial.toISOString().split('T')[0] : '',
                checkOut: fechaFinal ? fechaFinal.toISOString().split('T')[0] : '',
                producto: id,
                usuario: token2?.usuarioDTO?.id,
            };
            console.log(data);
            const crearReserva = await fetch("http://18.219.37.134:8080/reserva/registrar", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token2?.token}`
                }, 
            });
            if (crearReserva.ok) {
                const response = await crearReserva.json();
                console.log("Reserva enviada con éxito", response);
                navigate("/reserve");
            } else {
                throw new Error("Error al enviar la reserva");
            }
        } catch (error) {
            console.error("Error al enviar la reserva:", error);
            alert("Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde.");
        }
    };
    
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
                <p className="datesSeparate"><span className="checks">Check-In: </span><span className="dates">{fechaInicial?.toLocaleDateString()??"09/03/2023"}</span></p>
                <hr />
                <p className="datesSeparate"><span className="checks">Check-Out:</span><span className="dates">{fechaFinal?.toLocaleDateString()??"22/03/2023"}</span></p>
                <hr />
                    <button 
                        className="buttonReserve" 
                        onClick={handleReserva} 
                        type="submit"
                    > Confirmar Reserva </button>
            </div>
        </div>
    )
};

export default CardProductReserve;