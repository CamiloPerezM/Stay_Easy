import React, { useContext } from 'react';
import '../Styles/Template.css'
import { Link  } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faWifi, faCar, faWater, faHotTub, faPaw, faUtensils, faSwimmer, faSmokingBan, faUser, faChildReaching } from "@fortawesome/free-solid-svg-icons";
import { ContextGlobal } from '../components/Services/global.context';
import InputImg from '../components/InputImg';




const Administrador = () => {

  const { ciudades, categorias } = useContext(ContextGlobal);

  const atributos = [
    {
        id: 0,
        descripcion: 'Libre de Humo',
        idIcono: faSmokingBan
      },
      {
        id: 1,
        descripcion: 'Wifi',
        idIcono: faWifi
      },
      {
        id: 2,
        descripcion: 'Restarante',
        idIcono: faUtensils
      },
      {
        id: 3,
        descripcion: 'Piscina',
        idIcono: faSwimmer
      },
      {
        id: 4,
        descripcion: 'Parqueadero',
        idIcono: faCar
      },
      {
        id: 5,
        descripcion: 'Lavanderia',
        idIcono: faWater
      },
      {
        id: 6,
        descripcion: 'Jacuzzi',
        idIcono: faHotTub
      },
      {
        id: 7,
        descripcion: 'Mascotas',
        idIcono: faPaw
      },
      {
        id: 8,
        descripcion: 'Aseo',
        idIcono: faUser
      },
      {
        id: 9,
        descripcion: 'Parque Infantil',
        idIcono: faChildReaching
      },
  ];

    const { register, formState: { errors } ,handleSubmit } = useForm(); 

    const onSubmit = (data) => {
        console.log(data);
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
                        {categorias.map(categoria => (
                            <option key={categoria.id} value={categoria.id}> {categoria.titulo} </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label> Ciudad </label>
                    <select {...register('Ciudad')}>
                        {ciudades.map(ciudad => (
                            <option key={ciudad.id} value={ciudad.id}> {ciudad.nombre} </option>
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
                <div>
                    <label> Latitud </label>
                    <input type="text" {...register('Latitud')} />
                </div>
                <div>
                    <label> Longitud </label>
                    <input type="text" {...register('Longitud')} />
                </div>
                <div>
                    <label> Caracteristicas </label>
                    <ul>
                        {
                            atributos.map(atributo =>(
                                <li className="caracteristicasProductosDetail" key={atributo.id}>
                                    <FontAwesomeIcon icon={atributo.idIcono} />
                                    <span>{atributo.descripcion}</span>
                                    <input type="checkbox" name="" id="" />
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <InputImg ></InputImg>
                <div>
                    <label> Normas de la casa </label>
                    <input type="textarea" {...register('Normas de la casa')} />
                </div>
                <div>
                    <label> Salud y seguridad </label>
                    <input type="textarea" {...register('Salud y seguridad')} />
                </div>
                <div>
                    <label> Politicas de cancelación </label>
                    <input type="textarea" {...register('Politicas de cancelación')} />
                </div>
                

                <input type= 'submit' value= 'Crear' />

                
            </form>
           


        </section>
        </>
    )

}


export default Administrador;