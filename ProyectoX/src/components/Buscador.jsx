import React, { useContext, useState } from "react";
import { Form, Select, Button, DatePicker } from "antd";
import "../Styles/Header.css";
import { ContextGlobal } from "./Services/global.context";

import { Link } from "react-router-dom";
// import Link from 'antd/es/typography/Link';

const { Option } = Select;

const { RangePicker } = DatePicker;

function Buscador() {
  const [city, setCity] = useState(null);
  const { ciudades } = useContext(ContextGlobal);
  const [selectedDates, setSelectedDates] = useState([]);
  var ruta;

  const onOpenChange = (open) => {
    console.log("onOpenChange", open);
  };

  const onCalendarChange = (dates) => {
    console.log("onCalendarChange", dates);
    setSelectedDates(dates);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected City:", city);
  };

  const cityFind = ciudades.find((data) => data.nombre === city);

  if (city === null) {
    if (selectedDates != null) {
      if (selectedDates[1] != null && selectedDates[0] != null) {
        console.log("busqueda por fecha");

        let annoIn;
        let mesIn;
        let diaIn;

        let annoOut;
        let mesOut;
        let diaOut;

        annoIn = selectedDates[0].$y;
        mesIn = selectedDates[0].$M + 1;
        diaIn = selectedDates[0].$D;

        annoOut = selectedDates[1].$y;
        mesOut = selectedDates[1].$M + 1;
        diaOut = selectedDates[1].$D;

        ////

        mesIn = mesIn.toString().padStart(2, "0");
        diaIn = diaIn.toString().padStart(2, "0");

        mesOut = mesOut.toString().padStart(2, "0");
        diaOut = diaOut.toString().padStart(2, "0");

        //console.log("Año checkin",annoIn);
        //console.log("mes checkin",mesIn);
        //console.log("dia checkin",diaIn);

        //console.log("Año checkin",annoOut);
        //console.log("Año checkin",mesOut);
        //console.log("Año checkin",diaOut);

        let stringCheckIn = annoIn + "-" + mesIn + "-" + diaIn;
        let stringCheckOut = annoOut + "-" + mesOut + "-" + diaOut;

        //console.log(stringCheckIn);
        // console.log(stringCheckOut);

        // ?checkIn=2022-01-18&checkOut=2024-10-20

        const stringPostman =
          "?checkIn=" + stringCheckIn + "&checkOut=" + stringCheckOut;

        console.log("string postman", stringPostman);

        ruta = `/producto/fech/${stringPostman}`;

        //ruta = `/producto/fech/`;

        console.log("Ruta", ruta);
      }
    } else {
      ruta = `/home`;
    }
  } else if (selectedDates.length === 0) {
    ruta = `/producto/ciudad/${city === null ? "" : cityFind.id}`;
  } else {
    if (selectedDates[1] != null && selectedDates[0] != null) {
      let annoIn;
      let mesIn;
      let diaIn;

      let annoOut;
      let mesOut;
      let diaOut;

      annoIn = selectedDates[0].$y;
      mesIn = selectedDates[0].$M + 1;
      diaIn = selectedDates[0].$D;

      annoOut = selectedDates[1].$y;
      mesOut = selectedDates[1].$M + 1;
      diaOut = selectedDates[1].$D;

      ////

      mesIn = mesIn.toString().padStart(2, "0");
      diaIn = diaIn.toString().padStart(2, "0");

      mesOut = mesOut.toString().padStart(2, "0");
      diaOut = diaOut.toString().padStart(2, "0");

      //console.log("Año checkin",annoIn);
      //console.log("mes checkin",mesIn);
      //console.log("dia checkin",diaIn);

      //console.log("Año checkin",annoOut);
      //console.log("Año checkin",mesOut);
      //console.log("Año checkin",diaOut);

      let stringCheckIn = annoIn + "-" + mesIn + "-" + diaIn;
      let stringCheckOut = annoOut + "-" + mesOut + "-" + diaOut;

      //console.log(stringCheckIn);
      // console.log(stringCheckOut);

      // ?checkIn=2022-01-18&checkOut=2024-10-20

      const stringPostman =
        "?checkIn=" + stringCheckIn + "&checkOut=" + stringCheckOut;

      console.log("string postman", stringPostman);

      let params = cityFind.id + stringPostman;

      ruta = `/producto/fecha/ciudad/${params}`;
    }
  }

  const handleApplyButtonClick = () => {
    console.log("Selected dates:", selectedDates);

    // Aquí puedes hacer lo que necesites con las fechas seleccionadas
  };

  return (
    <Form onSubmit={handleSubmit} className="botones2">
      <Form.Item className="go">
        <Select
          placeholder="¿A dónde vamos?"
          onChange={(value) => setCity(value)}
          value={city}
        >
          {ciudades.map((city) => (
            <Option key={city.id} value={city.nombre} data-id={city.id}>
              {city.nombre}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item className="go">
        <RangePicker
          onOpenChange={onOpenChange}
          onCalendarChange={onCalendarChange}
          placeholder={["Check in", "Check out"]}
        />
      </Form.Item>

      <Form.Item>
        {
          <Link to={ruta}>
            <Button onClick={handleApplyButtonClick} className="search">
              Buscar
            </Button>
          </Link>
        }
      </Form.Item>
    </Form>
  );
}

export default Buscador;
