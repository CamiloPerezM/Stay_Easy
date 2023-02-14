import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Template.css"
import { useParams } from "react-router";
import Galeria from "../components/Galeria";
import {faLocationDot } from '@fortawesome/free-solid-svg-icons';

const TemplateContenedor = () => {



    const datos = useParams();
    const [datosProducto, setDatosProducto] = useState([]);

    useEffect(() =>{
        async function getProduct(){
            try{
              const response = await fetch(`http://localhost:8080/producto/${datos.id}`);
              const data = await response.json();
              console.log(data);
              setDatosProducto(data);
            }catch(e){
              console.log("Error");
              console.log(e);
            }
          }
          getProduct();
        }, [datos.id]);


        {console.log(datosProducto)}


    return (

        <div className="contenedor">

            <div className="envolvent">
                <div className="categoryProduct">
                    <span  className="nombreCiudad" style={{color:"rgb(251, 139, 36)",paddingLeft:"3rem"}}> {datosProducto.tituloDescripcion} </span>
                    <span className="arrowLeft"> <FontAwesomeIcon icon={faArrowLeft}/></span> 
                    
                </div>

                <div className="ubication">
                    <span> <FontAwesomeIcon icon={faLocationDot}/> {`${datosProducto?.ciudad?.nombre}, ${datosProducto?.ciudad?.pais}`} </span>
                    <span> Calificacion: {datosProducto.puntaje} estrellas </span>
                </div>

          
    

            <body>
                <div className="grilla-imagenes">
                    <Galeria />
                </div>

                <div className="descripcion">
                    <h3 className="paddingTemplate"> Descripción: </h3>
                    <p className="paddingTemplate"> {datosProducto.contenidoDescripcion}
                    </p>
                </div>

                <div className="servicios">
                    <h3 className="paddingTemplate"> ¿Qué ofrece este lugar? </h3>
                    <hr className="separador"></hr>
                    <p className="paddingTemplate">Libre de Humo,Piscina, Wifi, Desayuno hasta las 10 AM</p>
                    
                    {/* <div className="logos">

                    </div> */}
                </div>

                <div className="politica-producto">
                    <h3 className="paddingTemplate"> Qué tienes que saber </h3>
                    
                    <span className="normasDeLaCasa">
                        <h5 className="paddingTemplate"> Normas: </h5>
                        <ol className="paddingTemplate">
                        <li>No hacer fiestas</li>
                        <li>No brincar en las camas</li>
                        <li>No meter en la habotación más de 10 personas</li>
                        </ol>
                    </span>
                    {/* <span className="seguridad-salud">
                        <h5> Seguridad y salud</h5>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </span> */}
                    {/* <span>
                        <h5> Politica de cancelación </h5>
                    </span> */}


                </div>
            </body>
        </div>
        </div>
    );
}


export default TemplateContenedor;



