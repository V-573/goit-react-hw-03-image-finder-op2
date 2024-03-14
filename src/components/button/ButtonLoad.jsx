import React, { useState } from 'react';
import { ButtonL, ButtonContainer } from './buttonStyle';
import { LoaderIcon } from '../loader/loaderStyle';
//import Loader from 'react-loader-spinner';

const ButtonLoad = ({ request }) => {
  const [loading, setLoading] = useState(false); // Estado para controlar si se muestra el loader

  const handleClick = async () => {
    setLoading(true); // Muestra el loader
    await request(); // Realiza la carga (supongo que request es una función asíncrona)
    setLoading(false); // Oculta el loader después de que la carga haya finalizado
  };

  return (
    <>
      <ButtonContainer>
        
      <ButtonL disabled={loading} onClick={handleClick} >Load more</ButtonL>

        </ButtonContainer>
       {loading && <LoaderIcon />}{/* Muestra el loader si loading es true */}


      {/* {loading && <Loader type="ThreeDots" color="#00BFFF" height={"50"} width={"50"} />} */}
    </>
  );
};

export default ButtonLoad;
