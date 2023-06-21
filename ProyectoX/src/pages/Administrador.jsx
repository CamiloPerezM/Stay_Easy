import React, { useContext, useState} from 'react';
import '../Styles/Template.css'
import '../Styles/Administrador.css'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faWifi, faCar, faWater, faHotTub, faPaw, faUtensils, faSwimmer, faSmokingBan, faUser, faChildReaching } from "@fortawesome/free-solid-svg-icons";
import { ContextGlobal } from '../components/Services/global.context';
import InputImg from '../components/InputImg';




const Administrador = () => {

    const { ciudades, categorias } = useContext(ContextGlobal);
    const navigate = useNavigate();

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



  

    let user = JSON.parse(localStorage.getItem('user') ?? '{}');





    const [nombrePropiedad, setNombrePropiedad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState({});
    const [ciudad, setCiudad] = useState({});

    const handleNombrePropiedadChange = (event) => {
        setNombrePropiedad(event.target.value);
    };

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
    }


    const handleCategoriaChange = (event) => {
        const selectedCategoria = categorias.find(c => c?.id === parseInt(event.target.value));
        setCategoria(selectedCategoria);
    };

    const handleCiudadChange = (event) => {
        const selectedCiudad = ciudades.find(c => c.id === parseInt(event.target.value));
        setCiudad(selectedCiudad);
    };


    const handleClick = async () => {

        if (!ciudad || !categoria || !nombrePropiedad || !descripcion) {
            alert("Debe seleccionar una categoria, ciudad y demás datos.");
            return;
        };

        try {


            // URL de la API y token Bearer
            const url = "http://18.219.37.134:8080/producto/";
            const tokenAbuscar = JSON.parse(localStorage.getItem('user'));
            const token = tokenAbuscar?.token;

            const body = JSON.stringify({
                nombre: nombrePropiedad,
                puntaje: 5,
                tituloDescripcion: nombrePropiedad,
                contenidoDescripcion: descripcion,
                ubicacionMaps: "https://www.google.com/maps",
                caracteristicas: [
                ],
                imagenes: [
                    {
                        id: 150,
                        urlImagen: "https://grupo6-imagenes.s3.us-east-2.amazonaws.com/Img/12.jpg"
                    }
                ],
                ciudad: {
                  id: ciudad?.id,
                  nombre: ciudad?.nombre,
                  pais: ciudad?.pais
                },
                categoria: {
                id: categoria?.id,
                    titulo: categoria?.titulo,
                    descripcion: categoria?.descripcion,
                    urlImagen: categoria?.urlImagen
                }
            });

            console.log(ciudad);
            console.log(categoria);
            console.log(body);


            // Encabezados de la solicitud
            const headers = {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            };


            // Hacer la solicitud POST a la API
            const crearProducto = await fetch(url, {
                method: "POST",
                headers: headers,
                body: body
            });

            if (crearProducto.ok) {
                const response = await crearProducto.json();
                console.log("Producto enviado con éxito", response);
                navigate("/addedProduct");
            } else {
                throw new Error("Error al enviar el producto");
            }
            


        } catch (error) {
            console.error("Error al crear producto" + error);
            alert("Lamentablemente no se pudo crear el producto")

        }
    }


    return (

        <>
            <div className='categoryProduct'>
                <div className="displayFlexColumn">
                <span style={{ color: "rgb(251, 139, 36)", paddingLeft: "3rem", paddingBottom: "1.2rem", fontSize: "1.5rem", fontWeight: "700" }}>{user.usuarioDTO.rol.authority === 'ADMIN' &&
                    <p>Administración</p>} </span>
                </div>
                <Link to="/home"> <span className="arrowLeft"> <FontAwesomeIcon icon={faArrowLeft} /></span> </Link>
                
            </div>


            <section className='fondoCard'>

                <h3> Crear propiedad </h3>

                <div>

                    <form >
                        <div className='primerBloque'>
                            <div>
                                <label> Nombre de la propiedad </label>
                                <input type="text" onChange={handleNombrePropiedadChange} className='inputStyle' />
                            </div>
                            <div>
                                <label> Categoria </label>
                                <select  defaultValue={""} className='inputStyle' onChange={handleCategoriaChange}>
                                <option value="" disabled >Selecciona una categoria</option>
                                    {categorias.map(categoria => (
                                        <>
                                        
                                        <option key={categoria.id} value={categoria.id}> {categoria.titulo} </option>
                                        </>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label> Ciudad </label>
                                <select defaultValue={""} className='inputStyle' onChange={handleCiudadChange}>
                                <option value="" disabled >Selecciona una ciudad</option>
                                    {ciudades.map(ciudad => (
                                        <option key={ciudad.id} value={ciudad.id}> {ciudad.nombre} </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label> Dirección </label>
                                <input type="text" className='inputStyle'  />
                            </div>
                            <div>
                                <label> Latitud </label>
                                <input type="text" className='inputStyle'  />
                            </div>
                            <div>
                                <label> Longitud </label>
                                <input type="text" className='inputStyle'  />
                            </div>
                            <div>
                                <label> Descripción </label>
                                <input type="textarea" onChange={handleDescripcionChange} className='inputStylearea' />
                            </div>
                        </div>
                        <div className='caracteristicas'>
                            <div>
                                <label className='titulo5'> Caracteristicas </label>
                                <ul>
                                    {
                                        atributos.map(atributo => (
                                            <li className="caracteristicasProductosDetail liAdmin" key={atributo.id}>
                                                <FontAwesomeIcon icon={atributo.idIcono}/>
                                                <span>{atributo.descripcion}</span>
                                                <input  type="checkbox" name="" id="" className='chequear' />
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
                                <input type="textarea" className='inputStylearea'  />
                            </div>
                            <div>
                                <label> Salud y seguridad </label>
                                <input type="textarea" className='inputStylearea'  />
                            </div>
                            <div>
                                <label> Politicas de cancelación </label>
                                <input type="textarea" className='inputStylearea'  />
                            </div>
                        </div>
                        <div className='boton'>
                             <input type='submit' onClick={handleClick} value='Crear' className='envioForm' />
                        </div>

                    </form>

                </div>
            </section>

        </>
    )

}



export default Administrador;