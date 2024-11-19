import React from 'react';

function Title(props) {
  const styles = {
    title: {
      fontSize: props.size || '24px',
      fontWeight: 'bold',
      color: props.color || '#black', // Color personalizable, por defecto gris oscuro
      textAlign: props.align || 'center', // Alineación personalizable, por defecto centrado
      margin: '10px 0',
      fontFamily: 'Arial, sans-serif',
    },
    underline: {
      width: props.underlineWidth || '50%',
      height: '2px',
      backgroundColor: props.color || 'gray',
      margin: '5px auto',
    },
  };

  return (
    <div>
      <h1 style={styles.title}>{props.title || 'Título por defecto'}</h1>
      {props.underline && <div style={styles.underline}></div>}
    </div>
  );
}

export default Title;
