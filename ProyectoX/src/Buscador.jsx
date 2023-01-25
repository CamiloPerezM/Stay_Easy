import React, { useState } from 'react';
import { Form, Select, Button } from 'antd';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const { Option } = Select;

const cities = [
  { name: 'New York', value: 'ny' },
  { name: 'Los Angeles', value: 'la' },
  { name: 'Chicago', value: 'ch' },
  { name: 'Houston', value: 'ho' },
  { name: 'Phoenix', value: 'ph' },
];

function SearchForm() {
  const [city, setCity] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Selected City:', city);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    // realice la búsqueda aquí con la ciudad seleccionada, startDate y endDate
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item label="Select City">
        <Select
          placeholder="Select a city"
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
      <Form.Item label="Start Date">
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          placeholderText="Select start date"
          minDate={new Date()}
          maxDate={endDate}
        />
      </Form.Item>
      <Form.Item label="End Date">
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          placeholderText="Select end date"
          minDate={startDate}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SearchForm;
