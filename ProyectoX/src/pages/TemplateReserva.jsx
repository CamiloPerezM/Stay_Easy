import React, { useState } from 'react';
import Calendario from '../components/Calendario';
import CardReserve from '../components/CardReserve';
import InputBlock from '../components/InputBlock';
import "../Styles/TemplateReserva.css"
import Calendar from 'react-calendar';
import HourInput from '../components/HourInput';
import CardProductReserve from '../components/CardProductReserve';


function Formulario() {
    const [formulario, setFormulario] = useState({
        nombre: '',
        apellido: '',
        correoElectronico: '',
        ciudad: ''
    });

    const handleChange = e => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formulario);
        // envíe los datos del formulario a su servidor aquí
    };

    const [dateRange, setDateRange] = useState([new Date(), new Date()]);

    const handleDateChange = (date) => {
        setDateRange((prevRange) => {
            if (prevRange[0] && !prevRange[1]) {
                // Si se ha seleccionado la primera fecha, pero no la segunda
                // establecer la segunda fecha a la fecha seleccionada y devolver el nuevo rango de fechas
                return [prevRange[0], date];
            } else {
                // Si se han seleccionado ambas fechas, restablecer el rango a la nueva fecha seleccionada
                return [date, null];
            }
        });
    };

    const handleApplyButtonClick = () => {
        console.log('Selected dates:', dateRange);
        // Aquí puedes hacer lo que necesites con las fechas seleccionadas
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
                            value={dateRange}
                            onChange={handleDateChange}
                            allowPartialRange={true}
                        />

                    </div>
                    <h3 className='titulos-main'>Tu horario de llegada</h3>
                    <HourInput />

                </div>

                <CardProductReserve/>
            </main>

            <article>
                <h3 className='titulo-principal-footer'>Que tenes que saber</h3>
                <hr className='line'/>
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

export default Formulario;