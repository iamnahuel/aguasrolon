import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Login from './components/Login';
import Perfil from './components/perfil';
import Registrarse from './components/Registrarse';


function App() {
  const [conectado, setConectado] = useState(false);
  const acceder = (estado) => {
    setConectado(estado)
  }

  return (


    conectado ? <Registrarse /> : <Login acceder={acceder} />
    


  );
}

export default App;
