// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import './Similarities.css';


function Similarities() {
  const images = [
    "https://static.zara.net/photos///2024/V/0/3/p/5767/521/712/2/w/2048/5767521712_6_1_1.jpg?ts=1707751045954",
    "https://static.zara.net/photos///2024/V/0/3/p/5767/521/712/2/w/2048/5767521712_6_2_1.jpg?ts=1707751045737",
    "https://static.zara.net/photos///2024/V/0/3/p/5767/521/712/2/w/2048/5767521712_3_1_1.jpg?ts=1707751046435",
    "https://static.zara.net/photos///2024/V/0/1/p/2893/010/818/17/w/2048/2893010818_1_1_1.jpg?ts=1713965800221",
    "https://static.zara.net/photos///2024/V/0/1/p/2893/010/818/17/w/2048/2893010818_2_1_1.jpg?ts=1713965805677",
    "https://static.zara.net/photos///2024/V/0/1/p/2893/010/818/2/w/2048/2893010818_3_1_1.jpg?ts=1708506892071",
    "https://static.zara.net/photos///2024/V/0/2/p/4432/475/922/2/w/2048/4432475922_6_1_1.jpg?ts=1710489196217",
    "https://static.zara.net/photos///2024/V/0/2/p/4432/475/922/2/w/2048/4432475922_6_2_1.jpg?ts=1710489196510",
    "https://static.zara.net/photos///2024/V/0/2/p/4432/475/922/2/w/2048/4432475922_3_1_1.jpg?ts=1710489197564"
  ];

  const listRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    if (listNode && currentIndex >= 0 && currentIndex < images.length) {
      const imgNode = listNode.children[currentIndex].querySelector("img");
      imgNode.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
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
    setCurrentIndex(index);
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
}

export default Similarities;
