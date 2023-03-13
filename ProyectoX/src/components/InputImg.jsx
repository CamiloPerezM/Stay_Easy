import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faX } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Administrador.css"

function InputImg() {
  const [images, setImages] = useState([""]);

  // Función para agregar un nuevo input de imagen
  function handleAddImage() {
    setImages([...images, ""]);
  }

  // Función para manejar el cambio de valor en un input de imagen
  function handleChangeImage(index, value) {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  }

  // Función para eliminar un input de imagen
  function handleRemoveImage(index) {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  }

  // Renderizar los inputs de imágenes
  const imageInputs = images.map((image, index) => (
    <div key={index} className="divImg">
      <label className="spaceBlocks">{`Imagen ${index + 1}:`}</label>
      <input className="inputStyleImg"
        type="text"
        value={image}
        onChange={(e) => handleChangeImage(index, e.target.value)}
        required
      />
      <button type="button" className="buttonCancel" onClick={() => handleRemoveImage(index)}>
        <FontAwesomeIcon icon={faX}/>
      </button>
    </div>
  ));

  // Renderizar el botón de "Agregar Imagen"
  const addButton = <button type="button" className="buttonAdd" onClick={handleAddImage}><FontAwesomeIcon icon={faPlus}/></button>;

  return (
    <>
      {imageInputs}
      {addButton}
    
    </>
  );
}

export default InputImg;