import React, { useEffect, useState } from 'react';
import InputBlock from '../components/InputBlock';
import "../Styles/TemplateReserva.css"
import Calendar from 'react-calendar';
import HourInput from '../components/HourInput';
import CardProductReserve from '../components/CardProductReserve';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function TemplateReserva() {
    const [fechaInicial, setFechaInicial] = useState(null);
    const [fechaFinal, setFechaFinal] = useState(null);
    const [rangoFechas, setRangoFechas] = useState([]);
    const [ciudad, setCiudad] = useState('');
    const [hora, setHora] = useState(null);
    console.log(hora, 'esta es la hora');

    const handleDateChange = (date) => {
        setFechaInicial(date[0]);
        setFechaFinal(date[1]);
        setRangoFechas(date);
    };

    const resetSeleccion = () => {
        setFechaInicial(null);
        setFechaFinal(null);
        setRangoFechas([]);
    };

    const datos = useParams();
    console.log(datos);

    const [productoCiudad, setProductoCiudad] = useState({});
    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch(`http://localhost:8080/producto/${datos.id}`);
                const data = await response.json();
                setProductoCiudad(data);
            } catch (error) {
                console.log(error);
            }
        }    
        getProducts();
    }, [datos.id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const reservaData = {
            ciudad: ciudad,
            hora: hora,
            rangoFechas: rangoFechas
        };
        fetch('http://localhost:8080/reserva/registrar', {
            method: 'POST',
            body: JSON.stringify(reservaData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error al enviar la reserva');
            }
        })
        .then(data => {
            console.log('Reserva enviada con éxito');
        })
        .catch(error => {
            console.error('Error al enviar la reserva:', error);
        });
    };

    console.log(ciudad);
    console.log(hora);

    return (
        <>
            <header className='displayflex'>
                <div className="div-header">
                    <h2 className="tipo-hospedaje-header">{productoCiudad?.categoria?.titulo ?? ""}</h2>
                    <h2 className="nombre-hospedaje-header">{productoCiudad?.tituloDescripcion ?? "Cargando"}</h2>
                </div>   
                <Link to={`/producto/${datos.id}`}> <span className='iconArrow'> <FontAwesomeIcon icon={faArrowLeft}/></span> </Link>   
            </header>

            <main className='containerDisplay backgroundColor' onSubmit={handleSubmit}>

                <div className='main'>

                    <InputBlock change={setCiudad}/>

                    <h3 className='titulos-main'>Selecciona tu fecha de reserva</h3>
                    <div className='marginCalendar'>
                        {/* Lugar para el calendario */}
                        <Calendar
                            showDoubleView={true}
                            selectRange={true}
                            minDate={new Date(Date.now())}
                            goToRangeStartOnSelect={false}
                            onChange={handleDateChange}
                            required
                        />

                    </div>
                    <h3 className='titulos-main'>Tu horario de llegada</h3>

                    <HourInput 
                        change={setHora} 
                        required
                    />

                </div>

                <CardProductReserve 
                    fechaInicial={fechaInicial} 
                    fechaFinal={fechaFinal}   
                    hora={hora} 
                    ciudad={ciudad}
                    onSubmit={handleSubmit}
                    required
                />
            </main>

            <article>
                <h3 className='titulo-principal-footer'>Que tenes que saber</h3>
                <hr className='line' />
                <div className='container-footer'>
                    <div className='columna'>
                        <h3 className='titulos-footer'>Normas de la casa</h3>
                        <p className='textos-footer'>Check-out: 11:00 AM </p>
                        <p className='textos-footer'>No se permiten fiestas</p>
                        <p className='textos-footer'>No fumar</p>
                    </div>
                    <div className='columna'>
                        <h3 className='titulos-footer'>Salud y seguridad</h3>
                        <p className='textos-footer'>
                            Se aplican las pautas de distanciamiento social<br />
                            y otras normas relacionadas con el coronavirus
                        </p>
                        <p className='textos-footer'>Detector de humo</p>
                        <p className='textos-footer'>Deposito de seguridad</p>
                    </div>
                    <div className='columna'>
                        <h3 className='titulos-footer'>Politica de cancelacion</h3>
                        <p className='textos-footer'>
                            Agrega las fechas de tu viaje para obtener los<br />
                            detalles de cancelacion de esta estadia.
                        </p>
                    </div>
                </div>
            </article>
        </>
    )

}

export default TemplateReserva;




// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ NO BORRAR ESTO POR FAVOR ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓


// import React, { useEffect, useState } from 'react';
// import InputBlock from '../components/InputBlock';
// import "../Styles/TemplateReserva.css"
// import Calendar from 'react-calendar';
// import HourInput from '../components/HourInput';
// import CardProductReserve from '../components/CardProductReserve';
// import { useParams } from 'react-router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { Link } from 'react-router-dom';


