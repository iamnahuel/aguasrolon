import React, { useRef, useState } from 'react';
import './styles/Perfil.css';
export default function Perfil() {
    return (
        
        <div className="perfil">
            <nav className="navbar navbar-expand-lg ">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ventas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Clientes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Recorrido</a>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Buscar"
                            aria-label="Search"
                        />

                    </form>
                    <button className="btn" >
                        Buscar
                    </button>
                </div>
                <span className="spanNombre">Bienvenido Rodrigo</span>
                
            </nav>

        </div>
    )
}