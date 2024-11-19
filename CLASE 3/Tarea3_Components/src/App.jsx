import React from 'react';
import Title from './components/Title';
import Image from './components/Image';
import Details from './components/Details';
import './App.css';

function App() {
  
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
  };
  
  return (

    <div style={styles.container}>
      <Title
        title="Adele"
        size="36px"
        color="purple"
        align="center"
        underline
      />
      <Image
      url="https://www.billboard.com/wp-content/uploads/2024/07/adele-las-vegas-residency-2022-billboard-espanol-1548.jpg"
      alt="Adele en una presentación"
      caption="Adele, cantante y compositora británica"
      />
      <Details
      genre="Pop, Soul, Blues"
      status="Viva"
      />

    </div>
  );
}

export default App;
