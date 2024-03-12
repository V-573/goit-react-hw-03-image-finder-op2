import React from 'react'
import { ButtonL } from './buttonStyle'

export const ButtonLoad = ({request}) => {
  return (
    <ButtonL onClick={() => request()}>Load more</ButtonL>
  )
}

export default ButtonLoad;
// ButtonLoadMore.jsx
