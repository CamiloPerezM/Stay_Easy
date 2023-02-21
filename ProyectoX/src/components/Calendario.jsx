import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'antd';
import 'react-calendar/dist/Calendar.css';

function Calendario() {
  // const [fechaInicial, setFechaInicial] = useState([]);
  // const [fechaFinal, setFechaFinal] = useState();

  const handleDateChange = (date) => {
    console.log(date[0]);
    const perroCalendario = date[0]; 
    setFechaInicial(perroCalendario);
  };



  return (
    <div className='calendar'>
      <div className='seleccion'>
        <h2>Selecciona un rango de fechas:</h2>
        {/* <h1>
          {fechaInicial}
        </h1> */}

        {/* <input
          type="text"
          defaultValue={dateRange}
        /> */}

        {/* <p>
          {dateRange[0]?.toLocaleDateString() || ''} - {dateRange[1]?.toLocaleDateString() || ''}
        </p> */}
      </div>
      <div>
        <Calendar
          showDoubleView={true}
          selectRange={true}
          minDate={new Date(Date.now())}
          goToRangeStartOnSelect={false}
          // onChange={handleDateChange}
          // allowPartialRange={true}
          />
      </div>
      <Button className='aplicar'>Aplicar</Button>
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