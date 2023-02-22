import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'antd';
import 'react-calendar/dist/Calendar.css';

function Calendario() {
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
          <h1>
            {fechaInicial.toLocaleDateString()} - {fechaFinal.toLocaleDateString()}
          </h1>
        ) : (
          <p>Selecciona un rango de fechas</p>
        )}
      </div>
      <div>
        <Calendar
          showDoubleView={true}
          selectRange={true}
          minDate={new Date(Date.now())}
          goToRangeStartOnSelect={false}
          onChange={handleDateChange}
        />
      </div>
      <div className='botones'>
        <Button className='aplicar' onClick={() => console.log(rangoFechas)}>
          Aplicar
        </Button>
        <Button className='borrar' onClick={resetSelección}>
          Borrar selección
        </Button>
      </div>
    </div>
  );
}

export default Calendario;
