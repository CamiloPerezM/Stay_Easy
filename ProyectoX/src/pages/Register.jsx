import React, { useState } from 'react';
import { Formulario, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../components/Services/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
import { Link, useNavigate } from 'react-router-dom'
import "../Styles/Register.css"
import Buscador from '../components/Buscador';
import RegisterServices from '../components/Services/RegisterServices';


const Registro = () => {
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [apellido, cambiarApellido] = useState({ campo: '', valido: null });
    const [password, cambiarPassword] = useState({ campo: '', valido: null });
    const [password2, cambiarPassword2] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const [user,  setUser] = useState (null);

    let navigate = useNavigate();

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        password: /^.{6,40}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    const validarPassword2 = () => {
        if (password.campo.length > 0) {
            if (password.campo !== password2.campo) {
                cambiarPassword2((prevState) => {
                    return { ...prevState, valido: 'false' }
                });
            } else {
                cambiarPassword2((prevState) => {
                    return { ...prevState, valido: 'true' }
                });
            }
        }
    }
    const onSubmit =  async (e) => {
        e.preventDefault();

        try {

            await RegisterServices.Register ({
                email: correo.campo, 
                contrasenna: password.campo,
                nombre: nombre.campo,
                apellido: apellido.campo
            });

            JSON.parse(localStorage.getItem('user') ?? '{}');
            navigate('/');
            alert("Usuario registrado con exito");


            
            
            console.log(user);
            setUser(user);
            // cambiarCorreo('');
            // cambiarPassword('')

        } catch (error) {

            console.log(error);
            // console.log(e);

        }

        if (
            nombre.valido === 'true' &&
            apellido.valido === 'true' &&
            password.valido === 'true' &&
            password2.valido === 'true' &&
            correo.valido === 'true'
        ) {
            cambiarFormularioValido(true);

            cambiarNombre({ campo: "", valido: null });
            cambiarApellido({ campo: "", valido: null });
            cambiarCorreo({ campo: '', valido: null });
            cambiarPassword({ campo: '', valido: null });
            cambiarPassword2({ campo: '', valido: null });
        } else {
            cambiarFormularioValido(false)
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
            <main className='main  backgroundColor'>
                <h1 className='titulo'>Crear cuenta</h1>
                <Formulario action="" onSubmit={onSubmit}>
                    <Input
                        estado={nombre}
                        cambiarEstado={cambiarNombre}
                        tipo="text"
                        label="Nombre"
                        placeholder="Ingresa tu nombre"
                        name="usuario"
                        leyendaError="Este campo es obligatorio"
                        expresionRegular={expresiones.nombre}
                    />
                    <Input
                        estado={apellido}
                        cambiarEstado={cambiarApellido}
                        tipo="text"
                        label="Apellido"
                        placeholder="Ingresa tu apellido"
                        name="usuario"
                        leyendaError="Este campo es obligatorio"
                        expresionRegular={expresiones.apellido}
                    />
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
                    <Input
                        estado={password2}
                        cambiarEstado={cambiarPassword2}
                        tipo="password"
                        label="Repetir Contraseña"
                        placeholder="Repite la contraseña"
                        name="password2"
                        leyendaError="La contraseña no es igual"
                        funcion={validarPassword2}
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
                        <Boton type='submit'>Crear cuenta</Boton>
                        <p>¿Ya tienes una cuenta? <Link to={`/login`}>Iniciar sesión</Link></p>
                        {formularioValido === true && <MensajeExito>Cuenta Registrada!</MensajeExito>}
                    </ContenedorBotonCentrado>
                </Formulario>
            </main>
        </>
    );
}


export default Registro;