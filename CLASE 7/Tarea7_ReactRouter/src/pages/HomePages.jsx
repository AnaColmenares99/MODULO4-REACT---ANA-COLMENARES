import React from 'react';
import { NavLink } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bienvenido a la página de Rick and Morty</h1>
      <h3>Enlaces rápidos</h3>
      <nav>
        <NavLink
          to="/characters"
          style={({ isActive }) => ({ color: isActive ? 'blue' : 'black', margin: '10px' })}
        >
          Ir a personajes
        </NavLink>
        <NavLink
          to="/episodes"
          style={({ isActive }) => ({ color: isActive ? 'blue' : 'black', margin: '10px' })}
        >
          Ir a episodios
        </NavLink>
      </nav>
    </div>
  );
}

export default HomePage;
