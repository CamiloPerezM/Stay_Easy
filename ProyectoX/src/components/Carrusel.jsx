import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';


function Carrusel() {
  const datos = useParams();
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const pedidoImagenes = async() => {
      try {
        const pedidoFetch = await fetch(`http://localhost:8080/producto/${datos.id}`);
        const respuesta = await pedidoFetch.json();
        setImagenes(respuesta);
        console.log("Estas son las imagenes carrusel");
        console.log(imagenes);
      } catch (error) {
        console.log(error);
      } 
    }

    pedidoImagenes();
  }, [datos.id]);

  useEffect(() => {
    const mySwiper = new Swiper('.carrusel .swiper-container', {
      loop: true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    });
  }, [imagenes]);

  return (
    <div className="carrusel swiper-container">
      <div className="swiper-wrapper">
      {imagenes?.imagenes?.urlImagen.map((image) => (
       
          <div className="swiper-slide" key={image.id}>
            <img src={image.url} alt="imagenCarrusel" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
//imagenes?.imagenes?.urlImagen ASI SE LLAMAN LAS IMAGENES
{/*  {imagenes && imagenes.length > 0 && imagenes.map((image) => ( */}