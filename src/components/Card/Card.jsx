import React from 'react'
import './Card.css'

function Card({user}) {
  return (
    <div id="card">
      <h2>Hola {user.name}!</h2>
      <h3>Sabemos que tu color favorito es:</h3>
      <div id="color" style={{backgroundColor: user.color }}>
          {user.color}
      </div>         
    </div>
  );
}

export default Card;
