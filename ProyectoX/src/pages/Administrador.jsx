import React, { Component } from 'react';
import '../Styles/Template.css'
import { Link  } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { response } from 'express';




const Administrador = () => {

    const { register, formState: { errors } ,handleSubmit } = useForm(); 

    const onSubmit = (data) => {
        console.log(data);
    }

    
    const ciudades = () => {
        axios.get ('http://localhost:8080/producto/ciudad/')
        .then((response) => {
            console.log(response)
            this.setState({ciudades: response.data})
        })
        .catch((error) => {
            console.log('error');
        });
    }


    return (

        <>
        <div className='categoryProduct'>
        <div className="displayFlexColumn">
                        
        </div>
            
        <Link to="/home"> <span className="arrowLeft"> <FontAwesomeIcon icon={faArrowLeft} /></span> </Link>
        </div>
        

        <section>
            <h3> Crear propiedad </h3>

            <form onSubmit={handleSubmit (onSubmit)}>
                <div>
                    <label> Nombre de la propiedad </label>
                    <input type="text" {...register('nombrePropiedad', {
                    require: true, })} />
                    {errors.nombrePropiedad?.type === 'required' && <p> Este campo no puede estar vacío </p>}
                </div>
                <div>
                    <label> Categoria </label>
                    <select {...register('Categoria')}>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <label> Ciudad </label>
                    <select {...register('Ciudad')}>
                        {this.state.ciudades.map(elemento => (
                            <option key={elemento.id} value={elemento.id}> {elemento.ciudad} </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label> Dirección </label>
                    <input type="text" {...register('Dirección')} />
                </div>
                <div>
                    <label> Descripción </label>
                    <input type="textarea" {...register('Descripción')} />
                </div>

                <input type= 'submit' value= 'Crear' />

                
            </form>
           


        </section>
        </>
    )

}


export default Administrador;