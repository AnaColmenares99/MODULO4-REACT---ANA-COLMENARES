import React from 'react';
import Title from './Title';
import Image from './Image';
import Details from './Details';

function CharacterCard(props) {
  return (
    <div>
      {/* Nombre del personaje */}
      <Title title={props.name} />
      {/* Imagen del personaje */}
      <Image url={props.image} />
      {/* Detalles del personaje */}
      <Details genre={props.genre} status={props.status} />
    </div>
  );
}

export default CharacterCard;
