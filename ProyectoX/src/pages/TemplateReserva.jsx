import React, { useEffect, useState } from 'react';
import InputBlock from '../components/InputBlock';
import "../Styles/TemplateReserva.css"
import Calendar from 'react-calendar';
import HourInput from '../components/HourInput';
import CardProductReserve from '../components/CardProductReserve';
import { useParams } from 'react-router';


function TemplateReserva() {




    const [fechaInicial, setFechaInicial] = useState(null);
    const [fechaFinal, setFechaFinal] = useState(null);
    const [rangoFechas, setRangoFechas] = useState([]);

    const handleDateChange = (date) => {
        setFechaInicial(date[0]);
        setFechaFinal(date[1]);
        setRangoFechas(date);
    };

    const resetSelección = () => {
        setFechaInicial(null);
        setFechaFinal(null);
        setRangoFechas([]);
    };



    return (
        <>
            <header>
                <div className="div-header">
                    <h2 className="tipo-hospedaje-header">Hotel</h2>
                    <h2 className="nombre-hospedaje-header">Hermitage Hotel</h2>
                </div>
            </header>

            <main className='containerDisplay backgroundColor'>

                <div className='main'>

                    <InputBlock />

                    <h3 className='titulos-main'>Selecciona tu fecha de reserva</h3>
                    <div className='marginCalendar'>
                        {/* Lugar para el calendario */}
                        <Calendar
                            showDoubleView={true}
                            selectRange={true}
                            minDate={new Date(Date.now())}
                            goToRangeStartOnSelect={false}
                            onChange={handleDateChange}
                        />

                    </div>
                    <h3 className='titulos-main'>Tu horario de llegada</h3>
                    <HourInput />

                </div>

                <CardProductReserve fechaInicial={fechaInicial} fechaFinal={fechaFinal}/>
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