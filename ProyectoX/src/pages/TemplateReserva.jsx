import React, { useState } from 'react';
import "../Styles/TemplateReserva.css"

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

    return(
        <>
            <header>
                <div className="div-header">
                    <h2 className="tipo-hospedaje-header">Hotel</h2>
                    <h2 className="nombre-hospedaje-header">Hermitage Hotel</h2>
                </div>
            </header>

            <main className='main  backgroundColor'>
                <h1 className="titulos-main">Completa tus datos</h1>
                <br/>
                    <form className='formulario-reserva'>
                        <div className='top-row'> 
                            <div class="form-item">
                                <label htmlFor="nombre" className='nombre'>Nombre</label>
                                <input type="text" id="nombre" name="nombre" className='nombre-input' value={formulario.nombre} onChange={handleChange} />
                            </div>
                            <div class="form-item">
                                <label htmlFor="apellido" className='apellido'>Apellido</label>
                                <input type="text" id="apellido" name="apellido" className='apellido-input' value={formulario.apellido} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='bottom-row'>
                            <div className='form-item'>
                                <label htmlFor="correoElectronico" className='email'>Correo electrónico</label>
                                <input type="email" id="correoElectronico" name="correoElectronico" className='email-input' value={formulario.correoElectronico} onChange={handleChange} />
                            </div>
                            <div className='form-item'>
                                <label htmlFor="ciudad" className='ciudad'>Ciudad</label>
                                <input type="text" id="ciudad" name="ciudad" className='ciudad-input' value={formulario.ciudad} onChange={handleChange} />
                            </div>
                        </div>
                    </form>

                <h1 className='titulos-main'>Selecciona tu fecha de reserva</h1>
                    <div>
                        {/* Lugar para el calendario */}
                    </div>
                <h1 className='titulos-main'>Tu horario de llegada</h1>
                    <form className='Formulario-Hora-llegada'>
                        <p className='Texto-Check-in'>Tu habitacion va a estar lista para el check-in entre las 10:00 AM y 11:00 PM</p>
                        <label className='texto-Select-Formulario'>Indica tu horario estimado de llegada</label>
                        <br/>
                        <select className='select-hora-llegada'>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 AM</option>
                            <option>01:00 AM</option>
                        </select>
                    </form>
                    
            </main>

            <footer>
                <h1 className='titulo-principal-footer'>Que tenes que saber</h1>
                <hr/>
                <div className='container-footer'>
                    <div className='columna'>
                        <h1 className='titulos-footer'>Normas de la casa</h1>
                        <p className='textos-footer'>Check-out: </p>
                        <p className='textos-footer'>No se permiten fiestas</p>
                        <p className='textos-footer'>No fumar</p>
                    </div>
                    <div className='columna'> 
                        <h1 className='titulos-footer'>Salud y seguridad</h1>
                        <p className='textos-footer'>
                            Se aplican las pautas de distanciamiento social<br/>
                            y otras normas relacionadas con el coronavirus
                        </p>
                        <p className='textos-footer'>Detector de humo</p>
                        <p className='textos-footer'>Deposito de seguridad</p>
                    </div>
                    <div className='columna'>
                        <h1 className='titulos-footer'>Politica de cancelacion</h1>
                        <p className='textos-footer'>
                            Agrega las fechas de tu viaje para obtener los<br/>
                            detalles de cancelacion de esta estadia.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default Formulario;