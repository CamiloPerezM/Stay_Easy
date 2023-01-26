import React, { useState } from 'react';
import { Form, Select, Button } from 'antd';
import 'react-datepicker/dist/react-datepicker.css';
// import { createRoot } from 'react-dom/client';
// import { DatePicker, DatePickerProvider, useDatePickGetter, useDatePickReset } from '@bcad1591/react-date-picker';
import "./Header.css"

const { Option } = Select;

const cities = [
  { name: 'Medellin', value: 'med' },
  { name: 'Bogota', value: 'bog' },
  { name: 'Cartagena', value: 'ctg' },
  { name: 'Cali', value: 'clo' },
  { name: 'Barranquilla', value: 'baq' },
];

// const container = document.getElementById('root');
// const root = createRoot(container);

function Buscador() {
  const [city, setCity] = useState(null);
  // const [dateRange, setDateRange] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Selected City:', city);
    // realice la búsqueda aquí con la ciudad seleccionada, startDate y endDate
  };

  // const { pickedDates } = useDatePickGetter();

  // const resetFunc = useDatePickReset();


  return (
    <Form onSubmit={handleSubmit} className="botones2">
      <Form.Item className="go">
        <Select
          placeholder="¿A dónde vamos?"
          onChange={value => setCity(value)}
          value={city}
        >
          {cities.map(city => (
            <Option key={city.value} value={city.value}>
              {city.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>      
        <input className="go" type= 'date' value='Check in - Check out' placeholder='Check in - Check out'></input>
      </Form.Item>

    {/* <div>
      <DatePicker disablePreviousDays />
      <hr />
      <div>{pickedDates.firstPickedDate?.toString()}</div>
      <div>{pickedDates.secondPickedDate?.toString()}</div>
      <button type="button" onClick={resetFunc}>
        Reset
      </button>
    </div> */}
      <Form.Item>
        <Button className="search">Buscar</Button>
      </Form.Item>
    </Form>
  );
}

export default Buscador;