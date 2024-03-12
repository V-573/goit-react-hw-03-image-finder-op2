import { Overlay, ModalImage } from './modalStyle';
import React from 'react';

export const Modal=({ imageUrl, onClose }) => {
    return (
        <Overlay>
             <ModalImage>
                {/* <span className="close" onClick={onClose}>&times;</span> */}
                <img src={imageUrl} alt="Modal" width="100%"/>
          </ModalImage>
        </Overlay>
    );
}

export default Modal;

