import React from 'react'
import './style.css';

export default function Image() {

    let imageSrc = "./images/Bear.jpg";
    let animal = "Bear";

  return (
    <img src={require(`${imageSrc}`)} alt={animal} />
  )
}
