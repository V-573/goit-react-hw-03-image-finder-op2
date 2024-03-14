import React from 'react';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';



import {
 Gallery
} from './imageGalleryStyle'



const ImageGallery = ({ images, handleImageClick }) => {


  return (
    


    <Gallery>
      {images.map((image, index) => (

        
        
          <ImageGalleryItem
          key={`${image.id}_${index}`}
          image={image}
          handleImageClick={handleImageClick}
        />
        

        
        
      ))}
    </Gallery>






  );
};
export default ImageGallery;