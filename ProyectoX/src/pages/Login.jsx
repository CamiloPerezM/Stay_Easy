import React, { useState, useEffect } from 'react';
import { Formulario, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../components/Services/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
import { Link, useNavigate } from 'react-router-dom'
import "../Styles/Login.css"
import Buscador from '../components/Buscador';
import LoginServices from '../components/Services/LoginServices';




const Login = () => {
    const [password, cambiarPassword] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const [user,  setUser] = useState (null);
    

    let navigate = useNavigate();

    const expresiones = {
        password: /^.{6,40}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        
        try {

            const user =  await LoginServices.Login ({
                email: correo.campo, 
                contrasenna: password.campo
            })

            localStorage.setItem('user', JSON.stringify(user));
            navigate('/', { replace: true });
            
            console.log(user);
            setUser(user);
            cambiarCorreo('');
            cambiarPassword('')

        } catch (error) {

            console.log(error);
            // console.log(e);

        }

    }


    return (
        <>
            <header>

                <div className="busqueda">
                    <h2 className="bienvenida">Busca oferta en hoteles, casas y mucho mas</h2>
                    <div className="botones2">
                        <Buscador></Buscador>
                    </div>
                </div>

                
            </header>


            <main className='main1  backgroundColor1'>
                <h1 className='titulo1'>Iniciar sesión</h1>

                <Formulario action="" onSubmit={onSubmit} id='form'>

                    <Input
                        estado={correo}
                        cambiarEstado={cambiarCorreo}
                        tipo="email"
                        label="Correo Electrónico"
                        placeholder="Ingresa tu email"
                        name="correo"
                        leyendaError="Este email no es valido ingrese un formato correcto, ejemplo: example@mail.com"
                        expresionRegular={expresiones.correo}
                    />

                    <Input
                        estado={password}
                        cambiarEstado={cambiarPassword}
                        tipo="password"
                        label="Contraseña"
                        placeholder="Ingresa tu contraseña"
                        name="password1"
                        leyendaError="La contraseña debe tener 6 o mas digitos."
                        expresionRegular={expresiones.password}
                    />


                    <ContenedorTerminos>
                    </ContenedorTerminos>
                    {formularioValido === false && <MensajeError>
                        <p>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            <b>Error:</b>Por favor completa los datos
                        </p>
                    </MensajeError>}
                    <ContenedorBotonCentrado>
                        <Boton type='submit' >Login</Boton>
                        <p>¿Aun no te has registrado? <Link to={`/registro`}>Registrate</Link></p>
                        {formularioValido === true && <MensajeExito>Iniciando sesión!</MensajeExito>}
                    </ContenedorBotonCentrado>
                </Formulario>
            </main>
        </>
    );
}


export default Login;