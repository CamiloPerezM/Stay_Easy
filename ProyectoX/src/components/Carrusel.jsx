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




// import React, { useEffect } from "react";
// import { useState } from "react";
// import imagenes from "../data/imagesDetails.json";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// import CarouselImg from "./CarouselImg";
// import Gallery from "./Gallery";
// import { useParams, Link } from "react-router-dom";

// function ImagesProduct({product}) {
//   const [visibleModal, setVisibleModal] = useState(false);
  // const [product, setProduct] = useState()

  // const { id } = useParams();

  // async function getImg() {
    // const data = await fetch(`http://localhost:8080/product/${id}`)
    // const imgs = await data.json()
    // setProduct(imgs)
  // }

  // useEffect(() => {
    // getImg()
  // },[])

//   function handleModal() {
//     setVisibleModal(!visibleModal);
//   }

//   return (
//     <>
//       <div className="gallery-products">
//         <div className="gallery-products-main">
//           <img
//             src={product && product.image.filter((img) =>
//               img.title.includes("Main")
//             )[0]?.url}
//             alt="car"
//           />
//         </div>
//         <div className="gallery-products-mains">
//           {/* {product &&  imagenes.map((image) => ( */}
//             {/* <div key={image.url}> */}
//               {/* <img src={image.url} alt="imagen" /> */}
//             {/* </div> */}
//           {/* ))} */}
//           {product && product.image.filter((img) => 
//             !img.title.includes("Main")
//           ).slice(0,4).map(({url}) => (
//             <img src={url} alt="imagen" />
//           ))}
//           <div className="gallery-products-imgs">
//             <button onClick={handleModal}>View more...</button>
//           </div>
//         </div>
//       </div>
//       <div className={visibleModal ? "modal" : "view-modal"}>
//         <div className="buttonModal">
//           <button onClick={handleModal}>X</button>
//         </div>
//         <CarouselImg imgs={product?.image}></CarouselImg>
//       </div>
//       <div className="gallery-imgs">
//         <Gallery imgProducts={product?.image}></Gallery>
//       </div>
//     </>
//   );
// }

// export default ImagesProduct