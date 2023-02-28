import React, {useState} from 'react'
import './great.css'

export const Great = () => {

    const [name, setName] = useState('')
    
    const [textname, setTextname] = useState('Bienvenido')
    const handleGreet = () => {
        setTextname('Hola ' + name)
        setName('')
    }

    const handleInput  = (e) => {
        const name = e.target.value
        setName(name)
    }

  return (
    <div className='container-great'>
        <h2 className='display'>{textname}</h2>
        <input type="text" name="name" value={name} onChange={handleInput} id="name" />
        <button onClick={handleGreet}>Saludar</button>
    </div>
  )
}
