import { Overlay, ModalImage } from './modalStyle';
import React from 'react';

export const Modal=({ imageUrl, onClose }) => {
    return (
        <Overlay onClick={onClose}>
             <ModalImage>
                <img src={imageUrl} alt="Modal" height={"500px"} />
          </ModalImage>
        </Overlay>
    );
}

export default Modal;

