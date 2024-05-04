import React, { useEffect, useState } from 'react';
import Similarities from './Similarities';
import Recommendations from './Recommendations';
import Navbar from '../navbar/Navbar';

function Detail() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Recuperar la imagen seleccionada del localStorage
    const imageFromLocalStorage = localStorage.getItem('selectedImage');
    setSelectedImage(imageFromLocalStorage);
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <>
    <Navbar/>
    <br/> <br/> <br/>
      {/* Mostrar la imagen seleccionada */}
      {selectedImage && <img src={selectedImage} alt="Selected Image" />}

      {/* Renderizar otros componentes, como Similarities y Recommendations */}
      <Similarities />
      <Recommendations/>
    </>
  );
}

export default Detail;
