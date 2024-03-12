import React from 'react';
import { ImageGalleryItem } from '../imageGalleryItem/ImageGalleryItem';
import { Gallery } from './imageGalleryStyle';

export const ImageGallery = ({ photosGallery, identifyImg }) => {
  return (
    <Gallery onClick={(e) => {identifyImg(e)}}>
      {photosGallery?.map(item => (
        <ImageGalleryItem
          key={item.id}
          source={item.webformatURL}
          largeImage={item.largeImageURL}
          text={item.tags}
        ></ImageGalleryItem>
      ))}
    </Gallery>
  );
};


// ImageGallery.jsx