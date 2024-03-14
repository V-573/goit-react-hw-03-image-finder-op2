import React, { useState, useEffect } from 'react';
import Modal from './Modal/Modal';
import { searchImages } from 'services/photosApi';
import SearchBar from './searchBar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import ButtonLoad from './button/ButtonLoad';


function App() {
  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false); 

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      setModalOpen(false);
    }
  };

  const handleSearch = () => {
    searchImages(keyword, page, setImages);
    setShowLoadMore(true); 
    

  };

  const handleImageClick = imageUrl => {
    setSelectedImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

const loadMore = () => {
      // Incrementa la página para cargar más imágenes
      let nextPage = page + 1;

      // Realiza la búsqueda de más imágenes
      searchImages(keyword, nextPage, newImages => {
        // Combina las imágenes actuales con las nuevas imágenes cargadas
        let updatedImages = [...images, ...newImages];
        
        // Actualiza el estado de las imágenes con las nuevas imágenes cargadas
        setImages(updatedImages);
        
        // Actualiza la página actual
        setPage(nextPage);
      });
  
  
};

  return (
    <div>
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        handleSearch={handleSearch}
      />

      {/* Usa el componente ImageGallery */}
      <ImageGallery images={images} handleImageClick={handleImageClick} />


{showLoadMore && <ButtonLoad request={loadMore}/>} {/* Mostrar el botón "Load More" si showLoadMore es true */}
      
      {modalOpen && <Modal imageUrl={selectedImageUrl} onClose={closeModal} />}
    </div>
  );
}

export default App;
