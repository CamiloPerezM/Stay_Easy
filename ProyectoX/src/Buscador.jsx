import './App.css';
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function App() {

    const[usuarios, setUsuarios] = useState([])
    const [tablausuarios, setTablaUsuarios] = useState([])
    const [busqyeda, setBusqueda] = useState("")

    const peticionGet=async()=>{
        await axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            setUsuarios(response.data);
            setTablaUsuarios(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        peticionGet();

    },[])

    return (
        <div className='App'>
            <div className='containerInput'>
                <input 
                    className='form-control inputBuscar'
                    value={busqueda}
                    placeholder="¿A dónde vamos?"
                
                />
                <button className='btn btn-success'>
                    <FontAwesomeIcon icon={faSearch}/>
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                </button>
            </div>



            <div className='tavle-responsive'>
                <table className='table table-sm table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Nombre de Usuario</th>
                            <th>Correo</th>
                            <th>Sitio Web</th>
                            <th>Ciudad</th>
                            <th>Empresa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios && usuarios.map((usuario)=>(
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.name}</td>
                                <td>{usuario.phone}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.wedsite}</td>
                                <td>{usuario.addres.city}</td>
                                <td>{usuario.company.name}</td>
                            </tr>

                        ))}
                    </tbody>

                </table>
            </div>
            {/* <header className='App-header'>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a 
                   className='App-link'
                   href=""
                   target="_blank"
                   rel="noopener noreferrer"                   
                >
                    Learn React
                </a>
            </header> */}
        </div>
    )
}


export default App