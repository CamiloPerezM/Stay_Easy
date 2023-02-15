import React, { useState } from "react";
import { Button, Form, DatePicker } from 'antd';

const { RangePicker } = DatePicker


const onOpenChange = (open) => {
    console.log("onOpenChange", open);
  };
  
  const onCalendarChange = (dates) => {
    console.log("onCalendarChange", dates);
  };

function Calendario() {
return (

    <div className="calendar">
        <Form.Item>
            <RangePicker onOpenChange={onOpenChange} onCalendarChange={onCalendarChange} placeholder={["Check in", "Check out"]}> 
            </RangePicker>
                <Button>Aplicar</Button>
        </Form.Item>
    </div>
)
}

export default Calendario;