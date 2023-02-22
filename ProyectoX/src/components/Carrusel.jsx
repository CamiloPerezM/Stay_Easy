import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";


function Carrusel() {
  const datos = useParams();
  const [imagenes, setImagenes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const pedidoImagenes = async() => {
      try {
        const pedidoFetch = await fetch(`http://localhost:8080/producto/${datos.id}`);
        const respuesta = await pedidoFetch.json();
        setImagenes(respuesta);
      } catch (error) {
        console.log(error);
      } 
    }

    pedidoImagenes();
  }, [datos.id]);

  const handleModal = (index) => {
    setSlideIndex(index);
    setModalVisible(true);
  }

  return (
    <div>
      <div className="carrusel swiper-container">
        <Link to={`/producto/${datos.id}`}>
          <button className='Atras'>←</button>      
        </Link>
        <Swiper className="swiper-wrapper" navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}>

          {imagenes.imagenes && imagenes.imagenes.map((image, index) => (
            <SwiperSlide className="swiper-slide" key={image.id}>            
              <img src={image.urlImagen} alt="imagenCarrusel" onClick={() => handleModal(index)} />
            </SwiperSlide>          
          ))}
        </Swiper>
      </div>
      {modalVisible && (
        <div className="modal">
          <button className="close" onClick={() => setModalVisible(false)}>X</button>
          <Swiper className="swiper-wrapper" navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            initialSlide={slideIndex}>
            {imagenes.imagenes && imagenes.imagenes.map((image) => (
              <SwiperSlide className="swiper-slide" key={image.id}>            
                <img src={image.urlImagen} alt="imagenModal" />
              </SwiperSlide>          
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Carrusel;




// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// import { Link } from 'react-router-dom';
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-flip";
// import "swiper/css/effect-fade";


// function Carrusel() {
//   const datos = useParams();
//   const [imagenes, setImagenes] = useState([]);

//   console.log(datos.id);

//   useEffect(() => {
//     const pedidoImagenes = async() => {
//       try {
//         const pedidoFetch = await fetch(`http://localhost:8080/producto/${datos.id}`);
//         const respuesta = await pedidoFetch.json();
//         setImagenes(respuesta);
//       } catch (error) {
//         console.log(error);
//       } 
//     }

//     console.log("Estas son las imagenes carrusel");
//     console.log(imagenes, 'IMAGENES');

//     pedidoImagenes();
//   }, [datos.id]);

//   console.log(imagenes);
//   return (
//     <div className="carrusel swiper-container">
//       <Link to={`/producto/${datos.id}`}>
//         <button className='Atras'>←</button>      
//       </Link>
//       <Swiper className="swiper-wrapper" navigation={true}
//         pagination={true}
//         mousewheel={true}
//         keyboard={true}
//         modules={[Navigation, Pagination, Mousewheel, Keyboard]}>

//         {imagenes.imagenes && imagenes.imagenes.map((image) => (
//           <SwiperSlide className="swiper-slide" key={image.id}>            
//             <img src={image.urlImagen} alt="imagenCarrusel" />
//           </SwiperSlide>          
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Carrusel;