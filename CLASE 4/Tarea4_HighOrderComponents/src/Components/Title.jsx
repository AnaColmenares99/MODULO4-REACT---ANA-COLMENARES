    import React from 'react';

    function Title(props) {
    const styles = {
          title: {
            fontSize: props.size || '24px',
            fontWeight: 'bold',
            color: props.color || 'black',
            textAlign: 'center', // Centrado del texto
            margin: '10px 0px 300px 670px', 
            fontFamily: 'Arial, sans-serif',
          },

    };

    return (
        <div>
        <h1 style={styles.title}>{props.title || 'Título por defecto'}</h1>
        </div>
      
    );
    }

    export default Title;
