import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Pagination from '../components/Paginations';

function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then((response) => response.json())
      .then((data) => setEpisodes(data.results));
  }, [page]);

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',  // Centra el contenido horizontalmente
        justifyContent: 'center',  // Centra el contenido verticalmente
        minHeight: '100vh',  // Asegura que el contenedor ocupe toda la altura de la ventana
      }}
    >
      <h1 style={{ textAlign: 'center', margin: '20px auto' }}>Episodios de Rick and Morty</h1>
      
      {/* Contenedor de episodios */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          width: '100%',  // Asegura que la cuadrícula ocupe todo el ancho posible
          maxWidth: '1200px',  // Limita el ancho máximo para que no se estire demasiado
        }}
      >
        {episodes.map((episode) => (
          <div
            key={episode.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '15px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ marginBottom: '10px', textAlign: 'center' }}>{episode.name}</h3>
            <p style={{ textAlign: 'center' }}>
              <strong>Fecha de emisión:</strong> {episode.air_date}
            </p>
            <p style={{ textAlign: 'center' }}>
              <strong>Episodio:</strong> {episode.episode}
            </p>
          </div>
        ))}
      </div>
      {/* Paginación */}
      <Pagination page={page} setPage={setPage} />
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

export default EpisodesPage;


