
import React from "react";
import "../Styles/TemplateReserva.css"


const HourInput = () =>{

    return(
        <form className='Formulario-Hora-llegada'>
        <p className='Texto-Check-in'>Tu habitacion va a estar lista para el check-in entre las 10:00 AM y 11:00 PM</p>
        <label className='texto-Select-Formulario'>Indica tu horario estimado de llegada</label>
        <br />
        <select defaultValue={""} className='select-hora-llegada'>
            <option value="" disabled >Selecciona una hora</option>
            <option value="00:00">12:00 AM</option>
            <option value="01:00">01:00 AM</option>
            <option value="02:00">02:00 AM</option>
            <option value="03:00">03:00 AM</option>
            <option value="04:00">04:00 AM</option>
            <option value="05:00">05:00 AM</option>
            <option value="06:00">06:00 AM</option>
            <option value="07:00">07:00 AM</option>
            <option value="08:00">08:00 AM</option>
            <option value="09:00">09:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">01:00 PM</option>
            <option value="14:00">02:00 PM</option>
            <option value="15:00">03:00 PM</option>
            <option value="16:00">04:00 PM</option>
            <option value="17:00">05:00 PM</option>
            <option value="18:00">06:00 PM</option>
            <option value="19:00">07:00 PM</option>
            <option value="20:00">08:00 PM</option>
            <option value="21:00">09:00 PM</option>
            <option value="22:00">10:00 PM</option>
            <option value="23:00">11:00 PM</option>
        </select>
    </form>
    )
}

export default HourInput;