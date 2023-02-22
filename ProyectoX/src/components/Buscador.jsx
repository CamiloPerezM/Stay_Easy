import React, { useContext, useState } from 'react';
import { Form, Select, Button, DatePicker } from 'antd';
import { ContextGlobal } from './utils/global.context';
import { Link } from 'react-router-dom';
import "../Styles/Header.css"
// import Link from 'antd/es/typography/Link';


const { Option } = Select;

const { RangePicker } = DatePicker;

function Buscador() {
  const [city, setCity] = useState(null);
  const { ciudades } = useContext(ContextGlobal);
  const [selectedDates, setSelectedDates] = useState([]);

  const onOpenChange = (open) => {
    console.log("onOpenChange", open);
  };
  
  const onCalendarChange = (dates) => {
    console.log("onCalendarChange", dates);
    setSelectedDates(dates);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Selected City:', city);
  };


    const cityFind = ciudades.find(data => data.nombre===city);

  const handleApplyButtonClick = () => {
    console.log('Selected dates:', selectedDates);
    // Aquí puedes hacer lo que necesites con las fechas seleccionadas
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
            <Option key={city.id} value={city.nombre} data-id={city.id}>
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
        {<Link to={`/producto/ciudad/${city===null?"": cityFind.id}`}> 
          <Button onClick={handleApplyButtonClick} className="search">Buscar</Button>
        </Link>}
      </Form.Item>
    </Form>
  );
}

export default Buscador;