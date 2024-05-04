import React, { useEffect, useRef, useState } from 'react';
import image0 from '../images/image0.jpg';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';
import image11 from '../images/image11.jpg';
import image12 from '../images/image12.jpg';
import './ImageCarousel.css';

const images = [
  image0, image1, image2, image3, image4, image5, image6,
  image7, image8, image9, image10, image11, image12
];

const ImageCarousel = () => {
  const listRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    if (listNode && currentIndex >= 0 && currentIndex < images.length) {
      const imgNode = listNode.children[currentIndex].querySelector("img");
      imgNode.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    setCurrentIndex(prevIndex => {
      if (direction === 'prev') {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const handleImageClick = (index) => {
    alert(`Has hecho clic en la imagen ${index}`);
  };

  return (
    <div className="main-container">
      <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
      <div className="container-images">
        <ul ref={listRef}>
          {images.map((image, index) => (
            <li key={index} onClick={() => handleImageClick(index)}>
              <img src={image} alt={`Image ${index}`} />
            </li>
          ))}
        </ul>
      </div>
      <div className="dots-container">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          >
            &#9865;
          </div>
        ))}
      </div>
      <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
    </div>
  );
};

export default ImageCarousel;
