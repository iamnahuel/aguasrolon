import React, { useRef, useState } from 'react';
import './styles/Login.css';
import logo from './img/logo.png';
import Registrarse from './Registrarse';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

const URL_LOGIN = "http://localhost/ws-login/login.php";

const enviarData = async (url, data) => {
 const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const json = await resp.json();
    return json;
}

export default function Login(props) {
    const [error, setError] = useState(null);
    const [espera, setEspera] = useState(false);
    const refUsuario = useRef(null);
    const refClave = useRef(null);
    const handleLogin = async () => {
        setEspera(true);
        const data = {
            "usuario": refUsuario.current.value,
            "clave": refClave.current.value
        };

        const respuestaJson = await enviarData(URL_LOGIN, data);
        //console.log("dotos enviados", data);
        props.acceder(respuestaJson.conectado);
        setError(respuestaJson.error);
        setEspera(false);
    }

    return (
        <div className="login justify-content-center" >
            <div className="logoAG" >
                <img src={logo} className="logo" width="304" />
            </div>
            <div className="row">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card pt-5">
                        <div className="card-header text-center">
                            <h3>😀 Bienvenido </h3>
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    @
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Usuario"
                                    aria-label="usuario"
                                    aria-describedby="basic-addon1"
                                    ref={refUsuario}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon2">
                                    🔐
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Clave"
                                    aria-label="clave"
                                    aria-describedby="basic-addon"
                                    ref={refClave}
                                />
                            </div>
                            {
                                error &&
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            }
                            <button
                                onClick={handleLogin}
                                disabled={espera}
                                className="btn btn-info btn-mg btn-block" >Acceder</button>
                            <button
                                className="btn btn-info btn-mg btn-block" >Crear cuenta nueva

                            </button>

                            <div className="card-footer">
                                <span>¿Olvido su contraseña?  </span>
                                <a href="www.google.com">Recuperar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


