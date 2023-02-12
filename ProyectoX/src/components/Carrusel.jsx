import React, { useState, useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

const Carrusel = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    new Swiper(swiperRef.current, {
      slidesPerView: 3,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  function handleModal() {
    setVisibleModal(!visibleModal);
  }

  return (
    <div>
      <div ref={swiperRef} className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="https://picsum.photos/300/200"
              alt="Image 1"
              onClick={handleModal}
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://picsum.photos/300/200"
              alt="Image 2"
              onClick={handleModal}
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://picsum.photos/300/200"
              alt="Image 3"
              onClick={handleModal}
            />
          </div>
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      {visibleModal && (
        <div className="modal-background">
          <div className="modal-content">
            <img src="https://picsum.photos/600/400" alt="Modal Image" />
            <button onClick={handleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrusel;
