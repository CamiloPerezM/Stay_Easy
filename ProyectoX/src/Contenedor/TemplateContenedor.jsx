import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Template.css"
import { useParams } from "react-router";
import Galeria from "../components/Galeria";


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
            <header>
            <div className="categoryProduct">
                {/* <p></p> */}
                <span style={{color:"#000",marginRight:"15px"}}> {datosProducto.tituloDescripcion} </span>
                <span className="arrowLeft"> <FontAwesomeIcon icon={faArrowLeft}/></span> 
                
            </div>

            <div className="ubication">
                <span> Medellín, Colombia </span>
                <p> Calificacion: {datosProducto.puntaje} estrellas </p>
            </div>
            </header>

            <body>
                <div> {/* className="grilla-imagenes" */}
                    <Galeria />
                </div>

                <div className="descripcion">
                    <h3> Descripción: </h3>
                    <p> {datosProducto.contenidoDescripcion}
                    </p>
                </div>

                <div className="servicios">
                    <h3> ¿Qué ofrece este lugar? </h3>
                    <p>Libre de Humo,Piscina, Wifi, Desayuno hasta las 10 AM</p>
                    
                    {/* <div className="logos">

                    </div> */}
                </div>

                <div className="politica-producto">
                    <h3> Qué tienes que saber </h3>
                    <span className="normas de la casa">
                        <h5> Normas: </h5>
                        <ol>
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

    );
}


export default TemplateContenedor;



