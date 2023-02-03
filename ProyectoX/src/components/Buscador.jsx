import React, { useState } from 'react';
import { Form, Select, Button } from 'antd';
import "../Styles/Header.css"
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';

const { Option } = Select;

const cities = [
  { name: 'Medellin', value: 'med' },
  { name: 'Bogota', value: 'bog' },
  { name: 'Cartagena', value: 'ctg' },
  { name: 'Cali', value: 'clo' },
  { name: 'Barranquilla', value: 'baq' },
];


function Buscador() {
  const [city, setCity] = useState(null);
  
  // const [value, setValue] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Selected City:', city);
    // realice la búsqueda aquí con la ciudad seleccionada, startDate y endDate
  };
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

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
        <DateRangePicker onChange={item => setState([item.selection])}
           showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                  months={2}
                     ranges={state}
                           direction="horizontal"
        />;
      </Form.Item>
      <Form.Item>
        <Button className="search">Buscar</Button>
      </Form.Item>
    </Form>
  );
}

export default Buscador;