import React, { useState } from "react";
import { Button, Form, DatePicker } from 'antd';

const { RangePicker } = DatePicker

function Calendario() {
  const [selectedDates, setSelectedDates] = useState([]);

  const onOpenChange = (open) => {
    console.log("onOpenChange", open);
  };
  
  const onCalendarChange = (dates) => {
    console.log("onCalendarChange", dates);
    setSelectedDates(dates);
  };

  const handleApplyButtonClick = () => {
    console.log('Selected dates:', selectedDates);
    // Aquí puedes hacer lo que necesites con las fechas seleccionadas
  };

  return (
    <div className="calendar">
      <Form.Item>
        <RangePicker onOpenChange={onOpenChange} onCalendarChange={onCalendarChange} placeholder={["Check in", "Check out"]} />
      </Form.Item>
        
      <Button onClick={handleApplyButtonClick}>Aplicar</Button>
    </div>
  )
}

export default Calendario;