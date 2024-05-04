// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Similarities from './Similarities';
import Recommendations from './Recommendations';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import './Detail.css'
function Detail() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Recupera la URL de la imagen seleccionada del localStorage
    const imageFromLocalStorage = localStorage.getItem('selectedImage');
    setSelectedImage(imageFromLocalStorage);
  }, []); // Ejecutar solo una vez al montar el componente

  const generateRandomPrice = () => {
    return (Math.random() * (150 - 20) + 20).toFixed(2);
  };

  const sendImageToAPI = () => {
    // Verificar si hay una imagen seleccionada
    if (selectedImage) {
      // Enviar la URL de la imagen a la API
      axios.get('http://localhost:5000/api/images', { imageUrl: selectedImage })
        .then(response => {
            setImageUrls(response.data.image_urls);
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
    <Navbar/>
    <br/> 
      {/* Mostrar la imagen seleccionada */}
      {selectedImage && <img src={selectedImage} alt="Selected Image" />}
      {/* Renderizar otros componentes, como Similarities y Recommendations */}
      <Similarities />

      
      <Recommendations/>
        <div className="image-grid">
            {imageUrls.map((imageUrl, index) => (
                <div key={index} className="image-item">
                <img src={imageUrl} alt={`Image ${index}`} className="grid-image" />
                <div className="image-info">
                    <p>{`${generateRandomPrice()} EUR`}</p>
                </div>
                </div>
            ))}
        </div>
      {/* Botón para enviar la imagen a la API */}
      <button onClick={sendImageToAPI}>Enviar imagen a la API</button>
    </>
  );
}

export default Detail;
