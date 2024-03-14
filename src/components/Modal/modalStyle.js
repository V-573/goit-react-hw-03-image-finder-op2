import styled from "styled-components";

export const Overlay = styled.div`
    background-color: #00000060;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1; 

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalImage = styled.div`
    max-width: 90vw; /* Establece el ancho máximo al 90% del ancho de la ventana del navegador */
    max-height: 90vh; /* Establece la altura máxima al 90% del alto de la ventana del navegador */
    overflow: hidden; /* Evita que la imagen sobresalga del contenedor */
    display: flex;
    justify-content: center;
    align-items: center;
     
`;

export const ModalImg = styled.img`
  object-fit: contain; /* Hace que la imagen se ajuste dentro del contenedor sin recortarla */

`;
