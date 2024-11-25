import React, { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";

function App() {
  // Paso 1. Declarar estado
  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setPage] = useState(1); // Estado para controlar la página actual


  // Paso 2. Llamar a la API
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => setCharactersList(data.results))
      .catch((error) => console.error("Error:", error));
  }, [currentPage]); // Ahora depende de currentPage
  

  // Paso 3. Renderizar la lista de personajes
  return (
    <div>
  <h1 style={{ textAlign: "center", margin: "20px 0" }}>Personajes de Rick and Morty</h1>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", alignItems: "center",marginTop: "20px", }}>
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
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
    <button 
      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1} // Desactiva si está en la primera página
    >
      Anterior
    </button>
    <button onClick={() => setPage((prev) => prev + 1)}>
      Siguiente
    </button>
  </div>
</div>

    
  );
}

export default App;

