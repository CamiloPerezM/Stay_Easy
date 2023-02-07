import React, { useState } from 'react';
import { Form, Select, Button } from 'antd';
import { DatePicker } from "antd";
import "../Styles/Header.css"


const { Option } = Select;

const cities = [
  { name: 'Medellin', value: 'med' },
  { name: 'Bogota', value: 'bog' },
  { name: 'Cartagena', value: 'ctg' },
  { name: 'Cali', value: 'clo' },
  { name: 'Barranquilla', value: 'baq' },
];

const { RangePicker } = DatePicker;

const onOpenChange = (open) => {
  console.log("onOpenChange", open);
};

const onCalendarChange = (dates) => {
  console.log("onCalendarChange", dates);
};

function Buscador() {
  const [city, setCity] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Selected City:', city);
  };

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
      
      <Form.Item className='go'>
        <RangePicker
          onOpenChange={onOpenChange}
          onCalendarChange={onCalendarChange}
        />
      </Form.Item>

      <Form.Item>
        <Button className="search">Buscar</Button>
      </Form.Item>
    </Form>
  );
}

export default Buscador;