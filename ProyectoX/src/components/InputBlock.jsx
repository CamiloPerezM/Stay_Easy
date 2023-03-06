import React from "react";
import "../Styles/InputBlock.css"


const InputBlock = ({change}) => {

    const handleCiudad = (e) => {
        const city = /^[a-zA-Z]+$/;
        const input = e.target.value;
      
        if (!input.match(city)) {
          alert("El campo de ciudad debe contener solo letras");
          return;
        }
      
        change(input);
      };
      

    return (


        <section>
            <h3 className="tituloFormReserva">Completá tus datos</h3>
            <div className="containerInputs">
                <form className="formI">
                    <div className="divForm">
                        <span className="spanMargin">
                            <label className="label" htmlFor="fName">Nombre</label>
                            <input className="inputBlock marginInput" type="text" value={"Pablo"} id="fName" name="fName" disabled />
                        </span>
                        <span>
                            <label className="label" htmlFor="fApellido">Apellido</label>
                            <input className="inputBlock marginInput" type="text" value={"Novoa"} id="fApellido" name="fApellido" disabled />
                        </span>
                    </div>
                    <div className="divForm">


                        <span className="spanMargin">
                            <label className="label" htmlFor="fEmail">Email</label>
                            <input className="inputBlock"type="text" value={"pablonn@gmail.com"} id="fEmail" name="fEmail" disabled />
                        </span>

                        <span>

                            <label className="label" htmlFor="fCiudad">Ciudad</label>
                            <input className="inputBlockCity" 
                                placeholder="Ciudad" 
                                type="text"
                                pattern="^[a-zA-Z]+$" 
                                id="fCiudad" 
                                name="fCiudad" 
                                onChange={handleCiudad} 
                                required
                            />
                        </span>

                    </div>
                </form>
            </div>
        </section>



    )
}


export default InputBlock;