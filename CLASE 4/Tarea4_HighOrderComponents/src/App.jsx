import React, { useEffect, useState } from 'react';
import CharacterCard from './components/CharacterCard';

function App() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [genre, setGenre] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null); // Manejo de errores

  const rickAndMortyCharacterId = 3; // Cambia este ID para mostrar otros personajes

  useEffect(() => {
    // Llamada a la API para obtener los datos del personaje
    fetch(`https://rickandmortyapi.com/api/character/${rickAndMortyCharacterId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      })
      .then((data) => {
        setName(data.name);
        setImage(data.image);
        setGenre(data.gender);
        setStatus(data.status);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, [rickAndMortyCharacterId]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      {/* Renderizamos el componente CharacterCard con los datos obtenidos */}
      <CharacterCard
        name={name}
        image={image}
        genre={genre}
        status={status}
      />
    </div>
  );
}

export default App;
