import React, { useContext, useEffect, useState } from 'react';
import '../Styles/Galeria.module.css'
// import { ContextGlobal } from './utils/global.context';

// const imagenes = [
//   { id: 1, src: 'imagen1.jpg' },
//   { id: 2, src: 'imagen2.jpg' },
//   { id: 3, src: 'imagen3.jpg' },
// ];

// const {imagenes} = useContext(ContextGlobal); 

// El bloque debe incluir en su región inferior derecha el texto “Ver Más”, el cual, permitirá acceder a un componente de galería de imágenes para ver todas las imágenes disponibles del producto. La elección de la galería específica a utilizar es libre, lo mismo que su estética (no es necesario seguir al pie de la letra la galería presentada en Figma).
function Galeria() {

  const [imagenes, setImagenes] = useState([])
  const pedidoImagenes = async() => {
    const pedidoFetch = await fetch('http://localhost:8080/imagenes');
    const respuesta = await pedidoFetch.json();
    setImagenes(respuesta)
  }
  useEffect(() => {
    pedidoImagenes()
  },[])



  return (
      <div className="galeria">
          <div className='imgPrincipal'>
            <img src={imagenes[0]?.urlImagen} />
          </div>
        <div className='img4'>

          {imagenes?.slice(1, 5).map((image) => (
          <div className='contenedorImg'>
          <img key={image.id} src={image.urlImagen} alt="Imagen" />
          </div>
          
          ))}
        </div>
        <a href="">
          <button className='botonVer' src=''>Ver más</button>
        </a>
      </div>

    // <section>  
    //   <img src="https://images.trvl-media.com/lodging/24000000/23930000/23924300/23924256/61132ead.jpg?impolicy=resizecrop&rw=1200&r" alt="" />
    //   <img src="https://images.trvl-media.com/lodging/24000000/23930000/23924300/23924256/9e8bcff5.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="" />
    //   <img src="https://images.trvl-media.com/lodging/24000000/23930000/23924300/23924256/5be7eebb.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="" />   
    //   <img src="https://images.trvl-media.com/lodging/24000000/23930000/23924300/23924256/w4350h2897x0y0-52642bdd.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="" />
    //     <a href="../assets/img">
    //       <button className='botonVer' src=''>Ver más</button>
    //     </a>
    // </section>
  );
};

export default Galeria;