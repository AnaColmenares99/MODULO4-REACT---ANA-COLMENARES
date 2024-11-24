import React from 'react';

function Details(props) {
  const styles = {
    container: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      maxWidth: '300px',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
      position: 'absolute',
      top: '88%', // Posicionar en el centro vertical
      left: '50%', // Posicionar en el centro horizontal
      transform: 'translate(-50%, -50%)', // Ajustar el punto de referencia al centro
      
    },
    text: {
      margin: '5px 0',
    },
    boldText: {
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>
        <span style={styles.boldText}>Género:</span> {props.genre}
      </p>
      <p style={styles.text}>
        <span style={styles.boldText}>Estado:</span> {props.status}
      </p>
    </div>
  );
}

export default Details;
