import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faWifi, faCar, faWater, faHotTub, faPaw, faUtensils, faSwimmer, faSmokingBan, faUser, faChildReaching } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Template.css"
import { useParams } from "react-router";
import Galeria from "../components/Galeria";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Calenderio from '../components/Calendario';
import { Link } from "react-router-dom";
import Icons from "../components/Services/Icons";
import "../Styles/TemplateReserva.css"


const TemplateContenedor = () => {



    const datos = useParams();
    const [datosProducto, setDatosProducto] = useState([]);

    useEffect(() => {
        async function getProduct() {
            try {
                const response = await fetch(`http://localhost:8080/producto/${datos.id}`);
                const data = await response.json();
                console.log(data);
                setDatosProducto(data);
            } catch (e) {
                console.log("Error");
                console.log(e);
            }
        }
        getProduct();
    }, [datos.id]);


    { console.log(datosProducto) }


    return (

        <div className="contenedor">

            <div className="envolvent">
                <div className="categoryProduct">
                    <div className="displayFlexColumn">
                        <span className="categoryProductDetail">{datosProducto?.categoria?.titulo ?? "Cargando"}</span>
                        <span className="nombreCiudad" style={{ color: "rgb(251, 139, 36)", paddingLeft: "3rem", fontSize: "1.5rem", fontWeight: "700" }}> {datosProducto.tituloDescripcion ?? ""} </span>
                    </div>
                    <Link to="/home"> <span className="arrowLeft"> <FontAwesomeIcon icon={faArrowLeft} /></span> </Link>

                </div>

                <div className="ubication">
                    <span className="descriptionLocation"> <FontAwesomeIcon icon={faLocationDot} /> {`${datosProducto?.ciudad?.nombre ?? "Cargando"}, ${datosProducto?.ciudad?.pais ?? "Cargando"}`} </span>
                    <span> Calificacion: {Array.from({ length: datosProducto.puntaje }, (_, index) => <Icons key={index} />)}</span>
                </div>




                <body>
                    <div className="grilla-imagenes">
                        <Galeria />
                    </div>

                    <div className="descripcion">
                        <h3 className="paddingTemplate titulosProduct"> Descripción: </h3><hr />
                        <p className="paddingTemplate descriptionText"> {datosProducto.contenidoDescripcion ?? "Cargando"}.
                        </p>
                    </div>

                    <div className="servicios">
                        <h3 className="paddingTemplate titulosProduct"> ¿Qué ofrece este lugar? </h3>
                        <hr className="separador"></hr>
                        {/* <p className="paddingTemplate">Libre de Humo,Piscina, Wifi, Desayuno hasta la<FontAwesomeIcon icon={faSmokingBan} />s 10 AM</p> */}
                        <ul className="caracteristicasProductos">
                            <li className="caracteristicasProductosDetail"><FontAwesomeIcon className="iconsProducts" icon={faSmokingBan} /> <span>Libre de Humo</span></li>
                            <li className="caracteristicasProductosDetail"><FontAwesomeIcon className="iconsProducts" icon={faWifi} /><span>Wifi</span></li>
                            <li className="caracteristicasProductosDetail"><FontAwesomeIcon className="iconsProducts" icon={faUtensils} /><span>Restarante</span></li>
                            <li className="caracteristicasProductosDetail"><FontAwesomeIcon className="iconsProducts" icon={faSwimmer} /><span>Piscina</span></li>
                            <li className="caracteristicasProductosDetail"><FontAwesomeIcon className="iconsProducts" icon={faCar} /><span>Parqueadero</span></li>
                            <li className="caracteristicasProductosDetail"><FontAwesomeIcon className="iconsProducts" icon={faWater} /><span>Lavanderia</span></li>
                            <li className="caracteristicasProductosDetail"><FontAwesomeIcon className="iconsProducts" icon={faHotTub} /><span>Jacuzzi</span></li>
                            <li className="caracteristicasProductosDetail"><FontAwesomeIcon className="iconsProducts" icon={faPaw} /><span>Mascotas</span> </li>
                            <li className="caracteristicasProductosDetail"><FontAwesomeIcon className="iconsProducts" icon={faUser} /><span>Aseo</span> </li>
                            <li className="caracteristicasProductosDetail"><FontAwesomeIcon className="iconsProducts" icon={faChildReaching} /><span>Parque Infantil </span></li>
                        </ul>

                        {/* <div className="logos">

                    </div> */}
                    </div>

                    {/* <div className="politica-producto">
                        <h3 className="paddingTemplate titulosProduct"> Qué tienes que saber </h3><hr />

                        <span className="normasDeLaCasa">
                            <h5 className="paddingTemplate"> Normas: </h5>
                            <ol className="paddingTemplate descriptionText">
                                <li>No hacer fiestas</li>
                                <li>No brincar en las camas</li>
                                <li>No meter en la habotación más de 10 personas</li>
                            </ol>
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

                    </div> */}

                    <article>
                        <h3 className='titulo-principal-footer-product'>Que tenes que saber</h3>
                        <hr className='lineProduct' />
                        <div className='container-footer'>
                            <div className='columna'>
                                <h4 className='titulos-footer-productP'>Normas de la casa:</h4>
                                <p className='textos-footer'>Check-out: 11:00 AM </p>
                                <p className='textos-footer'>No se permiten fiestas</p>
                                <p className='textos-footer'>No fumar</p>
                            </div>
                            <div className='columna'>
                                <h4 className='titulos-footer-productP'>Salud y seguridad:</h4>
                                <p className='textos-footer'>
                                    Se aplican las pautas de distanciamiento social<br />
                                    y otras normas relacionadas con el coronavirus
                                </p>
                                <p className='textos-footer'>Detector de humo</p>
                                <p className='textos-footer'>Deposito de seguridad</p>
                            </div>
                            <div className='columna'>
                                <h4 className='titulos-footer-productP'>Politica de cancelacion:</h4>
                                <p className='textos-footer'>
                                    Agrega las fechas de tu viaje para obtener los<br />
                                    detalles de cancelacion de esta estadia.
                                </p>
                            </div>
                        </div>
                    </article>

                    <div>
                        <Calenderio id={datos.id} />
                    </div>
                </body>
            </div>
        </div>
    );
}


export default TemplateContenedor;



