import React, { useContext, useState } from 'react';
import { Form, Select, Button, DatePicker } from 'antd';
import "../Styles/Header.css"
import { ContextGlobal } from './utils/global.context';
import { Link } from 'react-router-dom';
// import Link from 'antd/es/typography/Link';


const { Option } = Select;

const { RangePicker } = DatePicker;

const onOpenChange = (open) => {
  console.log("onOpenChange", open);
};

const onCalendarChange = (dates) => {
  console.log("onCalendarChange", dates);
};

function Buscador() {
  const [city, setCity] = useState(null);
  const {ciudades} =useContext(ContextGlobal);

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
          {ciudades.map(city => (
            <Option key={city.id} value={city.nombre}>
              {city.nombre}
            </Option>
          ))}
        </Select>
      </Form.Item>
      
      <Form.Item className='go'>
        <RangePicker
          onOpenChange={onOpenChange}
          onCalendarChange={onCalendarChange}
          placeholder={["Check in", "Check out"]}
        />
      </Form.Item>

      <Form.Item>
         {<Link to={`/producto/ciudad/${1}`}> <Button className="search">Buscar</Button></Link>}
      </Form.Item>
    </Form>
  );
}

export default Buscador;