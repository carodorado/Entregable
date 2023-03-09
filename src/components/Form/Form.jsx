import { useState } from 'react'
import './Form.css'
import Card from '../Card/Card'


const Form = () => {
    const [user, setUser] = useState({
        name: '',
        color: ''
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        let espacios = user.name.trimStart()
        if(user.name.length > 2 && user.color.length > 5 && user.name.length == espacios.length){
         setShow(true)
         setError(false)
        } else setError(true)
    }
  
  return ( 
    <>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Ingresa tu nombre" onChange={(event) => setUser({...user, name: event.target.value})}/>
            <input type="text" placeholder="Ingresa tu color favorito {formato HEX}" onChange={(event) => setUser({...user, color: event.target.value})}/>
            <button type="submit">ENVIAR</button>
        </form>

        {error && 'Por favor chequea que la información sea correcta'}
        {show && <Card user={user}/>}
    </>
  )
}

export default Form