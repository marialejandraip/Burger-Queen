import React from 'react';
import logo from '../assets/Logo-BQ2.png';
import '../styles/Home.css';

export default function Start()  {
function MeseroHome () {
 console.log('aqui pasa algo')
}

  return(
    <div className="Home">
        <img src={logo} className="Home-logo" alt="Burguer Queeen Logo"/>
        <div className="Home-btn-container">
          <button className="Home-btn" onClick= {MeseroHome}>Mesero</button>
          <button className="Home-btn">Jefe de cocina</button>
        </div>
    </div>
  )
}