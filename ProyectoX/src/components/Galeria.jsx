import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../Styles/Template.css'

function Galeria() {

  const datos = useParams();
  const [imagenes, setImagenes] = useState([])
  

 
  
  useEffect(() => {
    const pedidoImagenes = async() => {
      try {
      const pedidoFetch = await fetch(`http://localhost:8080/producto/${datos.id}`);
      const respuesta = await pedidoFetch.json();
      setImagenes(respuesta)
      console.log("Estas son las imagenes");
      console.log(imagenes);
        
      } catch (error) {
        console.log(error);
      } 
    }

    pedidoImagenes() 
  },[datos.id])
console.log(imagenes);
imagenes?.imagenes?.sort((a,b) => a.id - b.id)


  return (
      <div className="galeria">

          <div className='imgPrincipal'>
            <img src={imagenes.imagenes && imagenes.imagenes[0].urlImagen} id="imgPrimera" />
          </div>

        <div className='img4'>
          { imagenes.imagenes?.slice(1, 5).map((image) => (
          <div className='contenedorImg'>
            <img key={image.id} src={image.urlImagen} alt="Imagen" />
          </div>
          ))}

          <div className='botonGrilla'>
          <a href="">
          <button className='verMas' src='./Carrusel.jsx'>Ver más</button>
          </a>
          </div>

        </div>
        
      </div>
  );
};

export default Galeria;