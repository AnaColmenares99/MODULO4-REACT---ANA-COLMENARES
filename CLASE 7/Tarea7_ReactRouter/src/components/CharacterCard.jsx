import React from 'react';

function CharacterCard({ name, image, gender, status }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '10px',
        width: '200px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: '100%',
          borderRadius: '10px',
          marginBottom: '10px',
        }}
      />
      <h3>{name}</h3>
      <p>
        <strong>Género:</strong> {gender}
      </p>
      <p>
        <strong>Estado:</strong> {status}
      </p>
    </div>
  );
}

export default CharacterCard;