// function TemplateReserva() {
//     const [fechaInicial, setFechaInicial] = useState(null);
//     const [fechaFinal, setFechaFinal] = useState(null);
//     const [rangoFechas, setRangoFechas] = useState([]);
//     const [ciudad, setCiudad] = useState();
//     const [hora, setHora] = useState(null);

//     const handleDateChange = (date) => {
//         setFechaInicial(date[0]);
//         setFechaFinal(date[1]);
//         setRangoFechas(date);
//     };

//     const resetSelección = () => {
//         setFechaInicial(null);
//         setFechaFinal(null);
//         setRangoFechas([]);
//     };


//     const datos = useParams();
//     console.log(datos)

//     const [productoCiudad, setProductoCiudad] = useState([]);
//     useEffect(() => {

//         async function getProducts() {

//             try {
//                 const response = await fetch(`http://localhost:8080/producto/${datos.id}`);
//                 const data = await response.json();
//                 setProductoCiudad(data);
//             } catch (error) {
//                 console.log(error);
//             }
//         }    
//         getProducts();
//     }, [datos.id])

//     class ReservaForm extends React.Component {
//         constructor(props) {
//           super(props);
//           this.state = {
//             ciudad: '',
//             hora: '',
//             rangoFechas: ''
//           };
//         }
      
//         handleSubmit(event) {
//           event.preventDefault();
//           fetch('http://localhost:8080/reserva', {
//             method: 'POST',
//             body: JSON.stringify(this.state),
//             headers: {
//               'Content-Type': 'application/json'
//             }
//           })
//             .then(response => {
//               if (response.ok) {
//                 return response.json();
//               } else {
//                 throw new Error('Error al enviar la reserva');
//               }
//             })
//             .then(data => {
//               console.log('Reserva enviada con éxito');
//             })
//             .catch(error => {
//               console.error('Error al enviar la reserva:', error);
//             });
//         }
//       }
      

// console.log(ciudad);
// console.log(hora);

//     return (
//         <>
//             <header className='displayflex'>
//                 <div className="div-header">
//                     <h2 className="tipo-hospedaje-header">{productoCiudad?.categoria?.titulo?? ""}</h2>
//                     <h2 className="nombre-hospedaje-header">{productoCiudad?.tituloDescripcion??"Cargando"}</h2>
//                 </div>   
//                 <Link to={`/producto/${datos.id}`}> <span className='iconArrow'> <FontAwesomeIcon icon={faArrowLeft}/></span> </Link>   
//             </header>

//             <main className='containerDisplay backgroundColor' onSubmit={this.handleSubmit}>

//                 <div className='main'>

//                     <InputBlock change={setCiudad}/>

//                     <h3 className='titulos-main'>Selecciona tu fecha de reserva</h3>
//                     <div className='marginCalendar'>
//                         {/* Lugar para el calendario */}
//                         <Calendar
//                             showDoubleView={true}
//                             selectRange={true}
//                             minDate={new Date(Date.now())}
//                             goToRangeStartOnSelect={false}
//                             onChange={handleDateChange}
//                             required
//                         />

//                     </div>
//                     <h3 className='titulos-main'>Tu horario de llegada</h3>

//                     <HourInput 
//                         change={setHora} 
//                         required
//                     />

//                 </div>

//                 <CardProductReserve 
//                     fechaInicial={fechaInicial} 
//                     fechaFinal={fechaFinal}   
//                     hora={hora} 
//                     ciudad={ciudad}
//                     onSubmit={handleSubmit}
//                 />
//             </main>

//             <article>
//                 <h3 className='titulo-principal-footer'>Que tenes que saber</h3>
//                 <hr className='line' />
//                 <div className='container-footer'>
//                     <div className='columna'>
//                         <h3 className='titulos-footer'>Normas de la casa</h3>
//                         <p className='textos-footer'>Check-out: 11:00 AM </p>
//                         <p className='textos-footer'>No se permiten fiestas</p>
//                         <p className='textos-footer'>No fumar</p>
//                     </div>
//                     <div className='columna'>
//                         <h3 className='titulos-footer'>Salud y seguridad</h3>
//                         <p className='textos-footer'>
//                             Se aplican las pautas de distanciamiento social<br />
//                             y otras normas relacionadas con el coronavirus
//                         </p>
//                         <p className='textos-footer'>Detector de humo</p>
//                         <p className='textos-footer'>Deposito de seguridad</p>
//                     </div>
//                     <div className='columna'>
//                         <h3 className='titulos-footer'>Politica de cancelacion</h3>
//                         <p className='textos-footer'>
//                             Agrega las fechas de tu viaje para obtener los<br />
//                             detalles de cancelacion de esta estadia.
//                         </p>
//                     </div>
//                 </div>
//             </article>
//         </>
//     )

// }

// export default TemplateReserva;