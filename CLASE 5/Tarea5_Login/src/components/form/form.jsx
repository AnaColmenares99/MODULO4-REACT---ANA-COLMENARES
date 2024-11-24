import React, { useState } from 'react'
import './form.css'

const Form = ({setUser}) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name === '' && password === ''){
            setError(true)
        }else{
            setError(false)
            setUser([name, password])
        }
    }
    

  return (
    <div>
        <h1>Formulario</h1>
        <form className='formStyle' onSubmit={handleSubmit}>
            <p>Nombre del usuario</p>
            <input type="text" onChange={e => setName(e.target.value)}/>
            {error && <p className='error'>Este campo es requerido</p>}
            <p>Contraseña</p>
            <input type="text" onChange={e =>  setPassword(e.target.value)}/>
             {error && <p className='error'>Este campo es requerido</p>}
            <button type='submit'>Iniciar sesión</button>
        </form>
    </div>
  )
}

export default Form