import React, { useEffect, useState } from 'react';
import Similarities from './Similarities';
import Recommendations from './Recommendations';
import axios from 'axios';

function Detail() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Recupera la URL de la imagen seleccionada del localStorage
    const imageFromLocalStorage = localStorage.getItem('selectedImage');
    setSelectedImage(imageFromLocalStorage);
  }, []); // Ejecutar solo una vez al montar el componente

  const sendImageToAPI = () => {
    // Verificar si hay una imagen seleccionada
    if (selectedImage) {
      // Enviar la URL de la imagen a la API
      axios.post('http://localhost:5000/api/images', { imageUrl: selectedImage })
        .then(response => {
          console.log(response.data); // Puedes hacer algo con la respuesta de la API aquí
        })
        .catch(error => {
          console.error('Error sending image URL to API:', error);
        });
    } else {
      console.error('No selected image URL to send to API');
    }
  };

  return (
    <>
      {/* Mostrar la imagen seleccionada */}
      {selectedImage && <img src={selectedImage} alt="Selected Image" />}
      {/* Renderizar otros componentes, como Similarities y Recommendations */}
      <Similarities />
      <Recommendations/>

      {/* Botón para enviar la imagen a la API */}
      <button onClick={sendImageToAPI}>Enviar imagen a la API</button>
    </>
  );
}

export default Detail;
