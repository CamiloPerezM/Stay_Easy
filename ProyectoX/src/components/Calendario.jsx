import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'antd';
import 'react-calendar/dist/Calendar.css';

function Calendario() {
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
    <div className='calendar'>
      <div className='seleccion'>
        <h2>Selecciona un rango de fechas:</h2>
        <p>
          {dateRange[0]?.toLocaleDateString() || ''} - {dateRange[1]?.toLocaleDateString() || ''}
        </p>
      </div>
      <div>
        <Calendar
          showDoubleView={true}
          selectRange={true}
          value={dateRange}
          onChange={handleDateChange}
          allowPartialRange={true}
        />
      </div>
      <Button onClick={handleApplyButtonClick} className='aplicar'>Aplicar</Button>
    </div>
  );
}

export default Calendario;








// import React, { useState } from "react";
// import { Button, Form, DatePicker } from 'antd';

// const { RangePicker } = DatePicker

// function Calendario() {
//   const [selectedDates, setSelectedDates] = useState([]);

//   const onOpenChange = (open) => {
//     console.log("onOpenChange", open);
//   };
  
//   const onCalendarChange = (dates) => {
//     console.log("onCalendarChange", dates);
//     setSelectedDates(dates);
//   };

//   const handleApplyButtonClick = () => {
//     console.log('Selected dates:', selectedDates);
//     // Aquí puedes hacer lo que necesites con las fechas seleccionadas
//   };

//   return (
//     <div className="calendar">
//       <Form.Item>
//         <RangePicker onOpenChange={onOpenChange} onCalendarChange={onCalendarChange} placeholder={["Check in", "Check out"]} />
//       </Form.Item>
        
//       <Button onClick={handleApplyButtonClick}>Aplicar</Button>
//     </div>
//   )
// }

// export default Calendario;