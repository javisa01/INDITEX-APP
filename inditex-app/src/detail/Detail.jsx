import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import './Detail.css';

function Detail() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [imageDetails, setImageDetails] = useState(null);

  useEffect(() => {
    // Recupera la URL de la imagen seleccionada del localStorage
    const imageFromLocalStorage = localStorage.getItem('selectedImage');
    setSelectedImage(imageFromLocalStorage);
  }, []); // Ejecutar solo una vez al montar el componente

  useEffect(() => {
    // Verificar si hay una imagen seleccionada y hacer la llamada a la API
    if (selectedImage) {
      axios.post('http://localhost:5000/api/images', { imageUrl: selectedImage })
        .then(response => {
          setImageUrls(response.data);
          setImageDetails(parseImageUrl(selectedImage));
          console.log(response.data); // Puedes hacer algo con la respuesta de la API aquí
        })
        .catch(error => {
          console.error('Error sending image URL to API:', error);
        });
    }
  }, [selectedImage]); // Ejecutar cuando selectedImage cambie

  const generateRandomPrice = () => {
    return (Math.random() * (150 - 20) + 20).toFixed(2);
  };


  const parseImageUrl = (imageUrl) => {
    const parts = imageUrl.split('/');
    const year = parts[parts.indexOf('photos') + 3];
    const season = parts[parts.indexOf('photos') + 4] === 'V' ? 'Verano' : 'Invierno';
    const type = parts[parts.indexOf('photos') + 5] === '0' ? 'Ropa' : parts[parts.indexOf('photos') + 5] === '1' ? 'Bambas' : parts[parts.indexOf('photos') + 5] === '2' ? 'Perfumes' : parts[parts.indexOf('photos') + 5] === '3' ? 'Deportes' : 'Deciración de casa';
    const gender = parts[parts.indexOf('photos') + 6] === '1' ? 'Mujer' : 
                   parts[parts.indexOf('photos') + 6] === '2' ? 'Hombre' : 'Kids';

    return {
        year,
        season,
        type,
        gender
    };
};


  return (
    <>
      <Navbar />

      {/* Mostrar la imagen seleccionada */}
      {selectedImage && (
        <div className="detail-container">
          <div className="selected-image-container">
            <img src={selectedImage} alt="Selected Image" className="selected-image" />
          </div>
          <div className="description-container">
            <p>Esta prenda es perfecta para cualquier ocasión. Su diseño elegante y moderno te hará destacar en cualquier evento.</p>
            <p>Precio: {`${generateRandomPrice()} EUR`}</p>
            {imageDetails && (
              <>
                <p>Año: {imageDetails.year}</p>
                <p>Temporada: {imageDetails.season}</p>
                <p>Tipo de producto: {imageDetails.type}</p>
                <p>Sección: {imageDetails.gender}</p>
              </>
            )}
          </div>
        </div>
      )}
      {/* Renderizar otros componentes, como Similarities y Recommendations */}
      <br /> <br />
      <h2>Similarities</h2>
      <br /> <br />
      <div className="image-grid-2">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="image-item-2">
            <img src={imageUrl} alt={`Image ${index}`} className="grid-image-2" />
            <div className="image-info-2">
              <p>{`${generateRandomPrice()} EUR`}</p>
            </div>
          </div>
        ))}
      </div>
      <br /> <br /> <br />
      <h2>Recomendations</h2>
      <br /><br />
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
      
    </>
  );
}

export default Detail;
