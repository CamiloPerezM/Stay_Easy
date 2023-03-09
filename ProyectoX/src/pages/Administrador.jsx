import React, { useContext } from 'react';
import '../Styles/Template.css'
import '../Styles/Administrador.css'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
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

    const { register, formState: { errors }, handleSubmit } = useForm();

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


            <section className='fondoCard'>

                <h3> Crear propiedad </h3>

                <div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='primerBloque'>
                            <div>
                                <label> Nombre de la propiedad </label>
                                <input type="text"  {...register('nombrePropiedad', {
                                    require: true,
                                })} className='inputStyle' />
                                {errors.nombrePropiedad?.type === 'required' && <p> Este campo no puede estar vacío </p>}
                            </div>
                            <div>
                                <label> Categoria </label>
                                <select  {...register('Categoria')} className='inputStyle'>
                                    {categorias.map(categoria => (
                                        <option key={categoria.id} value={categoria.id}> {categoria.titulo} </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label> Ciudad </label>
                                <select className='inputStyle' {...register('Ciudad')}>
                                    {ciudades.map(ciudad => (
                                        <option key={ciudad.id} value={ciudad.id}> {ciudad.nombre} </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label> Dirección </label>
                                <input type="text" className='inputStyle' {...register('Dirección')} />
                            </div>
                            <div>
                                <label> Latitud </label>
                                <input type="text" className='inputStyle' {...register('Latitud')} />
                            </div>
                            <div>
                                <label> Longitud </label>
                                <input type="text" className='inputStyle' {...register('Longitud')} />
                            </div>
                            <div>
                                <label> Descripción </label>
                                <input type="textarea" className='inputStylearea' {...register('Descripción')} />
                            </div>
                        </div>
                        <div className='caracteristicas'>
                            <div>
                                <label className='titulo5'> Caracteristicas </label>
                                <ul>
                                    {
                                        atributos.map(atributo => (
                                            <li className="caracteristicasProductosDetail" key={atributo.id}>
                                                <FontAwesomeIcon icon={atributo.idIcono} />
                                                <span>{atributo.descripcion}</span>
                                                <input type="checkbox" name="" id="" className='chequear' />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                        <label className='titulo5'> Imagenes </label>
                            <InputImg/>
                        </div>

                        <div className='adicionales'>
                            <div>
                                <label> Normas de la casa </label>
                                <input type="textarea" className='inputStylearea' {...register('Normas de la casa')} />
                            </div>
                            <div>
                                <label> Salud y seguridad </label>
                                <input type="textarea" className='inputStylearea' {...register('Salud y seguridad')} />
                            </div>
                            <div>
                                <label> Politicas de cancelación </label>
                                <input type="textarea" className='inputStylearea' {...register('Politicas de cancelación')} />
                            </div>
                        </div>
                        <div className='boton'>
                            <Link to="/addedProduct"> <input type='submit' value='Crear' className='envioForm' /></Link>
                        </div>

                    </form>

                </div>
            </section>

        </>
    )

}


export default Administrador;