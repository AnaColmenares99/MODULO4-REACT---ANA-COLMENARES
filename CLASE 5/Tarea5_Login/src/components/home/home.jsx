import React from 'react'

const Home = ({user, setUser}) => {

    const handleClick = () => {
        setUser([])
    }

  return (
    <div>
        <h1>Bienvenido a Home</h1>
        <h2>------------------</h2>
        <h1>{user}</h1>
        <h2>------------------</h2>
        <button onClick={handleClick}>Regresar</button>
        
    </div>
  )
}

export default Home