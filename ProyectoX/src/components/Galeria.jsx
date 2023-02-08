import React from 'react';
import '../Styles/Galeria.module.css';

const imagenes = [
  { id: 1, src: 'imagen1.jpg' },
  { id: 2, src: 'imagen2.jpg' },
  { id: 3, src: 'imagen3.jpg' },
  // ...
];

const Galeria = () => {
  return (
    <div className="galeria">
      {imagenes.map((image) => (
        <img key={image.id} src={image.src} alt="Imagen" />
      ))}
    </div>
  );
};

export default Galeria;
