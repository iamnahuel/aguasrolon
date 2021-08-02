import React, { useRef, useState } from 'react';
import './styles/Registrarse.css'
import Select from 'react-select';


////////////////////////////
//const URL_LOGIN = "http://localhost/ws-login/registrarse.php";
const URL_LOGIN = "http://localhost/ws-login/Registro.php";
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


export default function Registrarse(props) {
    const [error, setError] = useState(null);
    const [espera, setEspera] = useState(false);
    const refUsuario = useRef(null);
    const refClave = useRef(null);
    const refNombre = useRef(null);
    const refApellido = useRef(null);
    const refCelular = useRef(null);
    const refDireccion = useRef(null);
    const refCorreo = useRef(null);
    const refLocalidad = useRef(null);
    const handleLogin = async () => {
        setEspera(true);
        const data = {
            "usuario": refUsuario.current.value,
            "clave": refClave.current.value,
            "nombre": refNombre.current.value,
            "apellido": refApellido.current.value,
            "celular": refCelular.current.value,
            "direccion": refDireccion.current.value,
            "correo": refCorreo.current.value,
            "localidad": refLocalidad.current.value
            
        };

        const respuestaJson = await enviarData(URL_LOGIN, data);
        console.log("dotos enviados", data);
        //props.acceder(respuestaJson.conectado);
        console.log(respuestaJson);
        setError(respuestaJson.error);
        setEspera(false);
    }

    return (
        <div className="registro">
            <div className="row">
                <div className="formularioRegistro">
                    <div className="row">
                        <div className="col-sm-4 offset-4 mt-5">
                            <div className="card pt-7">
                                <div className="card-header text-center">
                                    <h5>Aguas Rolon</h5>
                                </div>
                                <div className="card-body">

                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon2">
                                            🙍‍♀️🙍‍♂️
                                        </span>
                                        <input
                                            type="name"
                                            className="form-control"
                                            placeholder="Nombre"
                                            aria-label="nombre"
                                            aria-describedby="basic-addon"
                                            ref={refNombre}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon2">
                                            🙍‍♀️🙍‍♂️
                                        </span>
                                        <input
                                            type="apellido"
                                            className="form-control"
                                            placeholder="Apellido"
                                            aria-label="apellido"
                                            aria-describedby="basic-addon"
                                            ref={refApellido}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon2">
                                            😀
                                        </span>
                                        <input
                                            type="usuario"
                                            className="form-control"
                                            placeholder="Usuario"
                                            aria-label="usuario"
                                            aria-describedby="basic-addon"
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
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon2">
                                            📱
                                        </span>
                                        <input
                                            type="number"
                                            maxlength="10"
                                            className="form-control"
                                            placeholder="Celular"
                                            aria-label="celular"
                                            aria-describedby="basic-addon"
                                            ref={refCelular}
                                        />
                                    </div>
                                    <div className="input-group mb-3">

                                        <span className="input-group-text" id="basic-addon1">
                                            📧
                                        </span>
                                        <input
                                            type="correo"
                                            className="form-control"
                                            placeholder="Correo"
                                            aria-label="correo"
                                            aria-describedby="basic-addon1"
                                            ref={refCorreo}

                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <select className="col-md-3"
                                            ref={refLocalidad}>
                                            <option selected>Localidad</option>
                                            <option value="1">Rolon</option>
                                            <option value="2">Macachin</option>
                                            <option value="3">Santa rosa - Toay</option>
                                        </select>
                                        <span className="input-group-text" id="basic-addon1">
                                            📍
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Direccion"
                                            aria-label="direccion"
                                            aria-describedby="basic-addon1"
                                            ref={refDireccion}
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
                                        //   disabled={espera}
                                        className="btn btn-info btn-mg btn-block" >Registrarse</button>
                                    <button className="btn btn-info btn-mg btn-block" >Cancelar</button>
                                    <div className="card-footer">
                                        <span>Todos los datos son obligatorios</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer py-2 text-xs-center">
                <div className="container1">
                    <p>Desarrollado por IAmNahuel</p>
                </div>
            </footer>
        </div>
    )
}