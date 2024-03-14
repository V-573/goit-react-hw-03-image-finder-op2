import React from 'react';

const ImageGalleryItem = ({ image, handleImageClick }) => {
  return (
    <li style={{ margin: '5px' }}>
      <img
        src={image.webformatURL}
        alt="Pixabay"
        style={{ width: '300px', height: '200px' }}
        onClick={() => handleImageClick(image.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;