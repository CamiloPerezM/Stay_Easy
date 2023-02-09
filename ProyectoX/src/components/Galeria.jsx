import React from 'react';
import '../Styles/Galeria.module.css';

// const imagenes = [
//   { id: 1, src: 'imagen1.jpg' },
//   { id: 2, src: 'imagen2.jpg' },
//   { id: 3, src: 'imagen3.jpg' },
// ];



const Galeria = () => {
  return (
    <section>
      <div className="galeria">
        {imagenes.map((image) => (
          <img key={image.id} src={image.src} alt="Imagen" />
          ))}

        <button className='botonVer' src=''>Ver más</button>
      </div>
    </section>

    // <section>    
    //     <img src="https://cdn.pixabay.com/photo/2020/07/07/16/38/landscape-5381068_960_720.jpg" alt="" />
    //     <img src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg" alt="" />
    //     <img src="https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_640.jpg" alt="" />
    //     <a href="../assets/img">
    //       <button className='botonVer' src=''>Ver más</button>
    //     </a>
    // </section>
  );
};

export default Galeria;
