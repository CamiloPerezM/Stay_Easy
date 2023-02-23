import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../Styles/Template.css';

function Galeria() {
  const { id } = useParams();
  const [imagenes, setImagenes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const pedidoImagenes = async () => {
      try {
        const pedidoFetch = await fetch(`http://localhost:8080/producto/${id}`);
        const respuesta = await pedidoFetch.json();
        setImagenes(respuesta);
      } catch (error) {
        console.log(error);
      }
    };

    pedidoImagenes();
  }, [id]);

  useEffect(() => {
    console.log(imagenes);
    imagenes?.imagenes?.sort((a, b) => a.id - b.id);
  }, [imagenes]);

  return (
    <div className="galeria">
      <div className="imgPrincipal">
        <img src={imagenes.imagenes && imagenes.imagenes[0].urlImagen} id="imgPrimera" alt="Imagen principal" />
      </div>

      <div className="img4">
        {imagenes.imagenes?.slice(1, 5).map((image) => (
          <div className="contenedorImg" key={image.id}>
            <img src={image.urlImagen} alt="Imagen" />
          </div>
        ))}

        <div className="botonGrilla">
          <button className="verMas" onClick={() => navigate(`/carrusel/${id}`)}>Ver más</button>
        </div>
      </div>
    </div>
  );
}

export default Galeria;
