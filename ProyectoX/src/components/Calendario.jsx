import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'antd';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

function Calendario({id}) {
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
    <div className='calendar'>
    <div className='seleccion'>
         <h2>Selecciona un rango de fechas:</h2>
         {fechaInicial && fechaFinal ? (
           <p>
             {fechaInicial.toLocaleDateString()} - {fechaFinal.toLocaleDateString()}
           </p>
         ) : (
           <p>Selecciona un rango de fechas</p>
         )}
    </div>
    <div className='calendario'>
      <Calendar
        showDoubleView={true}
        selectRange={true}
        minDate={new Date(Date.now())}
        goToRangeStartOnSelect={false}
        onChange={handleDateChange}
      />
    </div>
    <div className='botonesCalendario'>
      <Link to={`/producto/${id}/reserva`}> <Button className='aplicar' onClick={() => console.log(rangoFechas)}>
        Reservar
      </Button></Link>
      <Button className='borrar' onClick={resetSelección}>
        Borrar selección
      </Button>
    </div>
  </div>
);
}


export default Calendario;
