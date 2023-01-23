import React, {useState} from 'react';
import { Formulario,ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../Modules/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../Components/Input';



const Login = () =>{
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);

const expresiones = { 
		password: /^.{6,40}$/, 
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	}

const validarPassword2 = () => {
		if(password.campo.length > 0){
			if(password.campo !== password2.campo){
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'true'}
				});
			}
		}
	}
const onSubmit =(e) =>{
    e.preventDefault();

if(
    password.valido === 'true' && 
    password2.valido === 'true' && 
    correo.valido === 'true'
    ){
    cambiarFormularioValido(true);


    cambiarCorreo({campo: '', valido: null});
    cambiarPassword({campo: '', valido: null});
    cambiarPassword2({campo: '', valido: null});
    }else{
    cambiarFormularioValido(false)
    }
}





    return(
        <main>
        <h1>Iniciar sesión</h1>
            <Formulario action =""onSubmit={onSubmit}>

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
                <FontAwesomeIcon icon={faExclamationTriangle}/>
                <b>Error:</b>Por favor completa los datos
                </p>
                </MensajeError> }
                <ContenedorBotonCentrado>
                <Boton type='submit'>Login</Boton>
                <p>¿No estas registrado? <a href=""> Registrarse</a> </p>
                {formularioValido === true && <MensajeExito>Iniciando sesión!</MensajeExito>}
                </ContenedorBotonCentrado>
            </Formulario>
        </main>
    );
}


export default Login;