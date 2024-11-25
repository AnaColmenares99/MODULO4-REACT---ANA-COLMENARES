import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';

function CharacterPage() {
  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => setCharactersList(data.results));
  }, [currentPage]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Personajes de Rick and Morty</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        {charactersList.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            gender={character.gender}
            status={character.status}
          />
        ))}
      </div>

      {/* Botones de paginación */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Siguiente</button>
      </div>

      {/* Enlace para volver a Home */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <NavLink
          to="/"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Volver a Home
        </NavLink>
      </div>
    </div>
  );
}

export default CharacterPage;
