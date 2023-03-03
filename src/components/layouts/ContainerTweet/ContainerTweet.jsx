import React , {useState, useEffect} from 'react'
import './containerTweet.css'

export const ContainerTweet = () => {

    const [values, setValues] = useState({
        tweet: ''
      })
    
      const handleInput = (e) => {
        const { name, value } = e.target
        setValues({
          ...values,
          [name]: value
        })
      }
    
      const [error, setError] = useState(false);
      const [register, setRegister] = useState([])
      const [text, setText] = useState('')
      const [showText, setShowText] = useState([])
    
    
      const handlePost = () => {
        if (values.tweet === '') {
          setError(true)
        } else if (values.tweet.length > 255) {
          setError(true)
        } else {
          setText(values)
          setRegister([...register, values])
          setError(false)
        }
      }
    
      useEffect(() => {
        localStorage.setItem('register', JSON.stringify(register))
      }, [register])
    
      const handleShow = () => {
        let storedData = localStorage.getItem('register')
        setShowText(JSON.parse(storedData))
      }

  return (
    <div className='container-content'>
      <div className='container-comment'>
        <div className='container-tweet'>
          <h2 className='title'>Tweet</h2>
          <textarea name='tweet' maxLength={255} onChange={handleInput} value={values.tweet} />
          <p>{255 - values.tweet.length}</p>
          {error &&
            alert("Supera el maximo de caracteres")
          }
          <button onClick={handlePost} className='btn'>Publicar</button>
          <button onClick={handleShow} className='btn'>Mostrar</button>

            <div className='container-answer'>
              <p className='answer'>{text.tweet}</p>
            </div>

        </div>
      </div>

      <div className='container-title-tweets'>
        <h2 className='title'>Comentarios publicados</h2>
        {showText.map((show) => (
          <p className='answer'>{show.tweet}</p>
        ))}
      </div>
    </div>
  )
}
