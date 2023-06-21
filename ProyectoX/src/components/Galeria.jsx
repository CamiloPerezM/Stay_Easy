import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-fade';
import '../Styles/Template.css';

function Galeria() {
  const { id } = useParams();
  const [imagenes, setImagenes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const pedidoImagenes = async () => {
      try {
        const pedidoFetch = await fetch(`http://18.219.37.134:8080/producto/${id}`);
        const respuesta = await pedidoFetch.json();
        setImagenes(respuesta);
      } catch (error) {
        console.log(error);
      }
    };
    pedidoImagenes();
  }, [id]);

  useEffect(() => {
    imagenes?.imagenes?.sort((a, b) => a.id - b.id);
  }, [imagenes]);

  const handleShowModal = (index) => {
    setShowModal(true);
    setModalImageIndex(index);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModal = (index) => {
    setSlideIndex(index);
    setModalVisible(!modalVisible);
  };

  return (
    <div>
      <div className="galeria">
        <div className="imgPrincipal">
          <img src={imagenes.imagenes && imagenes.imagenes[0]?.urlImagen} id="imgPrimera" onClick={() => handleModal(0)} />
        </div>

        <div className="img4">
          {imagenes.imagenes?.slice(1, 5).map((image, index) => (
            <div className="contenedorImg" key={image.id}>
              <img src={image.urlImagen} alt="Imagen" onClick={() => handleModal(0)} />
            </div>
          ))}
        </div>

        <div className="botonGrilla">
            <button className="verMas" onClick={() => handleModal(0)}> Ver más </button>
        </div>
      </div>

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <img src={imagenes.imagenes && imagenes.imagenes[modalImageIndex].urlImagen} alt="Imagen modal" />
        </Modal>
      )}

      {modalVisible && (
        <div className="modal">
          <button className="close" onClick={() => setModalVisible(false)}>
            X
          </button>
          <Swiper
            className="swiper-wrapper"
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            initialSlide={slideIndex}
          >
            {imagenes.imagenes &&
              imagenes.imagenes.map((image, index) => (
                <SwiperSlide className="swiper-slide" key={image.id}>
                  <img src={image.urlImagen} alt="imagenModal" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default Galeria;
